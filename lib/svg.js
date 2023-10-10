class SVGLogo {
    constructor(shape, message, color) {
      this.shape = shape;
      this.message = message;
      this.color = color;
    }
  
    generateSVG() {
      let shapeSVG = '';
      if (this.shape === 'Circle') {
        shapeSVG = this.generateCircle();
      } else if (this.shape === 'Square') {
        shapeSVG = this.generateSquare();
      } else if (this.shape === 'Triangle') {
        shapeSVG = this.generateTriangle();
      } else {
        throw new Error('Invalid shape.');
      }
  
      let textSVG = this.generateText();
  
      return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${shapeSVG}
        ${textSVG}
      </svg>`;
    }
  
    generateCircle() {
      return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
  
    generateSquare() {
      return `<rect x="90" y="40" width="120" height="120" fill="${this.color}" />`;
    }
  
    generateTriangle() {
      return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
   
    generateText() {
      return `<text x="150" y="125" font-size="60" fill="white" text-anchor="middle">${this.message}</text>`;
    }
  }
  
  module.exports = SVGLogo;
  