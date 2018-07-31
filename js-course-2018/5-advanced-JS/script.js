// Function constructor
/*
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

fahid.calculateAge();
*/


//  Object.create
/*
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
*/


// Primitives vs Objects


// primitives
var a = 23;
var b = a;
a = 46;
// console.log(a);
// console.log(b);

// objects
var obj1 = {
    name: 'Fahid',
    age: 26
};

var obj2 = obj1;
obj1.age = 30;
// console.log(obj1);
// console.log(obj2);

// functions
var age = 26;
var obj = {
    name: 'Fahid',
    city: 'Faisalabad'
};

function change(a, b, c) {
    a = 30;
    b.city = 'Lahore';
}

change(age, obj);

// console.log(age);
// console.log(obj.city);


////////////////////////////////
// Lecture: Passing functions as arguments

var years = [1990, 1965, 1937, 2005, 1998];

function arraycalc(arr, fn) {
    var arrRes = [];
    
    for(var i = 0; i < arr.length; i++){
        arrRes.push(fn(arr[i]));
    }
    
    return arrRes;
}

function calculateAge(el) {
    return (2018-el);
}

function isFullAge(el) {
    return el >= 18;
}

function maxHeartRate(el){

    if( el >= 18 && el <= 81 ) {
        return Math.round(206.9 - (0.67 * el));
    } else {
        return -1;
    }

}

var ages = arraycalc(years, calculateAge);
var fullAges = arraycalc(ages, isFullAge);
var heartRates = arraycalc(ages, maxHeartRate);

console.log(ages);
console.log(fullAges);
console.log(heartRates);
