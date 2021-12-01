import {
    getHeight,
    getWidth,
} from "./utils.js";

import {
    Stroke,
} from "./stroke.js";

let pen, lpen, height, width;
var pendown;
var currentStroke;


function main() {

    let canvas = document.getElementById("main_canvas");
    let lcanvas = document.getElementById("live_canvas");
    height = lcanvas.height = canvas.height = getHeight();
    width = lcanvas.width = canvas.width = getWidth();
    pen = canvas.getContext('2d');
    lpen = lcanvas.getContext('2d');
    pen.fillStyle = "orange";
    pen.fillRect(0, 0, canvas.width, canvas.height);
    lpen.lineWidth = pen.lineWidth = 5;
    lpen.lineJoin = pen.lineJoin = "round";
    lpen.strokeStyle = pen.strokeStyle = "white";
    lcanvas.addEventListener('mousedown', penDown);
    lcanvas.addEventListener('mousemove', penMove);
    lcanvas.addEventListener('mouseup', penUp);
}

function penDown(event) {
    currentStroke = new Stroke();
    lpen.moveTo(event.pageX, event.pageY);
    lpen.beginPath();
    pendown = 1;
}

function penMove(event) {
    if (pendown) {
        // console.log(event.pageX, event.pageY);
        lpen.lineTo(event.pageX, event.pageY);
        lpen.stroke();
        currentStroke.addPoint(event.pageX, event.pageY);
    }
}

function penUp() {
    pendown = 0;
    currentStroke.draw(pen);
    lpen.clearRect(0, 0, width, height);
}


main();
