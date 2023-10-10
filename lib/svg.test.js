const SVGLogo = require('./svg');

describe('SVGLogo class', () => {
  it('should generate SVG for a circle logo with a message', () => {
    const logo = new SVGLogo(300, 300, 'circle', 'ABC', '#FF5733');
    const svgContent = logo.generateSVG();
    expect(svgContent).toContain('<circle');
    expect(svgContent).toContain('ABC');
  });

  it('should generate SVG for a square logo with a message', () => {
    const logo = new SVGLogo(300, 300, 'square', 'XYZ', '#33FF57');
    const svgContent = logo.generateSVG();
    expect(svgContent).toContain('<rect');
    expect(svgContent).toContain('XYZ');
  });

  it('should generate SVG for a triangle logo with a message', () => {
    const logo = new SVGLogo(300, 300, 'triangle', '123', '#5733FF');
    const svgContent = logo.generateSVG();
    expect(svgContent).toContain('<polygon');
    expect(svgContent).toContain('123');
  });
});
