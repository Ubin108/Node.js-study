const fs = require('fs');

const readStream = fs.createReadStream('./readme.txt', { highWaterMark: 16 });
const writeStream = fs.createWriteStream('./writeme2.txt');
readStream.pipe(writeStream);
//readStream과 writeStream을 파이프로 연결.
//readStream에서 16바이트씩 읽어서 보내면 writeStream에서 16바이트씩 받아서 작성.