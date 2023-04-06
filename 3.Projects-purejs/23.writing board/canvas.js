const canvas = document.querySelector('#board');
const ctx = canvas.getContext('2d');
canvas.width =window.innerWidth;
canvas.height=2*window.innerHeight;

ctx.strokeStyle='#BADA55';
ctx.linejoin='round';
ctx.linecap='round';
ctx.lineWidth=2;

let drawBoard=false;
let lastX = 0;
let lastY = 0;
let hue =0;
document.getElementById("red").addEventListener('click',()=>{
    canvas.addEventListener('mousedown',(e) =>{ 
        drawBoard = true;
        lastX= e.offsetX;
        lastY= e.offsetY;
        });
        canvas.addEventListener('mousemove',drawred);
        canvas.addEventListener('mouseup',() => drawBoard = false);
        canvas.addEventListener('mouseout',() => drawBoard = false);
    }
);
    document.getElementById("green").addEventListener('click',()=>{
        ctx.strokeStyle=rgb(100, 54, 54);
    }
    );
    document.getElementById("yellow").addEventListener('click',()=>{
        ctx.strokeStyle=rgb(162, 10, 54);
    }
    );
    document.getElementById("white").addEventListener('click',()=>{
        ctx.strokeStyle=rgb(162, 54, 54);
    }
    );

function drawmixed(e){
    if(!drawBoard){
        return;
    }
    console.log(e);
    ctx.strokeStyle=`hsl(${hue}, 100%, 50%)`;    
    ctx.beginPath();
    ctx.moveTo(lastX,lastY);
    ctx.lineTo(e.offsetX,e.offsetY);
    ctx.stroke();
    lastX= e.offsetX;
    lastY= e.offsetY;
    hue++;
}
function drawred(e){
    if(!drawBoard){
        return;
    }
    console.log(e);
    ctx.strokeStyle=`hsl(0.2, 100%, 50%)`;    
    ctx.beginPath();
    ctx.moveTo(lastX,lastY);
    ctx.lineTo(e.offsetX,e.offsetY);
    ctx.stroke();
    // lastX= e.offsetX;
    // lastY= e.offsetY;
    // hue++;
}

canvas.addEventListener('mousedown',(e) =>{ 
drawBoard = true;
lastX= e.offsetX;
lastY= e.offsetY;
});

canvas.addEventListener('mousemove',drawmixed);
canvas.addEventListener('mouseup',() => drawBoard = false);
canvas.addEventListener('mouseout',() => drawBoard = false);

download_img = function(el) {
    var imageURI = canvas.toDataURL("image/jpg");
    el.href = imageURI;
};

document.getElementById("clear").addEventListener('click',() =>{ 
    if(confirm("Do you really want to clear?")){
         ctx.fillStyle = "black";
         ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
});


    // // ctx.fillRect(0, 0, 300, 150);
    // ctx.clearRect(20, 20, 100, 50);
    