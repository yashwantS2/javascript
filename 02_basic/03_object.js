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
