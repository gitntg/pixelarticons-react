import React from 'react';
import { Icon } from 'pixelart/react';
import { User, ShoppingCart, Heart } from 'pixelart/react';

export function BasicExample() {
  return (
    <div className="example-container">
      <h2>Pixelarticons React Examples</h2>
      
      <section>
        <h3>Using the Icon Component</h3>
        <div className="icon-grid">
          <div className="icon-item">
            <Icon name="User" />
            <span>User</span>
          </div>
          <div className="icon-item">
            <Icon name="ShoppingCart" size={32} />
            <span>ShoppingCart (size 32)</span>
          </div>
          <div className="icon-item">
            <Icon name="Heart" className="custom-color" />
            <span>Heart (custom color)</span>
          </div>
        </div>
      </section>
      
      <section>
        <h3>Using Direct Imports</h3>
        <div className="icon-grid">
          <div className="icon-item">
            <User />
            <span>User</span>
          </div>
          <div className="icon-item">
            <ShoppingCart size={32} />
            <span>ShoppingCart (size 32)</span>
          </div>
          <div className="icon-item">
            <Heart className="custom-color" />
            <span>Heart (custom color)</span>
          </div>
        </div>
      </section>
      
      <style jsx>{`
        .icon-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
          gap: 20px;
          margin-top: 15px;
        }
        
        .icon-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 10px;
          border: 1px solid #eee;
          border-radius: 8px;
        }
        
        .custom-color {
          color: #ff5252;
        }
      `}</style>
    </div>
  );
}

export default BasicExample;
