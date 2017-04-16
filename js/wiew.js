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