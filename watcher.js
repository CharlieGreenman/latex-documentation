var fs = require('fs');

fs.watch('main.tex', function (curr, prev) {
	console.log('file written');
});
