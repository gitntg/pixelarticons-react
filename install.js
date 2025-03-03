#!/usr/bin/env node

/**
 * This script helps with installing the package and its dependencies
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Detect package manager
function detectPackageManager() {
  if (fs.existsSync(path.join(process.cwd(), 'yarn.lock'))) {
    return 'yarn';
  } else if (fs.existsSync(path.join(process.cwd(), 'pnpm-lock.yaml'))) {
    return 'pnpm';
  } else {
    return 'npm';
  }
}

// Main installation process
function install() {
  console.log('📦 Setting up @nsommer/pixelart-react...');
  
  const packageManager = detectPackageManager();
  
  try {
    // Check if React is installed
    console.log('🔍 Checking for React...');
    const reactCheck = execSync('npm list react').toString();
    
    if (!reactCheck.includes('react@')) {
      console.log('⚠️ React not found. Installing peer dependencies...');
      
      switch (packageManager) {
        case 'yarn':
          execSync('yarn add react react-dom', { stdio: 'inherit' });
          break;
        case 'pnpm':
          execSync('pnpm add react react-dom', { stdio: 'inherit' });
          break;
        default:
          execSync('npm install react react-dom', { stdio: 'inherit' });
      }
    } else {
      console.log('✅ React is already installed.');
    }
    
    console.log('\n✨ Setup complete! You can now use @nsommer/pixelart-react in your project.');
    console.log('\n// Option 1: Direct import');
    console.log('import { Icon } from \'@nsommer/pixelart-react\';');
    console.log('\n// Option 2: Shorter import path');
    console.log('import { Icon } from \'pixelart/react\';');
    
  } catch (error) {
    console.error('❌ Setup failed:', error.message);
    process.exit(1);
  }
}

// Run the installation
install();
