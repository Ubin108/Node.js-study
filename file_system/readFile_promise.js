const fs = require('fs').promises; 
//fs는 뒤에 .promises 붙여주면 알아서 fs가 프로미스를 지원하도록 바뀜.

fs.readFile('./test.txt') 
    .then(() => {
        console.log(data); 
        console.log(data.toString());
    })
    .catch((err) => {
        throw err;
    });