console.log('Loaded!');
var element=document.getElementById("main-text");
element.innerHTML="new value";
var img=document.getElementById('modi');
var marginLeft=0;
var moveRight(){
    marginLeft=marginLeft+10;
    img.style.marginLeft=marginLeft+'px';
    
}
img.onclick=function(){
   var interval=setInteraval(moveRight,100);
}