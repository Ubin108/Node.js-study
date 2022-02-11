const fs = require('fs');
const readStream = fs.createReadStream('./readme.txt', { highWaterMark: 16 }); 
// readStream: 파일을 조각조각 나눠서 읽음. (대용량의 데이터를 전달할 때 효율적. - 서버 메모리보다 훨씬 큰 데이터도 나눠서 전달 가능)
// createReadStream은 기본적으로는 64kb(64000byte)만큼 한번에 읽음.
// highWaterMark 설정을 통해 자르는 단위 조절 (여기서는 16바이트씩 자르기로 함.)

const data = [];
readStream.on('data', (chunk) => { //조각조각들이 chunk로 옴
    data.push(chunk);
    console.log('data', chunk, chunk.length);
}); //스트림은 각 조각들이 순서대로 넘어감.(동시에가 아니라)
readStream.on('end', () => {
    console.log('end:', Buffer.concat(data).toString());
});
readStream.on('error', (err) => {
    console.log('error:', err);
})