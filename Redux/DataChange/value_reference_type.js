let number1 = 10;
let number2 = number1;
number2 += 10;
console.log('number type :', number1, number2);

let obj1 = { value: 0 };
let obj2 = obj1;
obj2.value = 10;
console.log('reference type - obj :', obj1, obj2);

let array1 = [1, 2, 3];
let array2 = array1;
array2.push(4);
console.log('reference type - array :', array1, array2);