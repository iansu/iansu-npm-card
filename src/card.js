const figlet = require('figlet');
const boxen = require('boxen');
const chalk = require('chalk');

const getCard = () => {
  return new Promise((resolve, reject) => {
    figlet(' Ian Sutherland', { font: 'Slant' }, (error, header) => {
      if (error) {
        reject(error);
      }

      const twitter = chalk.blue('Twitter') + ': @iansu';
      const github = chalk.blue('GitHub') + ': @iansu';
      const linkedin = chalk.blue('LinkedIn') + ': https://www.linkedin.com/in/iansu';
      const web = chalk.blue('Web') + ': https://iansutherland.ca';

      let body = '';
      body += 'Full stack web and open source developer specializing in Node, React and \n';
      body += 'JavaScript. Maintainer of Create React App. Sandwich enthusiast.\n\n\n';
      body += `   ${twitter}       ${linkedin} \n`;
      body += `    ${github}            ${web}`;

      let output = '';
      output += '\n';
      output += header;
      output += '\n';
      output += boxen(body, { borderStyle: 'round', borderColor: 'blue', padding: 1 });
      output += '\n';

      resolve(output);
    });
  });
};

module.exports = getCard;
