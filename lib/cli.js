const inquirer = require('inquirer');
const fs = require('fs');
const SVGLogo = require('./svg');

class CLI{
  run() {
    return inquirer
      .prompt([
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
              }else{
              return 'Message should be exactly 3 characters.'};
            },
          },
          {
            type: 'input',
            name: 'color',
            message: 'Enter the background color (e.g., #FF5733):',
          },
      ])
      .then(({shape, message, color}) => {
        const svg = new SVGLogo(shape,message,color);
        const newlogo = svg.generateSVG();
        return fs.writeFile("logo.svg", newlogo, (err)=>{
          if (err) {
            console.error('Error writing file:', err);
          } else {
            console.log('File written successfully.');
          }
        });
      })
      .then(()=>{
        console.log("generated logo.svg");
      })
      .catch((error)=>{
        console.log(error);
        console.log("Something went wrong .... ");
      });
  }
}

module.exports = CLI; 