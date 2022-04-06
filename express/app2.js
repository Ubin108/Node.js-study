const express = require('express');
const path = require('path'); 

const app = express();

app.set('port', process.env.PORT || 3000); 

app.use((req, res, next) => { //모든 요청에 실행하고 싶은 부분을 미들웨어로 설정!(함수가 미들웨어인거지 app.use가 미들웨어인건 아님.)
    console.log('모든 요청에 실행하고 싶어요.');
    next(); //미들웨어에서는 다음으로 넘어가려면 꼭 next를 써줘야함.(자동으로 넘어가지지 않음.)
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));

    /*  
    res.send('안녕하세요');
    res.json({ hello: 'bintudy' });
    */
   // 한 라우터에서는 send, sendFile, json 계열 한번만 하기! (여러번 하면 에러)
   // 'Cannot set headers after they are sent to the client' 에러 뜸.
});

/*
app.get('/category/Javascripts', (req, res) => {
    res.send('hello Javascript');
});
app.get('/category/Node', (req, res) => {
    res.send('hello Node');
});
app.get('/category/React', (req, res) => {
    res.send('hello React');
})
*/ //이 부분을 라우트 파라미터(와일드 카드)를 통해 한번에 작성 가능
app.get('/category/:name', (req, res) => {
    res.send(`hello ${req.params.name}`);
}); 
//자바 스크립트는 위에서부터 아래로 실행되기 때문에 와일드 카드 부분을 가장 마지막에 쓰는게 나음.
//다른게 실행안되고 와일드카드만 실행되는 것을 방지하기 위해.


app.get('*', (req, res) => { // *는 모든 get 요청을 처리하겠다는 뜻 (다른 get 코드들의 실행을 위해서 이것도 가장 마지막에 쓰는게 좋음.)
    res.send('hi');
});

app.use((req, res, next) => { // 404 처리 (에러는 아니고, 없는 get 요청을 받았을 때)
    // 모든 라우터에 해당되지 않을 때 여기서 처리됨.(물론 와일드 카드가 없는 코드에서)
    res.status(404).send('404 에러!! cannot get'); // status(200)으로 입력하면 분명 서버에선 404지만 클라이언트에는 200으로 뜸.(사기칠 수 있음.)
                                                   // 해커들에게 힌트를 주지 않는 용도로도 쓰임.
})

app.use((err, req, res, next) => { //마지막에는 에러를 처리하는 에러 미들웨어를 만들어주기!
    //에러 미들웨어에서는 "반드시" 매개변수 4개 모두 써줘야함. (err, req, res, next)
    console.error(err);
    res.send('에러가 발생했습니다!');
});

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기 중');
})
