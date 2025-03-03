import React from 'react';
import Head from 'next/head';
import { Icon, IconName } from 'pixelart/react';
// For direct imports
import { User, ShoppingCart, Heart } from 'pixelart/react';

// Array of icon names for demo
const commonIcons = [
  'User', 'ShoppingCart', 'Heart', 'Home', 'Search',
  'Calendar', 'Settings', 'Notification', 'Mail', 'Camera'
];

export default function IconsDemo() {
  const [size, setSize] = React.useState(24);
  const [color, setColor] = React.useState('#000000');

  return (
    <div className="container">
      <Head>
        <title>Pixelarticons React Demo</title>
        <meta name="description" content="Demo for @nsommer/pixelart-react package" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Pixelarticons React Demo
        </h1>
        
        <div className="controls">
          <div className="control-group">
            <label htmlFor="size">Size: {size}px</label>
            <input 
              id="size" 
              type="range" 
              min="12" 
              max="72" 
              value={size} 
              onChange={(e) => setSize(Number(e.target.value))} 
            />
          </div>
          
          <div className="control-group">
            <label htmlFor="color">Color:</label>
            <input 
              id="color" 
              type="color" 
              value={color} 
              onChange={(e) => setColor(e.target.value)} 
            />
          </div>
        </div>

        <section>
          <h2>Using Icon Component</h2>
          <div className="icon-grid">
            {commonIcons.map((iconName) => (
              <div key={iconName} className="icon-card">
                <Icon 
                  name={iconName as IconName} 
                  size={size} 
                  style={{ color }} 
                />
                <span>{iconName}</span>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2>Using Direct Imports</h2>
          <div className="direct-imports">
            <div className="icon-card">
              <User size={size} style={{ color }} />
              <span>User</span>
            </div>
            <div className="icon-card">
              <ShoppingCart size={size} style={{ color }} />
              <span>ShoppingCart</span>
            </div>
            <div className="icon-card">
              <Heart size={size} style={{ color }} />
              <span>Heart</span>
            </div>
          </div>
        </section>
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 100%;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 3rem;
          text-align: center;
        }

        .controls {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          margin: 40px 0;
          padding: 20px;
          background: #f5f5f5;
          border-radius: 8px;
          width: 100%;
          max-width: 600px;
        }

        .control-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
          flex: 1;
        }

        .icon-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
          gap: 20px;
          width: 100%;
          margin-top: 20px;
        }

        .direct-imports {
          display: flex;
          gap: 40px;
          margin-top: 20px;
        }

        .icon-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 15px;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          text-align: center;
          transition: transform 0.2s ease;
        }

        .icon-card:hover {
          transform: scale(1.05);
          border-color: #0070f3;
        }

        .icon-card span {
          margin-top: 8px;
          font-size: 0.9rem;
        }

        section {
          margin-top: 40px;
          width: 100%;
        }

        h2 {
          text-align: center;
          margin-bottom: 20px;
        }
      `}</style>
    </div>
  );
}
