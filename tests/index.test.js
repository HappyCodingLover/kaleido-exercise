"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var two_1 = require("../src/two");
describe('testing fullname', function () {
    test('there is neither firstname nor lastname', function () {
        expect((0, two_1.formatName)({ last: '', first: '' })).toBe('');
    });
});
describe('testing fullname', function () {
    test('there is only the last name', function () {
        expect((0, two_1.formatName)({ last: '', first: 'Wilson' })).toBe('Wilson');
    });
});
describe('testing fullname', function () {
    test('there is full name', function () {
        expect((0, two_1.formatName)({ last: 'Jeffrey', first: 'Wilson' })).toBe('Jeffrey, Wilson');
    });
});
