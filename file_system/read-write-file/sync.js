const fs = require('fs');

//동기(sync) - 사람이 이해하긴 쉽지만 동시에 돌릴 수 없어서 매우 비효율적
let data = fs.readFileSync('./readme.txt');
console.log('1번', data.toString());
data = fs.readFileSync('./readme.txt');
console.log('2번', data.toString());
data = fs.readFileSync('./readme.txt');
console.log('3번', data.toString());
data = fs.readFileSync('./readme.txt');
console.log('4번', data.toString());