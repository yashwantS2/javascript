function country(){
    console.log("INDIA")
}

country() //INDIA 

//if only witten country then it does not print anyhing becuse it shows reference

function addTwoNo(number1, number2){
    return number1+number2
}

// const result = addTwoNo(2,8)
// console.log("Result : ", result)

// function userLogIn(username){
//     if(username == undefined ){
//         console.log("Please Enter Username")
//         return
//     }
//     return `${username} LOGGED IN NO`
// }

//default value
function userLogIn(username = "jindal"){
    if(username == undefined ){
        console.log("Please Enter Username")
        return
    }
    return `${username} LOGGED IN NOW`
}

console.log(userLogIn("yashwant"))
console.log(userLogIn())//jindal logged in
