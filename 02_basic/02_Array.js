const state =['Jharkhand','Punjab','Delhi']
const city = ['Gurgaon','Jalandhar','Amritsar']

// state.push(city)
// //in this push whole array become a single data like i can acess it with its inddex no..
// console.log(state);
// console.log(state[3][1]); //jalandhar // its not a good practice

const allInfo = state.concat(city)

console.log(allInfo);//it merges all and spreadd

// but better option to spread is 

const betterSpread = [...state, ...city]

console.log(betterSpread);

//better option to shol=w all value in a row rather than seperating

const bigArray = [1,2,3,[2,3,4,5],6,[7,8,[9,10,11,12,13[14,15,16]]]]

const real_val = bigArray.flat(Infinity)

console.log(real_val)

//converting string to Array

let name = 'Yashwant Singh'

console.log(Array.isArray(name))//false
const Arra= Array.from(name)

console.log(Arra)
console.log(Array.isArray(Arra))//true

//Converting Multiple no into Array

let a = 100
let b = 200
let c = 300

console.log(Array.of(a,b,c))//[100,200,300]