var net = require('net');
var fs = require('fs');

fs.watchFile('main.tex', function (curr, prev) {
	console.log('file written');
});
