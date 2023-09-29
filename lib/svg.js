class SVGLogo {
    constructor(width, height, shape, message, color) {
      this.width = width;
      this.height = height;
      this.shape = shape;
      this.message = message;
      this.color = color;
    }
  
    generateSVG() {
      let shapeSVG = '';
      if (this.shape === 'circle') {
        shapeSVG = this.generateCircle();
      } else if (this.shape === 'square') {
        shapeSVG = this.generateSquare();
      } else if (this.shape === 'triangle') {
        shapeSVG = this.generateTriangle();
      } else {
        throw new Error('Invalid shape.');
      }
  
      const textSVG = this.generateText();
  
      return `<svg width="${this.width}" height="${this.height}" xmlns="http://www.w3.org/2000/svg">
        ${shapeSVG}
        ${textSVG}
      </svg>`;
    }
  
    generateCircle() {
      return `<circle cx="${this.width / 2}" cy="${this.height / 2}" r="${Math.min(this.width, this.height) / 2}" fill="${this.color}" />`;
    }
  
    generateSquare() {
      return `<rect x="${this.width / 4}" y="${this.height / 4}" width="${this.width / 2}" height="${this.height / 2}" fill="${this.color}" />`;
    }
  
    generateTriangle() {
      const centerX = this.width / 2;
      const centerY = this.height / 2;
      const sideLength = Math.min(this.width, this.height) / 2;
      const height = (Math.sqrt(3) / 2) * sideLength;
      const points = `${centerX},${centerY - height / 2} ${centerX + sideLength / 2},${centerY + height / 2} ${centerX - sideLength / 2},${centerY + height / 2}`;
      return `<polygon points="${points}" fill="${this.color}" />`;
    }
  
    generateText() {
      const x = this.width / 2;
      const y = this.height / 2 + 5;
      return `<text x="${x}" y="${y}" font-size="20" fill="white" text-anchor="middle">${this.message}</text>`;
    }
  }
  
  module.exports = SVGLogo;
  