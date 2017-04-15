/**
 * Created by chacaroon on 13.04.17.
 */

/**
 * COORD
 * WIEW
 */

function coordMouseEvent(helper, vectors, zero, cursor, text) {
    helper.mouse.events.add({
        move: function () {
            cursor.set(this.point);
            text.content = [
                'x  : ' + (-cursor.diff(zero).x),
                'y  : ' + cursor.diff(zero).y
            ].join('\n');
            vectors.invoke('redraw');
        },
        out: function () {
            cursor.set(new Point(-5, -5));
            vectors.invoke('redraw');
        }
    });
}