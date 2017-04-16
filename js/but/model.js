/**
 * Created by chacaroon on 13.04.17.
 */

function butModel() {
    var butLayer, but;

    butLayer = app.createLayer({
        name: 'but',
        zIndex: 2
    });

    but = butLayer.ctx;

    but.translate(0, but.height);
    but.scale(1, -1);

    var butPath = new Path()
        .moveTo(new Point (450, 250))

        .lineTo(new Point (400, 250))
        .curveTo(new Point(350, 300), new Point(350, 250))
        .lineTo(new Point(350, 550))
        .curveTo(new Point(415, 780), new Point(350, 610), new Point(420, 600))
        .lineTo(new Point(450, 780))
        /*center*/
        .lineTo(new Point(485, 780))
        .curveTo(new Point(550, 550), new Point(480, 600), new Point(550, 610))
        .lineTo(new Point(550, 300))
        .curveTo(new Point(500, 250), new Point(550, 250))
        .lineTo(new Point(450, 250));

    atom.declare( 'Unit', App.Element, {
        renderTo: function (ctx, resources) {
            ctx.stroke( this.shape);
        }
    });

    new Unit( butLayer, {
        shape: butPath
    });
}

