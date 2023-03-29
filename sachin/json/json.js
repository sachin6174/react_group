// let sachin={
//     fname:"sachin",
//     lname:"kumar",
//     getName: function(){

//     }
// }
// let myjson=JSON.stringify(sachin)
// console.log(JSON.parse(myjson))


fetch("https://api.codingninjas.com/api/v3/courses").then((res)=>{
    return res.json()
}).then((data)=>{
    console.log(data);
}).catch(()=>{
    console.log("data not recieved")
})
// `https://api.openweathermap.org/data/2.5/weather?q=${city}&unit=metric&appid=841f8d1bd9510f89725f5741f32ee238`





