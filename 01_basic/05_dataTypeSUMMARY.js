/*/ 

1 Primitive Data type:

    7 TYPE : STRING INTEGER BOOLEAN NULL UNDEFINED SYMBOL 
 THEY ARE COPIED FROM ORIGNAL DATA 

 2 Reference(Non- Primitive) memory data type is directly allocated to the addres of the data

    ARRAY OBJECT FUNCTION
*/

const id = Symbol('123')
const id2 = Symbol('123')

console.log(id==id2)

//ARRAY OBJECT FUNCTION

//array 

const hero = ["Cheeta ","Tiger","Lappu"]

console.log(hero)
let employee ={
    name:"Yashant",
    age: 20,
    address: "India",
}

console.log(employee)

function myfun(){
    console.log("My Name is Yashwant")
}

myfun()