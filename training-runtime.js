// function examoneinner(message) {
//   console.log(message);
// }
// function examone(message) {
//   examoneinner(message);
// }
// examone("첫번째");

// function examtwo(message, callback) {
//   callback(message);
// }
// examtwo("두번째", function (messagee) {
//   console.log(messagee);
// })

const file = require('fs');
file.readdir('./', function (error, filelist) {
  if (error) throw error;
  console.log(file);
})