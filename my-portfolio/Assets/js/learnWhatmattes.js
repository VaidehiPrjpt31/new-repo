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


class IronMan{
    constructor(name, suitColor , armourStrength){
            this.name = name;
            this.suitColor = suitColor;
            this._armourStrength = armourStrength;
    }

    fly(){
        console.log(`${this.name} is flying`);
    }

    shootLeser(){
        console.log(`${this.name} is Sooting Leser`);
    }

    // public method to access the private attribute

    getArmourStrength(){
        return this._armourStrength;
    }

    // public method to update the private attribute

    updataeArmourStrength(newStrength){
        this._armourStrength = newStrength;
    }

}

const ironMan = new IronMan('Tony Stark' , "Red and Golden" , 100);
console.log(ironMan.getArmourStrength());

ironMan.updataeArmourStrength(120);
console.log(ironMan.getArmourStrength());



// array examples

var nay = ['First' , 'Second'];
nay.push('Third');
console.log('Nay : ' , nay );

var a2 = ['Yello' , 'Blue' ,'Gray' , 'Pink' , 'Green'];
var b2 = ['apple' , 'Blueberry' ,'Graps' , 'Papaya' , 'Gvuava'];
var c2 = ['Hyundai' , 'Honda'];
console.log('a2 colors : ' , a2);
console.log('a2 color slice' , a2.slice());
console.log('a2 color lenght : ' , a2.length);
console.log('Colors at :' , a2.at(-1));
const child = a2.concat(b2);
const child1 = a2.concat(b2 , c2);
console.log(child);
console.log(child1);

let text = b2.constructor;
console.log(text);

let b2copy = new b2.constructor(...b2);
console.log(`this is the constructor of the b2 values : ${b2copy}`);

console.log(b2.pop());
console.log(b2.push("Watermelom"));
console.log(b2);
console.log(b2.shift());
console.log(b2.unshift('apple'));