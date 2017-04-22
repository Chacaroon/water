/**
 * Created by chacaroon on 13.04.17.
 */

/**
 * COORD
 * MODEL
 */

function coordModel() {

    var coordLayer = app.createLayer({
        name: 'coord',
        zIndex: 3
    })
        , coord = coordLayer.ctx
        , rect = helper.createText(new Rectangle(16, 8, 150, 80), {
        family: 'monospace', color: '#938368'
    });

    mouse.events.add(
        {
            move: function (mouse) {
                coordMouseEvent(rect, mouse.layerX, coord.height - mouse.layerY)
            },
            out: function () {
                coordMouseEvent(rect)
            }
        });
}