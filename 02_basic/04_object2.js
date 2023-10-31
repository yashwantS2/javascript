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