var through = require('through2');
var handlebars = require('handlebars');

var buffer = '';

function transform(chunk, encoding, next) {
    buffer += chunk;
    next();
}

function flush(next) {
    var precompiled = handlebars.precompile(buffer);
    var output = "var handlebarsCompiler = require('handlebars/runtime')['default'];\n";
    output += "module.exports = handlebarsCompiler.template(" + precompiled.toString() + ");\n";
    this.push(output);
    next();
}

function processFile(file) {
    var fileExtension = file.split('.').pop();
    buffer = '';
    if (fileExtension === 'hbs') {
        return through(transform, flush);
    }
    return through();
}

module.exports = processFile;
