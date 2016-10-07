var canvasDiv = document.getElementById("drawingArea");
var canvas = canvasDiv.getContext('2d');

canvas.fillStyle = "lightblue";
canvas.fillRect(0, 0, 4000, 4000);

canvas.beginPath();
canvas.moveTo(75,50);
canvas.lineTo(100,75);
canvas.lineTo(100,25);
canvas.fill();

canvas.fillStyle = "white";
canvas.fillRect(200, 800, 300, 800);

canvas.fillStyle = "red";
for (var i = 0; i < 26; i++) {
  canvas.fillRect(200, 820 + (i*30), 300, 20)
}

canvas.fillStyle = "black";
canvas.fillRect(230, 675, 200, 55);

canvas.fillstyle = "black";
canvas.fillRect(300, 605, 55, 200);

canvas.fillStyle = "white";
canvas.fillRect(200, 505, 45, 300);

canvas.fillStyle = "white";
canvas.fillRect(455, 505, 45, 300);

//canvas.fillStyle = "red";







/*
canvas.beginPath();
canvas.moveTo(5,350);
canvas.lineTo(200,200);
canvas.lineTo(200,500);
canvas.fill();
*/
/*

canvas.beginPath();
canvas.fillStyle = "yellow";
canvas.arc(600,350,90,0,2*Math.PI,true);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "yellow";
canvas.arc(800,350,90,0,2*Math.PI,true);
canvas.fill();
*/
