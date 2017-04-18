/**
 * Created by chacaroon on 17.04.17.
 */

function waterModel() {
    var waterLayer = app.createLayer({
        name: 'water',
        zIndex: 2
    })
        , water = waterLayer.ctx;

    atom.declare('WaterElem', App.Element, {
        initialize: function (layer) {
            this.layer = layer;
            this.g = 9.81;
        },

        lol: new Path()
    });
}