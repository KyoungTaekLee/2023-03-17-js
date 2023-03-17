const paperOrderTwo = [];
const countTwo = 10;
const content = "example-";
const tagName = "div";

for(let i = 0; i< countTwo; i++){
  paperOrderTwo.push(content);
}

console.log(paperOrderTwo);

const mapping = paperOrderTwo.map(function(value, index){
  return `<div> ${value}${index+1}</div>`;
})

console.log(mapping);

function elementMakerOne(content, tagName){
  if(typeof (content) === "string" && typeof (tagName) === "string"){
    return `<${tagName}> content </${tagName}>`;
  }else {
    new Error("매개변수 두개 모두 문자열이야한다");
  }
}

const paperOrderOne = [];
const countOne = 10;

for(let i = 0; i< countOne; i++){
  let result = elementMakerOne(`example-${i+1}`,"div");
  paperOrderOne.push(result);
}

console.log(paperOrderOne);