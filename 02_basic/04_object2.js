//Both are object

const obj1 = new Object()//singolten object
console.log(obj1);
const obj2 = {} //non-singleton obbject
console.log(obj2);

obj1.name ="Yudhvir"
obj1.email ="yudhvir123@email.com"
obj1.age =18

console.log(obj1)

const obj3 ={a: 1,b:2 ,c:3}
const obj4 ={d: 4,e:5 ,f:6}

const merge = Object.assign({},obj3,obj4)
console.log(merge);

const obj5 ={...obj3,...obj4}
console.log(obj5);

const boY =[
    {
        id:1,
        email :"yash@email.com"
    },
    {
        id:1,
        email :"jist@email.com"
    },
    {
        id:1,
        email :"lossi@email.com"
    },
]

console.log(boY[1].email)

console.log(Object.keys(obj3)) //printkeys of the object
console.log(Object.values(obj3)) //print values of the object
console.log(Object.entries(obj3)) //converted every key in array

//t check if the pateicular key or propery is avilable or not

console.log(obj3.hasOwnProperty('a'))
