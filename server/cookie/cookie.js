const http = require('http');

http.createServer((req, res) => {
    console.log(req.url, req.headers.cookie);
    res.writeHead(200, { 'Set-Cookie': 'mycookie=test' }); //브라우저 닫기 전까지 지속되는 mycookie=test라는 세션 쿠키 생김
    res.end('Hello Cookie');
})
    .listen(8083, () => {
        console.log('8083번 포트에서 서버 대기 중입니다!');
    });

    //favicon.ico는 크롬브라우저에서 자동으로 보내주는거. 상태창의 아이콘