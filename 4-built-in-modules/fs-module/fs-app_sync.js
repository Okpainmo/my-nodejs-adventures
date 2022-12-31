const { readFileSync, writeFileSync } = require('fs');

const firstText = readFileSync('./folder/first.txt', 'utf8');
const secondText = readFileSync('./folder/second.txt', 'utf8');

console.log(firstText, secondText);

// if the file is not there, nodejs will create it. If it is available, its original content will be replaced with current content.

writeFileSync(
  './folder/third.txt',
  `Third file content: ${firstText}, ${secondText}`,
  // the a-flag appends the new content to the previous one instead of overwriting it.

  { flag: 'a' }
);
