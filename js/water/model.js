/**
 * Created by chacaroon on 17.04.17.
 */

function waterModel() {
    var waterLayer = app.createLayer({
        name: 'water',
        zIndex: 2
    })
        , water = {};

    water.ctx = waterLayer.ctx;

    water.path = new Path()
        .moveTo(new Point(450, 450))
        .lineTo(new Point(480, 450))
        .lineTo(new Point(480, 480))
        .lineTo(new Point(450, 480))
        .lineTo(new Point(450, 450));

    water.stroke = function() {
        this.ctx.stroke(this.path);
    };

    water.step = function () {
        this.draw();
        requestAnimationFrame(this.step.bind(this));
    };

    water.draw = function () {
        this.path.move(1, 'down');
        this.ctx.clearAll();
        this.stroke();
    }
}