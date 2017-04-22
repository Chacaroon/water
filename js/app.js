/**
 * Created by chacaroon on 13.04.17.
 */

LibCanvas.extract();
atom.patching(window);

var app = new App({
    size: new Size(900, 900),
    invoke: true
})
    , mouse = new Mouse(app.container.bounds)
    , helper = new App.Light(new Size(900, 900));

Number.prototype.degree = function () {
    return this * Math.PI / 180;
};

document.body.onload = function () {
    setkaModel();
    coordModel();
    butModel();
    waterModel();
};