const crypto = require('crypto');

const pass = 'pass';
const salt ='salt';
const start = Date.now();

crypto.pbkdf2(pass, salt, 1_000_000, 128, 'sha512', () => {
    console.log('1', Date.now() - start);
});
crypto.pbkdf2(pass, salt, 1_000_000, 128, 'sha512', () => {
    console.log('2', Date.now() - start);
});
crypto.pbkdf2(pass, salt, 1_000_000, 128, 'sha512', () => {
    console.log('3', Date.now() - start);
});
crypto.pbkdf2(pass, salt, 1_000_000, 128, 'sha512', () => {
    console.log('4', Date.now() - start);
});
crypto.pbkdf2(pass, salt, 1_000_000, 128, 'sha512', () => {
    console.log('5', Date.now() - start);
});
crypto.pbkdf2(pass, salt, 1_000_000, 128, 'sha512', () => {
    console.log('6', Date.now() - start);
});
crypto.pbkdf2(pass, salt, 1_000_000, 128, 'sha512', () => {
    console.log('7', Date.now() - start);
});
crypto.pbkdf2(pass, salt, 1_000_000, 128, 'sha512', () => {
    console.log('8', Date.now() - start);
});

// 4개씩 동시에 실행됨을 확인할 수 있음. (1,2,3,4) (5,6,7,8)
// 기본 threadpool size는 4
// SET UV_THREADPOOL_SIZE=8 로 8개씩 실행되게 바꿀 수 있음.
// 컴퓨터 사양, 코어에 맞게 잘 조정하기.