/**
 * Created by chacaroon on 13.04.17.
 */

/**
 * COORD
 * MODEL
 */

function coordModel() {
    var coordLayer, coord, helper, center, cursor, vectors, text, zero;

    atom.patching(window);

    coordLayer = app.createLayer({
        name: 'coord',
        zIndex: 2
    });

    coord = coordLayer.ctx;

    helper = App.Light(new Size(900, 900));

    center = coord.rectangle.center;
    cursor = center.clone();

    zero = new Point(0, app.settings.values.size.height);

    atom.declare('CoordText', App.Element, {
        renderTo: function (ctx, resources) {
            ctx.stroke(this.shape)
        }
    });

    new CoordText(coordLayer, {
        shape: [
            'x  : ' + (-cursor.diff(zero).x),
            'y  : ' + cursor.diff(zero).y
            ].join('\n')
    });

    coordMouseEvent(helper, vectors, zero, cursor, text);
    butModel();
}