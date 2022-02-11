const fs = require('fs');

//readFile은 비동기 함수이기 때문에 어떤 것이 먼저 출력될지 알 수 없음
//동시에 백그라운드로 넘어가서 먼저 끝난게 태스크큐로 넘어오는 형식

console.log('시작');
fs.readFile('./readme.txt', (err, data) => {
  if (err) {
    throw err;
  }
  console.log('1번', data.toString());
});
fs.readFile('./readme.txt', (err, data) => {
  if (err) {
    throw err;
  }
  console.log('2번', data.toString());
});
fs.readFile('./readme.txt', (err, data) => {
  if (err) {
    throw err;
  }
  console.log('3번', data.toString());
});
console.log('끝');
