///////date

let date = new Date()

console.log(date);
console.log(date.toString());
console.log(date.toDateString());
console.log(date.toLocaleDateString());
console.log(date.toLocaleString());
console.log(typeof date);

let birthday = new Date(2002 , 1, 5)

console.log(birthday.toDateString());

birthday = new Date(2002, 1, 5, 4, 3,45)
console.log(birthday.toLocaleString());

let newDate = new Date("02-02-2004")

console.log(newDate.toLocaleString());

////TIME/////

let currentTime = Date.now()
console.log(currentTime);
console.log(birthday.getTime());
console.log(birthday.getMonth()+1);

let pp = newDate.toLocaleString('default' , {
    weekday: "long"
})


console.log(pp)//Monday




