const EventEmitter = require('events');

const myEvent = new EventEmitter();
myEvent.addListener('event1', () => {
    console.log('이벤트 1');
});
myEvent.on('event2', () => { // .on이랑 .addListener랑 같은 기능
    console.log('이벤트 2');
});
myEvent.on('event2', () => { // 같은 이름으로 .on에서 추가 가능
    console.log('이벤트 2 추가');
});
myEvent.once('event3', () => { // once는 한번만 실행됨.
    console.log('이벤트 3');
});

myEvent.emit('event1'); // 이벤트 호출
myEvent.emit('event2');

myEvent.emit('event3');
myEvent.emit('event3'); // 실행 안됨. (event3는 위에 once로 설정되있어서 한번밖에 실행 안됨.)

console.log(myEvent.listenerCount('event2')); // event2에 콜백 함수가 몇개 연결되어 있는지 확인 -> 여기선 두개