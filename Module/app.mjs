import {message, sayHello, sayGoodBye, helloObj} from "./greeting.mjs";
sayHello();
sayGoodBye();

console.log('message :', message);

console.log('helloObj :', helloObj);

// 수정하기
helloObj.value++;
console.log('helloObj :', helloObj);

// renaming
import {sayHello as doIt}  from './greeting.mjs';
doIt();

// module object
import * as greetingModule from './greeting.mjs';
greetingModule.sayHello();


// default export - import
import howAreYou from "./defaultExport.mjs";

howAreYou();

import fn, {answerIt} from "./defaultExport.mjs";

fn();
answerIt();


// Class
import {Movie} from './classModule.mjs';
const movie = new Movie('Tenet');
movie.showIt();

import Cinema from './classModule.mjs';
const cinema = new Cinema('다만 악에서 구하소서');
cinema.showIt();