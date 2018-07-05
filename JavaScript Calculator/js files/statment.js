
let a, b, c;
a = 10;
b = 20;
c = a + b;
document.getElementById('display1').innerHTML = 'a = 10';
document.getElementById('display2').innerHTML = 'b = 20';
document.getElementById('display').innerHTML = 'the output of C is:' + c
//here create new html new element 
let displaySub = document.createElement('p')
//here create the value of a - b
let sub = document.createTextNode('Substraction of A & B is: ' + a - b)
//add tha value of a - b as text on p tag
displaySub.appendChild(sub)
let element = document.getElementById('div')
//here add p tag inside to div
element.appendChild(displaySub)

let displayDiv = document.createElement('p')
let div = document.createTextNode('Divition of A & B is: ' + a / b)
displayDiv.appendChild(div)
element.appendChild(displayDiv)

let mul = document.createTextNode('Multipication of A & B is: ' + a * b)
let displayMul = document.createElement('p')
displayMul.appendChild(mul)
element.appendChild(displayMul)