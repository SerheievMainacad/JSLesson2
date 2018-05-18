var a = 3;
// var b;
// b =2;
var b = 2;
alert('alert');
var c = confirm('confirm');
var p = prompt('prompt');

console.log(c);
console.log(p);



var str = 'Hello world';
var statement = true;
var n = null;
var u = undefined;
var obj = {};



 // borderLeftTop - camelCase
 // BorderLeftTop - PascalCase
 // border_left_top - 
 // BORDER_LEFT_TOP - for constants


 /*if(conditional){
	
 }else{

 }*/
 
// ==, ===, !=, !==, >=, <=, !, ||, &&
/*if(2 == 3){
	alert('hello')
}else{
	alert('bye')
}
*/

/*var result = +prompt('Insert number from 1 to 4');

//  if(result == '1')
switch(result){
	case '1':
		alert('hello1');
		break;
	case '2':
		alert('hello2');
		break;
	case 3:
		alert('hello3');
		break;
	case null:
		alert('null')
		break;
	case '':
		alert('insert smth')
	default:
		console.log(result)
}*/

//++ , --  ++a, a++,  
//counter = counter + 1;
// a = a + 2; -, *,/,** - long way
// a+=2; - short way


// loops
/*var counter = 0;
while(counter < 0){
	console.log('counter1 = ' + counter);
	counter++;
}
var counter2 = 0; 
do{
	console.log('counter2 = ' + counter2);
	counter2++;
}while(counter2 < 0);



for(var i = 0; i < 10; i++){
	console.log(i);
}
*/

// a, b
// action
// result = a +,-,*,/,**
//alert(result)
//Reapeat?

var a, b, result, action, isRepeatable;
do{
a = +prompt('first');
b = +prompt('second');
result;
action = prompt('+,-,*,/,**')
switch(action){
	case '+':
		result = a+b;
		break;
	case '-':
		result = a-b;
		break;
	case '/':
		result = a/b;
		break;
	case '*':
		result = a*b;
		break;
	case '**':
		result = a**b;
		break;			
	default:
		alert('unknown action')
}
alert(result);
isRepeatable = confirm('Repeat');
}while(isRepeatable)

for(var i = 0; i < 10; i++){
	if(i == 4){
		continue;
	}
	if(i == 7){
		break;
	}
	console.log(i);
}







