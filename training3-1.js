const number = ['one','two','three','four'];
console.log(number);

number.push("five");
console.log(number);
console.log(number.slice(1,4));

number.pop();
number.pop();

console.log(number);

number.unshift('six');
console.log(number);
number.shift();
console.log(number);
