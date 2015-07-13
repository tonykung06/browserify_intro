'use strict';
var $ = require('jquery');
var taskTemplate = require('../../templates/task.hbs');

function _renderTask(task) {
    return $(taskTemplate(task));
}

exports.renderTasks = function(tasks) {
    var elementArray = $.map(tasks, _renderTask);

    $('#task-list').empty().append(elementArray);
};

exports.renderNew = function() {
    var $taskList = $('#task-list');
    $taskList.prepend(_renderTask({}));
};
