const spawn = require('child_process').spawn;

const process = spawn('python', ['test.py']); //멀티스레드는 서로 다른 언어로 하는게 좋음.
// spawn을 통해 호출
// node가 python, c++ 등등을 대신 실행하는 것이 아니라
// 이러한 파일을 실행해달라고 요청하는 것이기 때문에
// python, c++ 등 실행하려는 언어가 이미 깔려있어야 함.

process.stdout.on('data', function (data) {
    console.log(data.toString());
});

process.stderr.on('data', function (data) {
    console.error(data.toString());
});