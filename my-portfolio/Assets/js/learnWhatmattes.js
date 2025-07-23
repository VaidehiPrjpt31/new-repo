// Var , let , const

// global scped and used anywhere
var a = 10;
var b = 20;
function a1(){
    return a + b;
}
console.log(a1());


// Functional scoped or local scoped in simple language we say that it is bracate scoped

function a2(){
    let a = 20;
    let b = 30;
    return a +b ;
}
console.log(a2());

// a const variable is not a reclared and re initialides funciton block scoped 

function sco(){
    const t = "Can't change the value of the ";
    console.log(t);
}
sco();





