const { readFile, writeFile } = require('fs');

readFile('./folder/first.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
  const firstFile = result;

  readFile('./folder/second.txt', 'utf8', (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(result);
    const secondFile = result;
    writeFile(
      './folder/async-file.txt',
      `Async file content: ${firstFile}, ${secondFile}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log(result);
      }
    );
  });
});
