const http = require('http');
const { runInNewContext } = require('vm');

http.createServer((req, res) => {
    res.write('<h1>Hello Node!</h1>');
    res.write('<p>Hello server</p>');
    res.end('<p>Hello ZeroCho</p>');
})

    .listen(8080, () => {
        console.log('8080번 포트에서 서버 대기 중입니다.');
    });
    // 서버도 프로그램이기 때문에 노드가 이것을 실행하는 순간
    // 서버를 프로세스로 올려주어야함.
    // 이 프로그램을 8080이라는 포트에 프로세스로서 돌게 만들것임.