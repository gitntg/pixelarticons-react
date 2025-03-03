// Script to generate icon gallery image for README
const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

(async () => {
  console.log('Generating gallery image...');
  
  // Make sure the gallery HTML file exists
  const galleryPath = path.resolve(__dirname, '../examples/gallery-generator.html');
  if (!fs.existsSync(galleryPath)) {
    console.error('Gallery HTML file not found:', galleryPath);
    process.exit(1);
  }

  // Launch browser
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  try {
    const page = await browser.newPage();
    
    // Go to gallery page
    const fileUrl = `file://${galleryPath}`;
    await page.goto(fileUrl, { waitUntil: 'networkidle0' });
    
    // Allow time for all SVGs to load
    await page.waitForTimeout(1000);
    
    // Take screenshot of gallery area
    const gallery = await page.$('#gallery');
    if (!gallery) {
      throw new Error('Gallery element not found on page');
    }
    
    const outputPath = path.resolve(__dirname, '../examples/icon-gallery.png');
    
    // Get the first 6 rows of icons
    await page.evaluate(() => {
      // Calculate row height based on first icon
      const iconItem = document.querySelector('.icon-item');
      if (!iconItem) return;
      
      const itemHeight = iconItem.offsetHeight;
      const containerWidth = document.getElementById('gallery').offsetWidth;
      const rowSize = Math.floor(containerWidth / (iconItem.offsetWidth + 20)); // 20px is the gap
      
      // Show limited number of rows for the image
      const showItems = rowSize * 6; // Show 6 rows
      
      // Update subtitle
      const subtitle = document.querySelector('.subtitle');
      if (subtitle) {
        subtitle.textContent = 'A collection of 486 pixel-perfect icons for React';
      }

      // Hide icons beyond the first 6 rows
      const items = document.querySelectorAll('.icon-item');
      if (items.length > showItems) {
        for (let i = showItems; i < items.length; i++) {
          items[i].style.display = 'none';
        }
      }
    });
    
    // Take a screenshot with appropriate padding
    await page.evaluate(() => {
      const gallery = document.getElementById('gallery');
      const header = document.querySelector('.header');
      if (gallery && header) {
        // Add padding and margin for better appearance
        document.body.style.padding = '40px';
        gallery.style.marginBottom = '40px';
      }
    });
    
    // Take full page screenshot
    await page.screenshot({
      path: outputPath,
      fullPage: false,
      clip: {
        x: 0,
        y: 0,
        width: 1000,
        height: 550
      }
    });

    console.log(`Gallery image generated: ${outputPath}`);
    
  } catch (error) {
    console.error('Error generating gallery image:', error);
    process.exit(1);
  } finally {
    await browser.close();
  }
})();
