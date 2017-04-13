/**
 * Created by chacaroon on 13.04.17.
 */

/**
 * SETKA
 * MODELS
 */

var setkaLayer = app.createLayer({
    name: 'setka',
    zIndex: 0
})
    , scaleLayer = app.createLayer({
    name: 'scale',
    zIndex: 1
})
    , setka = setkaLayer.ctx
    , scale = scaleLayer.ctx;

scale.textAlign = 'center';

var x = y = 0.5
    , path = new Path()
    , marker = new Path();

for (; x < setka.width; x += 10) {
    path
        .moveTo(new Point(x, y))
        .lineTo(new Point (x, setka.height));
    if (x % 50 === 0.5 && x !== 0.5) {
        marker
            .moveTo(new Point(x, setka.height))
            .lineTo(new Point(x, setka.height - 10));
        textX(x);
    }
}

scale.textBaseline = 'middle';

for (x = 0.5; y < setka.height; y += 10) {
    path
        .moveTo(new Point (x, y))
        .lineTo(new Point (setka.width, y));
    if (y % 50 === 0.5 && y !== 0.5) {
        marker
            .moveTo(new Point(0, y))
            .lineTo(new Point(10, y));
        textY(y - 0.5);
    }
}

lines(setka, path, '#eee');
lines(scale, marker);
lines(scale, 'all');