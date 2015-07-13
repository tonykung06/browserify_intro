//to bundle the entry app.js and all its dependencies
//browserify src/js/app.js -o dest/js/app.bundle.js --debug
//--debug will generate sourcemap and append to the bundle js file

//npm install -g browserify
//npm install -g watchify
//watchify src/js/app.js -o dest/js/app.bundle.js --debug -v
//watchify is used in place of browserify to watch any text change in the source

//to transform handlebars html template, need to install two modules
//npm install --save-dev hbsfy
//npm install --save-dev handlebars
//browserify src/js/app.js -o dest/js/app.bundle.js --debug -t hbsfy

'use strict';

var $ = require('jquery');
var tasks = require('./tasks');

function _addTask() {
    tasks.add();
}

function _deleteAllTasks() {
    tasks.clear();
}

function _saveChanges() {
    tasks.save();
}

function _cancelChanges() {
    tasks.cancel()
}

function _deleteTask() {
    tasks.remove(clickEvent);
}

function _registerEventHandlers() {
    $('#new-task-button').on('click', _addTask);
    $('#delete-all-button').on('click', _deleteAllTasks);
    $('#save-button').on('click', _saveChanges);
    $('#cancel-button').on('click', _cancelChanges);
    $('#task-list').on('click', '.delete-button', _deleteTask);
}

_registerEventHandlers();
tasks.render();
