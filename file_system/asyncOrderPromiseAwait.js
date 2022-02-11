// async await 구문으로 프로미스헬(then-then-then-then 형식으로 then이 너무 나열된 형태) 예방 가능
// asyncOrderPromise.js 랑 비교해보기

const fs = require('fs').promises;

async function main(){
    let data = await fs.readFile('./readme.txt');
    console.log('1번', data.toString());
    data = await fs.readFile('./readme.txt')
    console.log('2번', data.toString());
    data = await fs.readFile('./readme.txt')
    console.log('3번', data.toString());
    data = await fs.readFile('./readme.txt')
    console.log('4번', data.toString());
}
main();