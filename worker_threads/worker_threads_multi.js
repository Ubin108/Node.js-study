const { Worker, isMainThread, parentPort, workerData } = require('worker_threads');

if (isMainThread) {
    const threads = new Set(); //set은 중복되지 않는 배열
    threads.add(new Worker(__filename, {
        workerData: { start: 1 }, //초기데이터
    }));
    threads.add(new Worker(__filename, {
        workerData: { start: 2 },
    }));
    for (let worker of threads) {
        worker.on('message', (value) => console.log('워커로부터', value));
        worker.on('exit', () => {
            threads.delete(worker);
            if (threads.size === 0) { //모든 워커스레드 종료시
                console.log('워커 끝');
            }
        })
    }
}
else {
    const data = workerData;
    parentPort.postMessage(data.start) + 100;
}