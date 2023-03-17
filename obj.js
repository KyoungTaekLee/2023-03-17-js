module.exports = {
  makeElement: function (tagName, content, properties) {
    let element = document.createElement(tagName);

    if (content) {
      element.innerHTML = content;
    }
    if(properties){
      for (let key in properties){
        element.setAttribute(key, properties[key]);
      }
    }
    return element;
  },
  anotherKey: 'anotherValue'
}