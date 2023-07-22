const { sort } = require('./sorting')
const assert = require('assert')

class Student {
    constructor(age, gpa, fullName) {
      this.age = age;
      this.gpa = gpa;
      this.fullName = fullName;
    };
};

var students = [
    new Student(23, 88, "David Goodman"), 
    new Student(25, 82, "Mark Rose"), 
    new Student(22, 90, "Jane Doe"),
    new Student(25, 90, "Jane Dane")
];
assert.equal(sort(students), "Jane Doe,Jane Dane,David Goodman,Mark Rose");
assert.equal(typeof sort(students),  'string');
