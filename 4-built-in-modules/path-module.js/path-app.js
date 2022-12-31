const path = require('path');
console.log(path.sep);

const filePath = path.join('/folder', 'subfolder', 'content.txt');
console.log(filePath);

const base = path.basename(filePath);
console.log(base);

const absolute = path.resolve(__dirname);
console.log(absolute);
