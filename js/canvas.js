LibCanvas.extract();

/*-----Подготовка основных элементов-----*/

Number.prototype.degree = function () {
    return this * Math.PI / 180;
};

var app = new App({
    size: new Size(900, 900)
});

var setkaLayer = app.createLayer({
        name: 'setka',
        zIndex: 0
})
    ,mainLayer = app.createLayer({
        name: 'main',
        zIndex: 2
})
    ,coordLayer = app.createLayer({
        name: 'coord',
        zIndex: 3
})
    ,scaleLayer = app.createLayer({
        name: 'scale',
        zIndex: 1
});

var main = mainLayer.ctx
    ,setka = setkaLayer.ctx
    ,coord = coordLayer.ctx
    ,scale = scaleLayer.ctx;

/*!-----Подготовка основных элементов-----*/

/*-----Подготовка рабочей области-----*/

main.translate(0, main.height) /*Установка y0*/
    .scale(1, -1);

var x = 0.5
    ,y = 0.5;

var path = new Path()
    ,marker = new Path();

scale.textAlign = 'center';

for (; x < setka.width; x += 10) {
    path
        .moveTo(new Point(x, y))
        .lineTo(new Point (x, setka.height));
    if (x % 50 === 0.5 && x !== 0.5) {
        marker
            .moveTo(new Point(x, setka.height))
            .lineTo(new Point(x, setka.height - 10));
        scale.fillText(x - 0.5, x, setka.height - 12);
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
        scale.fillText(y - 0.5, 20, setka.height - y);
    }
}

setka
    .stroke(path, '#eee')
    .stroke(marker)
    .strokeAll('black');

var mouse = new Mouse(app.container.bounds);

mouse.events
    .add('move', function (event, mouse) {
        coord.clearAll();
        coord.fillText(mouse.point.x + ' ' + (coord.height - mouse.point.y), mouse.point.x + 5, mouse.point.y - 5)
            .beginPath(mouse.point.x, 0)
            .lineTo(mouse.point.x, coord.height)
            .moveTo(0, mouse.point.y)
            .lineTo(coord.width, mouse.point.y)
            .stroke('red')
            .closePath();
    })
    .add('out', function () {
        coord.clearAll();
    });

var but = new Path()
    .moveTo(new Point (450, 250))

    .lineTo(new Point (400, 250))
    .curveTo(new Point(350, 300), new Point(350, 250))
    .lineTo(new Point(350, 550))
    .curveTo(new Point(420, 780), new Point(350, 610), new Point(420, 600))
    .lineTo(new Point(450, 780))
    /*center*/
    .lineTo(new Point(480, 780))
    .curveTo(new Point(550, 550), new Point(480, 600), new Point(550, 610))
    .lineTo(new Point(550, 300))
    .curveTo(new Point(500, 250), new Point(550, 250))
    .lineTo(new Point(450, 250));

main.stroke(but);