class Stroke {
    constructor() {
        this.points = [];
    }
    drawStroke(pen){
        if(points.length<2) return;
        pen.moveTo(points[0].x, points[0].y);
        for(var i=1; i<points.length; i++){
            pen.lineTo(points[i].x, points[i].y);
        }
        pen.stroke();
    }
}

export { Stroke };
