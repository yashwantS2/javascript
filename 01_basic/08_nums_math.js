const score = 400
console.log(score)


const balance = new Number(400)
console.log(balance)
console.log(typeof(balance))
console.log(balance.toString())
console.log(balance.toString().length)
console.log(score.toFixed(3))

const otherNo = 22.89976

console.log(otherNo.toPrecision(3)) //22.9

const money = 100000000
console.log(money.toLocaleString('en-IN'));


//    (((((((((((((((((MATHS)))))))))))))))))


console.log(Math);

console.log(Math.floor(4.66));
console.log(Math.round(4.66));
console.log(Math.ceil(4.66));
console.log(Math.abs(-4.66));
console.log(Math.pow(2,3));
console.log(Math.min(2,3,4,5,6,10,7));



console.log(Math.random()); //0-1 eg 0.002,0.112 etc. 
console.log((Math.random()*10)+1);
console.log(Math.floor((Math.random()*10)+1));
const min =1
const max =6

console.log(Math.floor((Math.random()*(max -min +1 ))+min));

console.log(Math.floor(Math.random()* (max - min +1)+min))