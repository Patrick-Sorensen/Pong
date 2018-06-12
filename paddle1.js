// Ingnore below this line
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
// Ingnore above this line


//Varibale below
var paddleHeight = 100;
var paddleWidth = 20;
var upPressed = false;
var downPressed = false;
var paddleY = (canvas.height-paddleHeight)/2;
//Variables above

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler,false);

function keyDownHandler(e) {
if(e.keycode == 38) {
upPressed = true;
}
else if(e.keycode == 40){
downPressed = true;
}
}

function keyUpHandler(e) {
if(e.keycode == 38) {
upPressed = false;
}
else if(e.keycode == 40) {
downPressed = false;
}
}

function paddle1() {
ctx.beginPath();
ctx.rect(canvas.width-(paddleWidth *2), paddleY, paddleWidth, paddleHeight);
ctx.fillStyle = "#0095DD";
ctx.fill();
ctx.closePath();
}

//Draw function (game) below
function draw(){
ctx.clearRect(0, 0, canvas.width, canvas.height);
paddle1();


if(upPressed && paddleY > 0) {
paddleY += 7;
}
else if(downPressed && paddleY < canvas.height-paddleHeight) {
paddleY -= 7;
}
}
// Draw function (draw) above

setInterval(draw,10);
