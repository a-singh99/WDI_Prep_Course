var name = "Amar";
console.log("Hello",name);

var x = 1125;
var answer = x % 2;
console.log(answer);

var a = true, b = false, c = true;
console.log(a||b||c);

var a = true, b = false, c = true;
console.log(a && b && c);

var answer1 = (10 - 3 * 5/4 + 202 % 3);
var answer2 = 10 - (3 * (5/4) + (202 % 3));
console.log(answer1,answer2);

var num = 12;
var n = num.toString();
console.log(typeof n);

var str = parseInt("113");
console.log(typeof str);

var flt = parseFloat("1.12356");
console.log(typeof flt);

var x = parseInt("Hello World");
console.log(x);

var str = ("I am a BrainStation student"+ "I am a student.");
var reslt= str.search("BrainStation");
console.log(reslt);

var str = "I am a BrainStation student.";
var reslt=str.replace("BrainStation student", "Junior Developer");
console.log(reslt);