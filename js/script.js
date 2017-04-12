/**
 * Created by Nikita on 03.04.2017.
 */

/*Подготовка документа*/

var canvas = document.getElementById('containerr'); /*Холст с бутылкой*/
var coordinate = document.getElementById('coord'); /*Холст с координатами*/
var setk = document.getElementById('setka'); /*Холст с координатной плоскостью*/
var setka = setk.getContext('2d');
var coord = coordinate.getContext('2d');
var ctx = canvas.getContext('2d');

ctx.translate(0, canvas.height); /*Установка y0*/
ctx.scale(1, -1);

var x = 0.5;
var y = 0.5;

/*Координатная плоскость*/

setka.beginPath();
for (; x < canvas.width; x += 10) {
    setka.moveTo(x, 0);
    setka.lineTo(x, canvas.width);
}
for (; y < canvas.height; y += 10) {
    setka.moveTo(0, y);
    setka.lineTo(canvas.height, y);
}
setka.strokeStyle = '#eee';
setka.stroke();
setka.closePath();

setka.beginPath();
x = 50.5;
y = 50.5;
setka.textAlign = 'center';
setka.textBaseline = 'bottom';
for (setka.moveTo(x, 900); x < canvas.width; x += 10) {
    if (x % 50 === 0.5) {
        setka.moveTo(x, 900);
        setka.lineTo(x, 890);
        setka.fillText(x - 0.5, x, 890);
    }
}
setka.textAlign = 'left';
setka.textBaseline = 'middle';
for (setka.moveTo(0, y); y < canvas.height; y += 10) {
    if (y % 50 === 0.5) {
        setka.moveTo(0, y);
        setka.lineTo(10, y);
        setka.fillText(canvas.height - y + 0.5, 10, y);
    }
}
setka.strokeStyle = 'black';
setka.stroke();
setka.closePath();

/*Отображение координат*/
coordinate.onmousemove = function(event) {
    x = event.pageX - 10;
    y = coordinate.height - event.pageY + 9;
    coord.clearRect(0, 0, coordinate.width, coordinate.height);
    coord.beginPath();
    coord.strokeText(x + ', ' + y, event.pageX - 5, event.pageY - 15);
    coord.closePath();
};

coordinate.onmouseout = function(event) {
    coord.clearRect(0, 0, coordinate.width, coordinate.height);
}

/*Сама бутылка*/

xL = 280;
yB = 280;

xR = 460;
yT = 760;

var buttle = new Path2D();

buttle.moveTo(300, 300);
buttle.lineTo(300, 550);
buttle.bezierCurveTo(300, 610, 350, 590, 350, 750);
buttle.quadraticCurveTo(350, 760, 370, 760);
buttle.lineTo(390, yT);
buttle.quadraticCurveTo(410, 760, 410, 750);
buttle.bezierCurveTo(410, 580, xR, 620, xR, 550);
buttle.lineTo(xR, 300);
buttle.quadraticCurveTo(xR, yB, 440, yB);
buttle.lineTo(320, yB);
buttle.quadraticCurveTo(300, yB, 300, 300);

buttle.strokeStyle = 'black';

ctx.stroke(buttle);
