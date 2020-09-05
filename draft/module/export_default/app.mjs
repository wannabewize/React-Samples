import hello from './greeting.mjs';
import {increase} from './other.mjs';

hello.sayHello();
console.log('value :', hello.value);

hello.value++;
console.log('value :', hello.value);

increase();

console.log('value :', hello.value);