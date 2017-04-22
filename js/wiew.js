/**
 * Created by chacaroon on 13.04.17.
 */

function lines(ctx, path, color) {
    path === 'all' ?
        ctx.strokeAll(color || 'black')
        :
        ctx.stroke(path, color || 'black');
}

function figure(ctx, path, color) {
    path === 'all' ?
        ctx.fillAll(color || 'black')
        :
        ctx.fill(path, color || 'black');
}
function coordMouseEvent(text, x, y) {
    if (x && y) {
        text.content = [
            'x : ' + x,
            'y : ' + y
        ].join('\n');
    } else {
        text.content = '';
    }
}

function textX(scale, x) {
    scale.fillText(x - 0.5, x, scale.height - 12)
}

function textY(scale, y) {
    scale.fillText(y, 20, scale.height - y)
}