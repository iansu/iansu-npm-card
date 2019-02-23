const fs = require('fs');
const path = require('path');

const getCard = require('./card');

(async () => {
  fs.writeFileSync(path.join(__dirname, '..', 'build', 'output.txt'), await getCard());
})();
