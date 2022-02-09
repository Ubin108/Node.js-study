const fs = require('fs');

fs.readFile('./test.txt', (err, data) => { //콜백형식
    if (err) {
        throw err;
    }
    console.log(data);
    console.log(data.toString());
})