const fs = require('fs');
const zlib = require('zlib');

const readStream = fs.createReadStream('./readme.txt', { highWaterMark: 16 });
const zlibStream = zlib.createGzip(); //압축과정
const writeStream = fs.createWriteStream('./writeme4.txt');
readStream.pipe(zlibStream).pipe(writeStream);
// readStream에서 읽은 걸 압축해서 writeStream으로 전달
// 압축 스트리밍
// 스트리밍을 하면 다양한 파이프끼리 연결할 수 있음.