

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

document.getElementById("demo1").innerHTML = person.name + " Lived in " + person.city;

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

for (let i = 1; i < 101; i++) {
    console.log(i)
}


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


for(let l = 1 ; l<201 ; l++){
    // if(l === 32){
        //     break;
        // }
        
        if(l === 32 || l === 100){
            continue 
        }
        console.log(l);
}


for(let x = 10 ; x> 0 ; x--){
    console.log(x);
}