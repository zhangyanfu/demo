window.onload = function(){
const con = {
    speed:0.1,  //旋转速度
    spindia:170, //旋转半径

}

let doc = document;

var circle = doc.querySelectorAll('.circle'),
    avatars = doc.querySelectorAll('.avatar'),
    imgs = doc.querySelectorAll('.avatar img');

for(let i=0;i<circle.length;i++){   //设置所有星轨直径
circle[i].style.width = 2*con.spindia+'px';
circle[i].style.height = 2*con.spindia+'px'; 
}

var transX = (avatars.length-1)*25,
    spindia = con.spindia+25;
for(let i=0;i<avatars.length;i++){
	avatars[i].inideg = i*360/avatars.length;
	avatars[i].style.left=-50*i+'px';
	avatars[i].style.transformOrigin = '25px '+ spindia+'px';
    setInterval(function(){
       avatars[i].inideg += con.speed;
       imgs[i].inideg = 360-avatars[i].inideg;
       avatars[i].style.transform = 'translateX('+ transX +'px) rotate('+avatars[i].inideg+'deg)';
       imgs[i].style.transform = 'rotate('+imgs[i].inideg +'deg)';
    },1)
}
}