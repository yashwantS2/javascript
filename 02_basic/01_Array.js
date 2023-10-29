const CArray = ['India' , 1974, 22.90]

console.log(CArray[1])

//in js different type of element is stored 

CArray.push("Wow")

// insert at the end
console.log(CArray)

CArray.pop()
//remove last element 
console.log(CArray)

//insert at the beginning 

CArray.unshift(89)
console.log(CArray);

//remove inserted element at the begiinning
CArray.shift()
console.log(CArray);

//Slice create copy and change orignal array does not affect by it
const myNum = CArray.slice(1,3)
console.log(myNum)
console.log(CArray)


// splice affect orignal array it ives reference to orignal array
const myNum2 = CArray.splice(1,3)
console.log(myNum2)
console.log(CArray)

