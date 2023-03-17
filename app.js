// const funcStyle = require('./func.js');
// const objStyle = require('./obj.js');

// const callFuncStyle = funcStyle('h1','Hello',{id:'title'});
// const callobjStyle = objStyle('h1','World',{id: 'title'});

// console.log(callFuncStyle);
// console.log(callobjStyle);

const funcStyle = require('./func.js');
const objStyle = require('./obj.js');

const callFuncStyle = funcStyle('h1');
const callobjStyle = objStyle('div');

console.log(callFuncStyle);
console.log(callobjStyle);