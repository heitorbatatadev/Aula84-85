var canvas= document.getElementById("myCanvas");
var ctx=canvas.getContext("2d");
var roverW=100;
var roverH=90;
var roverX=10;
var roverY=10;

var img_bk="mars.jpg";
var roverImg="rover.png";

function add(){
    img_bkT=new Image();
    img_bkT.onload=uploadBackground;
    img_bkT.src=img_bk

    img_roverT=new Image();
    img_roverT.onload=uploadrover;
    img_roverT.src=roverImg
}
function uploadBackground(){
    ctx.drawImage(img_bkT,0,0,canvas.width,canvas.height)
}
function uploadrover () {
    ctx.drawImage(img_roverT,roverX,roverY,roverW,roverH)
}

window.addEventListener("keydown",myKeydown)
function myKeydown(e){
    keyPressed=e.keyCode;
    if (keyPressed=="40") {
        down()   
    }
    if (keyPressed=="39") {
        right()   
    }
    if (keyPressed=="37") {
        left()   
    }
    if (keyPressed=="38") {
        up()   
    }
}
function down() {
    if (roverY<=500) {
        roverY=roverY+13
        uploadBackground()
        uploadrover()
    }
}
function up() {
    if (roverY>=0) {
        roverY=roverY-13
        uploadBackground()
        uploadrover()
    }
}
function right() {
    if (roverX<=701) {
        roverX=roverX+13
        uploadBackground()
        uploadrover()
    }
}
function left() {
    if (roverX>=0) {
        roverX=roverX-13
        uploadBackground()
        uploadrover()
    }
}