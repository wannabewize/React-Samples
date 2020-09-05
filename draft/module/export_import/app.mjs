import {sayHello} from "./greeting.mjs";
sayHello();

import {sayGoodBye, sayByebye} from "./greeting.mjs";
sayGoodBye();
sayByebye();

import {sayHello as doIt}  from './greeting.mjs';

doIt();

import * as hello from './greeting.mjs';
hello.sayHello();

