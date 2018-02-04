var chokidar = require('chokidar');
var shell = require('shelljs');

shell.exec('pdflatex main.tex');

var filesToWatch = [
  'main.tex',
  '**/*.tex'
]

var watcher = chokidar.watch(filesToWatch, {
  ignoreInitial: true
});

watcher.on('add', (event, path) => {
  shell.exec('pdflatex main.tex');
  console.log(event, path);
});

watcher.on('change', (event, path) => {
  shell.exec('pdflatex main.tex');
  console.log(event, path);
});
