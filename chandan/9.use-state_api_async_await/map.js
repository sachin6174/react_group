
let arr=[1,2,3,4,5];

let t_arr=arr.map((item)=>{
    return item*item;
})

console.log(t_arr);



let f_arr=arr.filter((item)=>{
    return item>=3;
})

console.log(f_arr);

let r_sum=arr.reduce((sum,item)=>{

    return sum+item;
},0)

console.log(r_sum);

