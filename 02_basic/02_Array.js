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