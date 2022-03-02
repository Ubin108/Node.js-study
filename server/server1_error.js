const http = require('http');
const { runInNewContext } = require('vm');

const http = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.write('<h1>Hello Node!</h1>');
    res.write('<p>Hello server</p>');
    res.end('<p>Hello ZeroCho</p>');
})

    .listen(8080);
server.on('listening', () => {
    console.log('8080번 포트에서 서버 대기 중입니다.');
}) // listen의 콜백함수 빼올 수 있음.
server.on('error', (error) => {
    console.error(error);
}); // 에러처리
   

// 서버 코드 수정 후에는 반드시 껐다 키기(그래야만 반영됨)