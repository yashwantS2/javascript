const symb = Symbol("Key")

const userOne = {
    name : "Yashwant",
    age : 18,
    city : "Jahanabad",
    isLoggedIn : true,
    lastLoggedDay :["Mon","Tue","Thu","Fri"],
    0:5,
    [symb]:"India1"

}

console.log(userOne.name)//it is not good practice to deal ;

console.log(userOne['0']) //this is the reason 
//one more reason

console.log(userOne[symb])//string

//updating value and freeze it

userOne.age = 20
console.log(userOne["age"])

// Object.freeze(userOne)//freeze
// userOne.age = 22
// console.log(userOne["age"])//20

userOne.email = function(){
    console.log("yashwant@email.com")
} 
userOne.email2 = function(){
    console.log(`Hey ${this.name} your Email is : yashwant@email.com`)
} 

console.log(userOne.email())
console.log(userOne.email2())

