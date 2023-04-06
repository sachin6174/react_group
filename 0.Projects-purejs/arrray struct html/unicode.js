
//https://unicode-table.com/en/blocks/

arr=document.getElementsByClassName("box")
// console.log(arr)
for(let i=0;i<arr.length;i++){
    // arr[i].innerHTML="\uD83D\uDC04"
    // arr[i].innerHTML=`&#${i+2700}`;
    arr[i].innerHTML=`U+2700`;
    // arr[i].innerHTML='&#111412';
}

var str = '&#128347';
console.log(str);
// console.log('&#1114112');
