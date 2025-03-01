import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';
import { glob } from 'glob';

// ES module equivalent for __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const svgDir = path.resolve(__dirname, '../svg');
const componentsDir = path.resolve(__dirname, '../src/components');
const iconsIndexFile = path.resolve(__dirname, '../src/icons.ts');
const indexFile = path.resolve(__dirname, '../src/index.ts');

// Utility function to convert kebab-case to PascalCase
function kebabToPascal(name: string): string {
  // Convert kebab-case to PascalCase
  const pascalCase = name
    .split('-')
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');
  
  // Handle names that start with numbers by prefixing with "Icon"
  if (/^\d/.test(pascalCase)) {
    return `Icon${pascalCase}`;
  }
  
  return pascalCase;
}

// Utility function to extract icon file name without extension
function getIconName(filePath: string): string {
  const basename = path.basename(filePath);
  return basename.substring(0, basename.lastIndexOf('.'));
}

async function generateComponents() {
  console.log('Generating React components from SVGs...');
  
  // Ensure the components directory exists
  fs.ensureDirSync(componentsDir);
  
  // Get all SVG files
  const svgFiles = await glob('*.svg', { cwd: svgDir });
  
  const componentNames: string[] = [];
  const originalNamesMap: Record<string, string> = {}; // Original name to component name mapping
  
  // Process each SVG file
  for (const svgFile of svgFiles) {
    const svgPath = path.join(svgDir, svgFile);
    const originalName = getIconName(svgFile);
    const componentName = kebabToPascal(originalName);
    
    // Store mapping
    originalNamesMap[originalName] = componentName;
    
    // Read the SVG content
    const svgContent = fs.readFileSync(svgPath, 'utf8');
    
    // Extract viewBox and path data
    const viewBoxMatch = svgContent.match(/viewBox="([^"]+)"/);
    const viewBox = viewBoxMatch ? viewBoxMatch[1] : '0 0 24 24';
    
    const pathMatch = svgContent.match(/<path[^>]*?d="([^"]+)"[^>]*?>/g);
    const paths = pathMatch ? pathMatch : [];
    
    // Create the component code
    const componentCode = `import React from 'react';

export interface ${componentName}Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const ${componentName} = ({size = 24, className = "", ...props}: ${componentName}Props) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="${viewBox}" 
      className={\`\${className}\`} 
      {...props}
    >
      ${paths.map(path => path.replace(/fill="[^"]*"/, 'fill="currentColor"')).join('\n      ')}
    </svg>
  );
};

${componentName}.displayName = '${componentName}';
`;
    
    // Write the component file
    const componentFile = path.join(componentsDir, `${componentName}.tsx`);
    fs.writeFileSync(componentFile, componentCode);
    
    // Add to component names list
    componentNames.push(componentName);
  }
  
  console.log(`Successfully generated ${componentNames.length} icon components.`);
  
  return { componentNames, originalNamesMap };
}

async function generateIconsIndex(componentNames: string[], originalNamesMap: Record<string, string>) {
  console.log('Generating icons index...');
  
  // Create exports for each icon
  const imports = componentNames
    .map(name => `import { ${name} } from './components/${name}';`)
    .join('\n');
  
  const reversedMapping: Record<string, string> = {};
  for (const [original, component] of Object.entries(originalNamesMap)) {
    reversedMapping[component] = original;
  }
  
  const exports = `
// Export all icons
export {
${componentNames.map(name => `  ${name},`).join('\n')}
};

// Icon name type
export type IconName = ${componentNames.map(name => `'${name}'`).join(' | ')};

// Map of all icons by name
export const IconMap: Record<IconName, React.FC<any>> = {
${componentNames.map(name => `  ${name},`).join('\n')}
};

// Original name to component name mapping
export const originalToComponent: Record<string, string> = {
${Object.entries(originalNamesMap).map(([original, component]) => `  '${original}': '${component}',`).join('\n')}
};

// Component name to original name mapping
export const componentToOriginal: Record<string, string> = {
${Object.entries(reversedMapping).map(([component, original]) => `  '${component}': '${original}',`).join('\n')}
};
`;
  
  // Write icons index file
  fs.writeFileSync(iconsIndexFile, imports + exports);
}

async function generateMainIndex() {
  console.log('Generating main index...');
  
  // Write main index file
  const indexContent = `import { IconProps, Icon } from './Icon';
export * from './icons';
export * from './Icon';

export default Icon;
`;
  
  fs.writeFileSync(indexFile, indexContent);
}

async function createIconComponent() {
  // Create the Icon component
  const iconComponentCode = `import React from 'react';
import { IconMap, IconName, originalToComponent } from './icons';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: string;
  size?: number | string;
  className?: string;
}

export function Icon({ name, size = 24, className = "", ...props }: IconProps) {
  // Try to find the icon by name
  let iconName = name as IconName;
  
  // Check if the name is in original names map (converts "4g" to "Icon4g")
  if (originalToComponent[name]) {
    iconName = originalToComponent[name] as IconName;
  }
  
  const IconComponent = IconMap[iconName];
  
  if (!IconComponent) {
    console.warn(\`Icon "\${name}" not found\`);
    return null;
  }
  
  return <IconComponent size={size} className={className} {...props} />;
}

Icon.displayName = 'Icon';
`;
  
  fs.writeFileSync(path.resolve(__dirname, '../src/Icon.tsx'), iconComponentCode);
}

// Run all build functions
async function run() {
  try {
    await fs.ensureDir(path.resolve(__dirname, '../src'));
    await createIconComponent();
    const { componentNames, originalNamesMap } = await generateComponents();
    await generateIconsIndex(componentNames, originalNamesMap);
    await generateMainIndex();
  } catch (error) {
    console.error('Error building components:', error);
    process.exit(1);
  }
}

run();
