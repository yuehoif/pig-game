document.body.onload = addElement;

function addElement () { 
  // create a new div element 
  var newDiv = document.createElement("div"); 
  // and give it some content 
  var newContent = document.createTextNode("Hi there and greetings!"); 
  // add the text node to the newly created div
  newDiv.appendChild(newContent);  

  // add the newly created element and its content into the DOM 
  var currentDiv = document.getElementById("body"); 
  document.body.insertBefore(newDiv, currentDiv); 

  var h1 = document.createElement('h1');
  var h1Conent = document.createTextNode('Hello World');
  h1.appendChild(h1Conent);
  var currentDiv = document.getElementById("body"); 
  document.body.insertBefore(h1, newDiv); 
}
