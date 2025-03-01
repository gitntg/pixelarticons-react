import React from 'react';
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
    console.warn(`Icon "${name}" not found`);
    return null;
  }
  
  return <IconComponent size={size} className={className} {...props} />;
}

Icon.displayName = 'Icon';
