const { describe, expect, test,  xtest } = require('@jest/globals');
const validate  = require('./index.js') ;

describe('Validate the Inputs', () => {
    test("Should successfully login!", () => {
        expect(validate('Timmy','password')).toEqual('Successfully Logged in!');
    });
    xtest("The password was wrong", () => {
        expect(validate('Timmy','h4x0r')).toEqual('Wrong username or password!');
    });
    xtest("Should successfully login!", () => {
        expect(validate('Alice','alice')).toEqual('Successfully Logged in!');
    });
    xtest("Successfully Logged in!", () => {
        expect(validate('Timmy','password"||""=="')).toEqual('Wrong username or password!');
    });
    xtest("The password was wrong", () => {
        expect(validate('Admin','gs5bw"||1==1//')).toEqual('Wrong username or password!');
    });
});
