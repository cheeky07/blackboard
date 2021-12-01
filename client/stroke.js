class Stroke {
    constructor() {
        this.points = [];
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
