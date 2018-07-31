// Function constructor
var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher'
};

var Person = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
};

Person.prototype.calculateAge = function () {
    console.log(2018-this.yearOfBirth)
};

Person.prototype.lastName = 'Smith';

var fahid = new Person('Fahid', 1992, 'Developer');

// fahid.calculateAge();



//  Object.create
var personProto = {
    calculateAge: function () {
        console.log(2018 - this.yearOfBirth);
    }
};

var fahid = Object.create(personProto);
fahid.name = 'Fahid';
fahid.yearOfBirth = 1992;
fahid.job = 'Developer';

// fahid.calculateAge();

var jane = Object.create(personProto, {
    name: {value: 'Jane'},
    yearOfBirth: {value: 1990},
    job: {value: 'Developer'}
});

jane.calculateAge();