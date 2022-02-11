const fs = require('fs');

console.log('before:', process.memoryUsage().rss);

const data1 = fs.readFileSync('./big.txt'); //통째로 옮기는 방식
fs.writeFileSync('./big2.txt', data1);
console.log('buffer: ', process.memoryUsage().rss);