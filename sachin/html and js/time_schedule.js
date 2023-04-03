// let timeoutid = setTimeout(()=>{
//     console.log("chandan")
// },2000);
// clearTimeout(timeoutid)
// console.log("sachin")

// let i=0
// let id = setInterval(()=>{
//     console.log("sachin")
//     if(i==5){
//         clearInterval(id)
//     }
//     i++;
// },1000)

for(let i=1;i<=5;i++){
    setTimeout(()=>{
        console.log("chandan")
    },1000*i);    
}
