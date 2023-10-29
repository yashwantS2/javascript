//In stack always get copy of the object or variable
//but in heap you will get reference to that object like in 

let employee ={
    name:"Yashant",
    age: 20,
    address: "India",
    email:"yash@gmail.com"
}
console.log(employee.email)
let employee2 = employee
employee2.email="india@gmail.com"


console.log(employee2.email)
console.log(employee.email)

//push*****

const car =["Audi","BMW"]

console.log(car)

car.push("Ferrari")


console.log(car)