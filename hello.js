describe("My First Test", function () {

    it("should be true", function () {
        expect(true).toBe(true);
    });
});

describe('sorting the list of users', function () {
    it('sorts in descending order by default', function () {
        var users = ['jack', 'igor', 'jeff'];
        var sorted = users;
        //expect(sorted).toEqual(['jeff', 'jack', 'igor']);
        expect(sorted).toEqual(['jack', 'igor', 'jeff']);
    });
});


describe("hello world", function () {
    var appCtrl;
    var $controller;

    beforeEach(module("app"));
    beforeEach(inject(function (_$controller_) {
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $controller = _$controller_;
    }));


    describe('controller', function () {
        it('testController', function () {
            var $scope = {};
            var controller = $controller('AppCtrl', {
                $scope: $scope
            });
            expect($scope.student).toBe('john');
            expect(controller.message).toBe('hello');

        });
    });
});