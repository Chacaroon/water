/**
 * Created by chacaroon on 13.04.17.
 */

/**
 * COORD
 * WIEW
 */

function coordMouseEvent(text, x, y) {
    text.content = [
        'x  : ' + x,
        'y  : ' + y
    ].join('\n');
}