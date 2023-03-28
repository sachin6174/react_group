function outer(){

    let p=0;
    function inner(){
        console.log(p)
    }
    // for(let i=0;i<10;i++){
    //     setTimeout(()=>{
    //         inner();
    //         p++
    //     },i*1000)
    // }
    return inner;

}

outer();