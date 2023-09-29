const inquirer = require('inquirer');
const fs = require('fs');
const SVGLogo = require('./SVGLogo');

const questions = [
  {
    type: 'list',
    name: 'shape',
    message: 'Select a shape for the logo:',
    choices: ['Circle', 'Square', 'Triangle'],
  },
  {
    type: 'input',
    name: 'message',
    message: 'Enter a 3-character message:',
    validate: (input) => {
      if (input.length === 3) {
        return true;
      }
      return 'Message should be exactly 3 characters.';
    },
  },
  {
    type: 'input',
    name: 'color',
    message: 'Enter the background color (e.g., #FF5733):',
  },
];

async function generateLogo() {
  const answers = await inquirer.prompt(questions);

  const logo = new SVGLogo(300, 300, answers.shape.toLowerCase(), answers.message, answers.color);
  const svgContent = logo.generateSVG();

  fs.writeFileSync('logo.svg', svgContent, 'utf-8');
  console.log('SVG logo generated successfully as "logo.svg".');
}

generateLogo();
