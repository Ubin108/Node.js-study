const express = require('express');
const path = require('path');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');

const app = express();

app.set('port', process.env.PORT || 3000);

app.use(morgan('dev')); // 클라이언트의 요청과 응답을 콘솔에 기록하는 라우터
/*
app.use((req, res, next) => {
    morgan('dev')(req, res, next);
});
//미들웨어 확장법
*/ 


app.use('/', express.static(path.join(__dirname, 'public-3030')));
/*
app.use('요청 경로', express.static('실제 경로'));
localhost:3000/index.html         express/public-3030/index.html
*/

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // 폼 파싱. true면 qs, false면 querystring (true 추천.)

app.use(cookieParser(process.env.COOKIE_SECRET)); // 쿠키 파싱
app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
        httpOnly: true,
        secure: false,
    },
    name: 'session-cookie',
}));


//-------- multer 실습 ------------
const multer = require('multer');
const fs = require('fs');

try{
    fs.readdirSync('uploads');
} catch (error) {
    console.error('uploads 폴더가 없어 uploads 폴더를 생성합니다.');
    fs.mkdirSync('uploads');
}
const upload = multer({
    storage: multer.diskStorage({
        destination(req, file, done) {
            done(null, 'uploads/');
        },
        filename(req, file, done) {
            const ext = path.extname(file.originalname);
            done(null, path.basename(file.originalname, ext) + Date.now() + ext);
        },
    }),
    limits: { fileSize: 5 * 1024 * 1024 },
});
app.get('/upload', (req, res) => {
    res.sendFile(path.join(__dirname, 'multipart.html'));
});
app.post('/upload',
    upload.fields([{ name: 'image1' }, { name: 'image2' }]),
    (req, res) => {
        console.log(req.files, req.body);
        res.send('ok');
    },
);
//--------------------------------

app.use((req, res, next) => {
    console.log('모든 요청에 다 실행됩니다.');
    next();
});