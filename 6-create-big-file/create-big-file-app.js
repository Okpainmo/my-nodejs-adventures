const { writeFileSync } = require('fs');
for (let i = 0; i < 100000; i++) {
  writeFileSync('./contents/big.txt', `hello world ${i}\n`, { flag: 'a' });
}
