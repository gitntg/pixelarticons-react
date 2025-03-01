# Contributing to @pixelarticons/react

Thank you for considering contributing to @pixelarticons/react! This document outlines the process for development and contribution.

## Development Setup

1. Clone the repository
   ```bash
   git clone https://github.com/yourrepo/pixelarticons-react.git
   cd pixelarticons-react
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Build the package
   ```bash
   npm run build
   ```

## Development Process

The project uses TypeScript and follows a specific build process:

1. SVG files are located in the `svg/` directory
2. The build process converts these SVGs to React components
3. TypeScript types are generated for all components

## Build Commands

- `npm run build` - Build the complete package
- `npm run build:components` - Generate React components from SVGs
- `npm run build:esm` - Build ESM version
- `npm run build:cjs` - Build CommonJS version
- `npm run typecheck` - Type-check without emitting output
- `npm run lint` - Run ESLint

## Adding New Icons

1. Add new SVG files to the `svg/` directory
2. Run `npm run build` to generate the React components
3. Test your new icons

## Pull Request Process

1. Ensure any install or build dependencies are removed before the end of the layer
2. Update the README.md with details of changes to the interface
3. You may merge the Pull Request once you have the sign-off of at least one other developer

## Release Process

1. Update version in package.json
2. Run the build process
3. Create a git tag for the version
4. Push to GitHub
5. Publish to npm

## Code of Conduct

Please keep interactions respectful and inclusive.
