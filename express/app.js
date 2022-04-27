const express = require('express');
const path = require('path'); //경로 처리

const app = express();

app.set('port', process.env.PORT || 3000); //별다른 설정없으면 port 속성을 3000으로 설정 (전역 변수같은 느낌-코드 어디서든 port를 불러올 수 있음.)

app.get('/', (req, res) => { 
    //res.sendFile('./index.html');
    res.sendFile(path.join(__dirname, '/index.html')); // 더 확실한 경로처리
});

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기 중');
})