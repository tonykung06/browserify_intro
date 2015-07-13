var proxyquire = require('proxyquireify')(require); //wrap the require function provided by browserify to inject mock modules

describe('The taskModule', function() {
    describe('add function', function() {
        it('calls taskRenderer.renderNew', function() {
            // var tasks = require('../src/js/tasks');
            // var taskRenderer = require('../src/js/renderers/taskRenderer');

            // //Spy is automatically removed by Jasmine when the test ends
            // spyOn(taskRenderer, 'renderNew');
            // tasks.add();

            // expect(taskRenderer.renderNew).toHaveBeenCalled();

            //========= use mock module for taskRenderer ============
            var taskRenderer = {
                renderNew: function() {}
            };
            var mocks = {
                './renderers/taskRenderer': taskRenderer
            }
            var tasks = proxyquire('../src/js/tasks', mocks);
            spyOn(taskRenderer, 'renderNew');
            tasks.add();

            expect(taskRenderer.renderNew).toHaveBeenCalled();
        });
    });
});
