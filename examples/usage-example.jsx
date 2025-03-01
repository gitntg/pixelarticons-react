import React, { useState } from 'react';
import { 
  User, 
  Icon4g,
  Icon4k,
  Icon5g,
  Heart, 
  Mail, 
  Phone, 
  Settings, 
  Upload, 
  Download,
  Icon
} from '@pixelarticons/react';

const IconExample = () => {
  const [size, setSize] = useState(24);

  return (
    <div className="icon-example">
      <h1>Pixelarticons Usage Example</h1>
      
      <div className="size-control">
        <label htmlFor="size">Icon Size:</label>
        <input 
          type="range" 
          id="size" 
          min="16" 
          max="64" 
          value={size} 
          onChange={(e) => setSize(Number(e.target.value))} 
        />
        <span>{size}px</span>
      </div>
      
      <section>
        <h2>Direct Import Method</h2>
        <div className="icon-grid">
          <div className="icon-item">
            <User size={size} />
            <span>User</span>
          </div>
          <div className="icon-item">
            <Heart size={size} />
            <span>Heart</span>
          </div>
          <div className="icon-item">
            <Mail size={size} />
            <span>Mail</span>
          </div>
          <div className="icon-item">
            <Phone size={size} />
            <span>Phone</span>
          </div>
          <div className="icon-item">
            <Settings size={size} />
            <span>Settings</span>
          </div>
        </div>
      </section>
      
      <section>
        <h2>Icon Component Method</h2>
        <div className="icon-grid">
          <div className="icon-item">
            <Icon name="user" size={size} />
            <span>user</span>
          </div>
          <div className="icon-item">
            <Icon name="heart" size={size} />
            <span>heart</span>
          </div>
          <div className="icon-item">
            <Icon name="mail" size={size} />
            <span>mail</span>
          </div>
          <div className="icon-item">
            <Icon name="phone" size={size} />
            <span>phone</span>
          </div>
          <div className="icon-item">
            <Icon name="settings" size={size} />
            <span>settings</span>
          </div>
        </div>
      </section>
      
      <section>
        <h2>Numeric Icons (Special Case)</h2>
        <div className="icon-grid">
          <div className="icon-item">
            <Icon4g size={size} />
            <span>Icon4g</span>
          </div>
          <div className="icon-item">
            <Icon name="4g" size={size} />
            <span>Icon name="4g"</span>
          </div>
          <div className="icon-item">
            <Icon4k size={size} />
            <span>Icon4k</span>
          </div>
          <div className="icon-item">
            <Icon name="4k" size={size} />
            <span>Icon name="4k"</span>
          </div>
          <div className="icon-item">
            <Icon5g size={size} />
            <span>Icon5g</span>
          </div>
        </div>
      </section>
      
      <section>
        <h2>Styling Examples</h2>
        <div className="icon-grid styling">
          <div className="icon-item">
            <Upload size={size} className="primary" />
            <span>Primary Color</span>
          </div>
          <div className="icon-item">
            <Download size={size} className="secondary" />
            <span>Secondary Color</span>
          </div>
          <div className="icon-item">
            <User size={size} className="large-icon" />
            <span>Custom Size</span>
          </div>
          <div className="icon-item">
            <Mail size={size} className="animated" />
            <span>Animated</span>
          </div>
          <div className="icon-item">
            <Settings size={size} className="rotating" />
            <span>Rotating</span>
          </div>
        </div>
      </section>
      
      <style jsx>{`
        .icon-example {
          font-family: system-ui, -apple-system, sans-serif;
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
        }
        
        .size-control {
          margin: 20px 0;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        
        .icon-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
          gap: 20px;
          margin: 20px 0;
        }
        
        .icon-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          padding: 15px;
          border-radius: 8px;
          background-color: #f5f5f5;
          transition: transform 0.2s;
        }
        
        .icon-item:hover {
          transform: translateY(-5px);
        }
        
        .icon-item span {
          font-size: 12px;
          text-align: center;
        }
        
        /* Custom styling examples */
        .primary {
          color: #3182ce;
        }
        
        .secondary {
          color: #e53e3e;
        }
        
        .large-icon {
          font-size: 2em;
        }
        
        .animated {
          transition: transform 0.3s;
        }
        
        .animated:hover {
          transform: scale(1.2);
        }
        
        .rotating {
          animation: rotate 2s linear infinite;
        }
        
        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default IconExample;
