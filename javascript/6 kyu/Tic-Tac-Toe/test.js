const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
        var b = ['O', '', '', 'O', 'X', '', 'X', 'O', 'X'];
        Test.expect(solveTTT(b.slice()) == 2, "Error with board: " + b + " - Got: " + solveTTT(b.slice()));

        b = ['', '', '', 'O', '', '', 'X', '', ''];
        Test.expect([0,1,2,4,5,7,8].indexOf(solveTTT(b.slice())) != -1, "Error with board: " + b + " - Got: " + solveTTT(b.slice()));

        b = ['X', 'X', 'O', 'O', 'X', '', '', '', ''];
        Test.expect([7,8].indexOf(solveTTT(b.slice())) != -1, "Error with board: " + b + " - Got: " + solveTTT(b.slice()));

        b = ['', 'O', 'O', 'O', 'O', '', 'X', 'X', ''];
        Test.expect(solveTTT(b.slice()) == 8, "Error with board: " + b + " - Got: " + solveTTT(b.slice()));

        b = ['', 'X', 'O', 'O', '', 'O', 'X', 'X', ''];
        Test.expect([4,8].indexOf(solveTTT(b.slice())) != -1, "Error with board: " + b + " - Got: " + solveTTT(b.slice()));
        
        b = ['X', 'O', '', 'O', 'X', '', 'X', 'O', ''];
        Test.expect([2,8].indexOf(solveTTT(b.slice())) != -1, "Error with board: " + b + " - Got: " + solveTTT(b.slice()));

    });
});