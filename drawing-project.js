var canvasDiv = document.getElementById("drawingArea");
var canvas = canvasDiv.getContext('2d');

canvas.fillStyle = "#990099";
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

canvas.fillStyle = "yellow";
canvas.fillRect(300, 600, 200, 200);

canvas.fillStyle = "black";
canvas.fillRect(230, 675, 200, 55);

canvas.fillstyle = "black";
canvas.fillRect(300, 605, 55, 200);

canvas.fillStyle = "white";
canvas.fillRect(200, 505, 45, 300);

canvas.fillStyle = "white";
canvas.fillRect(455, 505, 45, 300);

canvas.fillStyle = "green";
canvas.fillRect(50, 1600, 1400, 500)

canvas.fillStyle = "red";
canvas.beginPath();
canvas.moveTo(350,150);
canvas.lineTo(500,500);
canvas.lineTo(200,500);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "yellow";
canvas.arc(3500,350,400,0,2*Math.PI,true);
canvas.fill();

canvas.fillStyle = "white";
canvas.fillRect(100, 100,50, 50);

canvas.beginPath();
canvas.moveTo(100,100);
canvas.lineTo(150,100);
canvas.lineTo(125,50);
canvas.fill();

canvas.beginPath();
canvas.moveTo(150,100);
canvas.lineTo(200,125);
canvas.lineTo(150,150);
canvas.fill();

canvas.beginPath();
canvas.moveTo(150,150);
canvas.lineTo(125,200);
canvas.lineTo(100,150);
canvas.fill();

canvas.beginPath();
canvas.moveTo(100,150);
canvas.lineTo(50, 120);
canvas.lineTo(120,90);
canvas.fill();

//2nd star
/*
canvas.fillStyle = "white";
canvas.fillRect(150, 150,50, 50);

canvas.beginPath();
canvas.moveTo(150,150);
canvas.lineTo(200,150);
canvas.lineTo(175,100);
canvas.fill();

canvas.beginPath();
canvas.moveTo(175,100);
canvas.lineTo(250,125);
canvas.lineTo(150, 150);
canvas.fill();

canvas.beginPath();
canvas.moveTo(150,150);
canvas.lineTo(125,200);
canvas.lineTo(100,150);
canvas.fill();

canvas.beginPath();
canvas.moveTo(100,150);
canvas.lineTo(50, 120);
canvas.lineTo(120,90);
canvas.fill();
*/
canvas.fillStyle = "blue";
canvas.fillRect(1400, 1600, 2700, 500)


/*
canvas.beginPath();
canvas.fillStyle = "yellow";
canvas.arc(800,350,90,0,2*Math.PI,true);
canvas.fill();
*/
