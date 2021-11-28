import {
    getHeight,
    getWidth
} from "./utils.js";

function main() {

    let canvas = document.getElementById("main_canvas");
    canvas.height = getHeight();
    canvas.width = getWidth();
    let pen = canvas.getContext('2d');
}

main();
