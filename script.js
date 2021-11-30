import {
    getHeight,
    getWidth,
    Point
} from "./utils.js";

let pen;
var last = null;
var pendown;

function main() {

    let canvas = document.getElementById("main_canvas");
    canvas.height = getHeight();
    canvas.width = getWidth();
    pen = canvas.getContext('2d');
    pen.fillStyle = "orange";
    pen.fillRect(0, 0, canvas.width, canvas.height);
    pen.lineWidth = 5;
    pen.lineJoin = "round";
    pen.strokeStyle = "white";
    canvas.addEventListener('mousedown',penDown);
    canvas.addEventListener('mousemove',penMove);
    canvas.addEventListener('mouseup',penUp);
}

function penDown(event){
    pen.moveTo(event.pageX, event.pageY);
    pen.beginPath();
    pendown = 1;
}

function penMove(event){
    if(pendown){
        pen.lineTo(event.pageX, event.pageY);
    }
}

function penUp(event){
    pendown = 0;
    pen.stroke();   
}


main();
