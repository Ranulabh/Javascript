// Dates

let newDate = new Date();

// console.log(newDate);

// console.log(newDate.toString());
// console.log(newDate.toDateString());
// console.log(newDate.toLocaleString());
// console.log(typeof newDate);

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let myDate = new Date();

// console.log(myDate);
// console.log(myDate.getDate()+1);
// console.log(myDate.getTime());

 //`${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})
