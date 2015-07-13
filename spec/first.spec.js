//.toBe(...) Matches with ===
//.toEqual(...) Literal and Object equality
//.toMatch(...) Matches with a regular expression
//.toBeDefined(...) Compares against undefined
//.toBeNull(...) Compares against null
//.toBeTruthy(...) Matches boolean truthy
//.toBeFalsy(...) Matches boolean falsy
//.toContain(...) Finds an item in an array
//.toBeCloseTo(...) Matches that a value is within a range
//.toThrow(...) Tests that a function throws an exception
//.toBeLessThan(...) Matches with <
//.toBeGreaterThan(...) Matches with >

describe('Expect', function() {
    describe("true", function() {
        //Expect true to equal true
        it("to equal true", function() {
            expect(true).toEqual(true);
        });
    });

    describe('awesome function', function() {
        it('to be called', function() {
            var thisIs = {
                awesome: function() {}
            };

            spyOn(thisIs, 'awesome');
            thisIs.awesome();
            expect(thisIs.awesome).toHaveBeenCalled();
        });
    });
});
