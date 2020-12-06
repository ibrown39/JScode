console.log("Hi World!");
document.write("hi <br />");
var str = "string type";
var intType = 0;
var boolType = true;
var arrayType = [];
var objectType = {};
arrayType = [1,2,3];
var arrayNote = new Array(1,2,3);
document.write(arrayType[0]+'<br />');
var arraySparsed = new Array();
arraySparsed[5] = "defined";
document.write(arraySparsed + '<br />');
arrayType = [str, intType, boolType];
document.write(arrayType + '<br />');
var myStack = [];
myStack.push(str);
myStack.push(intType);
myStack.push(boolType);
document.write("my current stack: "+myStack + '<br />')
document.write("Pop element: "+ myStack.pop() + '<br />')
document.write("my current stack after pop: "+myStack + '<br />')
document.write("Stack before shift: "+myStack + '<br />');
document.write("shifted: "+myStack.shift()+'<br />')
document.write("my stack now: "+myStack+'<br />');
document.write("Using unshift to add cat to the stack "+'<br /');
myStack.unshift('cat')
document.write(myStack+'<br /');