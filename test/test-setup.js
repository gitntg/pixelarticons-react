/**
 * Basic test setup for icon components
 * 
 * This file can be used with testing frameworks like Jest
 */

// Mock React
const React = {
  createElement: (type, props, ...children) => {
    return { type, props, children };
  },
};

// Mock SVG rendering
global.SVGElement = function() {};
global.SVGSVGElement = function() {};

// Mock document for DOM operations
global.document = {
  createElement: (tag) => {
    return {
      tagName: tag.toUpperCase(),
      setAttribute: () => {},
      appendChild: () => {},
    };
  },
};

// Export for test usage
module.exports = {
  React,
};
