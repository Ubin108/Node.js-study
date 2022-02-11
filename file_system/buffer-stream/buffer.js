const buffer = Buffer.from('저를 버퍼로 바꿔보세요');
console.log(buffer);
console.log(buffer.length); //32바이트임을 알 수 있음.
console.log(buffer.toString());

const array = [Buffer.from('띄엄 '), Buffer.from('띄엄 '), Buffer.from('띄어쓰기')];
console.log(Buffer.concat(array).toString()); //버퍼 합치기 - concat

console.log(Buffer.alloc(5)) //5바이트짜리 빈 버퍼 얼로케이션