import {message, sayHello, sayGoodBye, helloObj} from "./greeting.js";
sayHello();
sayGoodBye();

console.log('message :', message);

console.log('helloObj :', helloObj);

// 수정하기
helloObj.value++;
console.log('helloObj :', helloObj);