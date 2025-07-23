

function numSum(num1, num2) {
    return num1 + num2;
}
document.getElementById("demo").innerHTML = numSum(20, 30);


const fruits = new Map([['graps', '20000'], ['apple', 100], ['orange', 400], ['bluebarries', 300], ['pineapple', 300]]);
let x = fruits.get('apple');
document.getElementById("demo").innerHTML = "The number of app in frits are " + x;


let score = 25;
let grade = score >= 90 ? "A" : score >= 65 ? "B" : score >= 60 ? "C" : "Fail";
console.log(grade);

a = 0;
if (a) {
    console.log("Truthy");
} else {
    console.log('falsy')
}

const person = {
    name: "Brinda",
    age: 30,
    city: "New York"
}
document.getElementById("demo").innerHTML = person.name + " Lived in " + person.city;
console.log(!!"");
console.log(!!"hello");
console.log(!!0);
console.log(!!1);


// function getGrade(scores){
//     if(scores >= 90 && scores <= 100){
//         return "A"
//     }else if(scores >= 80 && scores <= 89){
//         return "B"
//     }else if(scores >= 70 && scores <= 79){
//         return "c"
//     }else if(scores >= 60 && scores <= 69){
//         return "D"
//     }else if(scores >= 33 && scores <= 59 ){
//         return "E"
//     }else if(scores >= 0 && scores <= 32 ){
//         return "Fail"
//     }else{
//         return " Invalid";
//     }
// }



// early return patterns
function getGrade(scores) {
    if (scores >= 90 && scores <= 100) return "A"
    if (scores >= 80 && scores <= 89) return "B"
    if (scores >= 70 && scores <= 79) return "c"
    if (scores >= 60 && scores <= 69) return "D"
    if (scores >= 33 && scores <= 59) return "E"
    if (scores >= 0 && scores <= 32) return "Fail"
    return " Invalid";
}


console.log(getGrade(65));
// for (let i = 1; i < 101; i++) {
//     console.log(i)
// }

let j = 1;
while (j < 32) {
    console.log(j);
    j++
}

let k = 12;
do {
    console.log(k);
    k++
}
while (k < 2)


for (let l = 1; l < 201; l++) {
    // if(l === 32){
    //     break;
    // }
    if (l === 32 || l === 100) {
        continue
    }
    console.log(l);
}


for (let x = 10; x > 0; x--) {
    console.log(x);
}

const cars = ['BMW', "Volvo", 'Saab', "Ford"];
let text = "";
list: {
    text += cars[0] + "<br>";
    text += cars[1] + "<br>";
    text += cars[2] + "<br>";
    text += cars[3] + "<br>";
    break list;
}
document.getElementById("demo1").innerHTML = text;

for (let p = 1; p < 11; p++) {
    console.log(`5 * ${p} =  ${5 * p}`)
}

summation = 0;
for (let e = 1; e < 101; ++e) {
    summation = summation + e;
}
console.log(summation);

for (let o = 1; o < 51; o++) {
    if (o % 3 === 0) {
        console.log(o);
    }
}


// let val = prompt('Give a number');

// for (let b = 1; b <= val; b++) {
//     if (b % 2 === 0) {
//         console.log(`${b} is even`);
//     } else {
//         console.log(`${b} is odd`);
//     }
// }


count = 0;
for (let c = 1; c < 101; c++) {
    if (c % 2 === 0) {
        count++;
        console.log(c);
    }

    if (count === 5) break;
}

// Functions (what why how) 
// what functions

let nyc = function () {
    console.log("helllllloooooooo");
}

nyc();


// function declaration

function ABCD() {
    console.log("hello");
}

ABCD();

// function expression  

let kkrh = function () {
    console.log("hello birds");
}

kkrh();

// arrow functions

let apl = () => {
    console.log("bonjoure");
}
apl();

// fat arrow examples

let multiply = (t, r) => {
    return t * r;
}

console.log(multiply(10, 20));

function learn(v1) {
    console.log(`${v1} is a course`)
}

learn('PHP');
learn('HTML');
learn('CSS');
learn('JS');

function XYZ(...val) {
    console.log(val);
}

XYZ(1, 2, 3, 4, 5, 6, 7, 8, 9);


function abcd(val) {
    val();
}
abcd(function () {
    console.log("hey");
})

function klmn() {
    return function () {
        console.log('sdhafhvfjhsvdfbsdfsfsvja');
    }
}
klmn()();


// pure and impure functions

// a function that doesent change the outer value of the funtion


let any = "11";

// this function is pure function 
function hiu() {
    console.log("nothing change inside the funciton or outside the functions");
}
hiu();


// this function is impure function 
function hoo() {
    return any++;
}

console.log(hoo());

// clouser function - that is return a function in the function and use the variable of the parent function and it is  mandetory to use that function variable 

function boom() {
    let d = "Nothing but a outer function of the inner clouser function "
    return function () {
        console.log(d);
    }
}

let inner = boom();
inner();

// Lexical scope 

function nmlk() {
    let l = 990;
    function erty() {
        let w = 20;
        function yuio() {
            let non = 1029;
        }
    }
}


// gusess the answer (this is the quetion)

function SayHi(name = 'Guest') {
    console.log('hi', name);
}
SayHi();


console.log((function () {
    return "anthing";
})());

// rest function

function refd(q, w, e1, ...vale) {
    console.log(q, w, e1, vale);
}
refd(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);


// use rest parameters  to accepts any number od score and return the total

function getScore(...scores) {
    let total = 0;
    scores.forEach(function (val) {
        total = total + val;
    })
    return total;
}
console.log(getScore(12, 20, 39, 45));


// early return
 
function earlyu(agees){
    if(agees < 18)  return 'tooo young for vote';
    return 'Allowed';
}
console.log(earlyu(6));

//  what if function returns nothings 
 function f(){
    return;
 }
console.log(f());


// first class function 
function sayHello(){
    return "Hello ";
}

function greetings(msgHello , name){
    console.log(msgHello() + name)
}
greetings(sayHello , "Vaidehi")



// pass a funciton into another function  and execute it 
function hyhy(val){
  val();
}
hyhy(function(){
    console.log("ehey");
})

// hoisting in the functions
greet(); 
 function greet(){
    console.log("Hi!");
};


// write a bmi calculator 
function bmi(weight ,  height){
    return weight / (height*height);
}
console.log(bmi(50, 1.7).toFixed(2));


// discount calculator 
function discoundCalc(discount){
  return function(price){
    return price - price * (discount / 100);
  };
}
let ten = discoundCalc(10);
let twenty = discoundCalc(20)


console.log(ten(1200));
console.log(twenty(2930));


function counters(){
    let count = 0;
    return function(){
        count++;
        return count;
    };
}

let c1 = counters();
console.log(c1());
console.log(c1());
console.log(c1());
console.log(c1());
console.log(c1());


let d1 = counters();
console.log(d1());
console.log(d1());
console.log(d1());
console.log(d1());
console.log(d1());
console.log(d1());
console.log(d1());
console.log(d1());
console.log(d1());
console.log(d1());



(function(){
    const password = "Secret Password";
    console.log(password);
})();

// console.log(password);



// ARRAYS

function aere(){
    const CARS = new Array(['Saab' , 'Volvo' , 'BMW']);
    console.log(CARS);

}

aere();