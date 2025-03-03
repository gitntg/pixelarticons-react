// Script to generate an icon gallery image for the README
// Run with: node scripts/generate-gallery.js

import puppeteer from 'puppeteer';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

// Get the directory name in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function generateGalleryImage() {
  console.log('Launching browser...');
  const browser = await puppeteer.launch({
    headless: 'new', // Use new headless mode
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    const page = await browser.newPage();
    
    // Set viewport to a reasonable size
    await page.setViewport({
      width: 1200,
      height: 800,
      deviceScaleFactor: 2, // Higher resolution image
    });

    const htmlPath = path.resolve(__dirname, '../examples/gallery-generator.html');
    const fileUrl = `file://${htmlPath}`;
    
    console.log(`Opening gallery page: ${fileUrl}`);
    await page.goto(fileUrl, { waitUntil: 'networkidle0' });
    
    // Make sure the DOM is fully loaded
    await page.waitForSelector('.gallery');
    
    // Give additional time for all visual elements to render
    await page.waitForTimeout(1000);
    
    // Find the gallery element and get its dimensions
    const galleryElement = await page.$('.gallery');
    const boundingBox = await galleryElement.boundingBox();
    
    const outputPath = path.resolve(__dirname, '../examples/icon-gallery.png');
    console.log(`Taking screenshot and saving to: ${outputPath}`);
    
    // Take screenshot of just the gallery area
    await page.screenshot({
      path: outputPath,
      clip: {
        x: boundingBox.x,
        y: boundingBox.y - 100, // Include the header
        width: boundingBox.width,
        height: boundingBox.height + 150 // Add some padding
      }
    });
    
    console.log('Gallery image created successfully!');
  } catch (error) {
    console.error('Error generating gallery image:', error);
    process.exit(1);
  } finally {
    await browser.close();
  }
}

generateGalleryImage();
