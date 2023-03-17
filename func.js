module.exports = function (tagName,content,properties,error){
  let element = document.createElement(tagName);
  if(content){
    element.innerHTML = content;
  }
  if(properties){
    for(let key in properties){
      element.setAttribute(key, properties[key]);
    }
  }
  if(error)
    throw error;
  
  return element;
}