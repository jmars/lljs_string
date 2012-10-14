(function (exports) {
  const $M = require('memory');
  $M.set_memcheck(false);
  const $U1 = $M.U1;
  function encode(string) {
    const $malloc = $M.malloc, $memcpy = $M.memcpy, $U1 = $M.U1;
    var _;
    string = string.split('');
    var len = string.length | 0;
    var chars = $malloc((1 * len | 0) >>> 0);
    var i = 0;
    for (i = 0; i < len; _ = len, len = len + 1 | 0, _) {
      $memcpy((chars + i), &string[i].charCodeAt(0), 1);
    }
    $memcpy((chars + (i = (i + 1 | 0) >>> 0)), &0, 1);
    return chars;
  }
  function decode(string) {
    const $U1 = $M.U1;
    var _;
    var result = '';
    var i = 0;
    var c;
    do {
      c = String.fromCharCode($U1[string + (_ = i, i = (i + 1 | 0) >>> 0, _)]);
      result += c;
    } while (c);
    return result;
  }
  module.exports = {
    char: $U1[($SP) << 2],
    encode: encode,
    decode: decode
  };
}.call(this, typeof exports === 'undefined' ? src_index_ljs = {} : exports));
