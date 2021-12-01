import { Point } from "./utils.js";
class Stroke {
    constructor() {
        this.points = [];
    }
    addPoint(x, y) {
        if (x == this.lastx && y == this.lasty) {
            return;
        }
        this.points.push(new Point(x, y));
        this.lastx = x;
        this.lasty = y;
    }

    draw(pen) {
        if (this.points.length < 2)
            return;

        pen.moveTo(this.points[0].x, this.points[0].y);
        for (var i = 1; i < this.points.length; i++) {
            pen.lineTo(this.points[i].x, this.points[i].y);
        }

        pen.stroke();
    }
}

export { Stroke };
