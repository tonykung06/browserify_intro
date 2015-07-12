'use strict';

var STORE_NAME = 'tasks';
exports.save = function (tasks) {
	localStorage.setItem(STORE_NAME, JSON.stringify(tasks));
};

exports.load = function () {
	var storedTasks = localStorage.getItem(STORE_NAME);
	if (storedTasks) {
		return JSON.parse(storedTasks);
	}

	return [];
};

exports.clear = function () {
	localStorage.removeItem(STORE_NAME);
};