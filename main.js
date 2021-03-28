var msgpack = require('msgpack');
var fs = require('fs');
var o = [6, false, "fuck"];
var b = msgpack.pack(o);

fs.writeFile("test.tmp", b, "binary", (err)=>{});
