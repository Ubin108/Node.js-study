const express = require('express');
const path = require('path');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');

const app = express();

app.set('port', process.env.PORT || 3000);

app.use(morgan('dev')); // 클라이언트의 요청과 응답을 콘솔에 기록하는 라우터
app.use(cookieParser('bintudypassword')); // 쿠키 파싱
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // 폼 파싱. true면 qs, false면 querystring (true 추천.)
