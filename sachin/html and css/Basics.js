console.log("sachin")
// creating variable

let name1="sachin" // make in local scope
name1=5;
{
    var a=10;// make in global scope
}

var name2="chandan"
console.log(a)
const PI=3.14
// PI=10 not allowed

// ( //c++ python)
// semi colon not compulsory

/* function syntax */
function myfun(a){
    return 5;
}

let k=myfun();

let myfun2= function(){

}

myfun2();
// string literal

s=10;
// console.log("sachin have "+ s+  " rupees")
console.log(`sachin have ${s} rupees`)
// notdefine(not created), undefined(garbadge) , null(intentional empty value)

let fgs=null;
console.log(fgs)
/*function syntax*/
// anonymous

myfun(()=> 5)

// ()=>{
    // let p;
//     return 5;
// }

let hh=function(){
    let kk=()=>{
        let pp=function(){

        }
        return pp;
    }
    return kk;
}

let givefun=hh()()();

