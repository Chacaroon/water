/**
 * Created by chacaroon on 13.04.17.
 */

LibCanvas.extract();

var app = new App({
    size: new Size(900, 900)
})
    , mouse = new Mouse(app.container.bounds)
    , helper = new App.Light(new Size(900, 900));

document.body.onload = setkaModel();