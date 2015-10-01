'use strict';

/* ********************************************************
LAB 2: LOOPY SCI-FI

Welcome to Lab 2 =)

Be sure to read all the comments!

All of the instructions are inline with the assignment below.
Look for the word TODO in comments.  Each TODO will have a
description of what is required.

To run this file (in the terminal) use: node lab2.js */

//*********************************************************
// SETUP
//*********************************************************

// We're going to use this special assert method again to
// test our code
function assert(expression, failureMessage) {
  if (!expression) {
    console.log('assertion failure: ', failureMessage);
  }
}

//*********************************************************
// PROBLEM 1: The Blob. 20 points
//*********************************************************

/* Dowington, PA had 1000 citizens on the night the blob escaped
 its meteorite. At first, the blob could only find and consume
 Pennsylvanians at a rate of 1/hour. However, each time it digested
 someone, it became faster and stronger: adding to its consumption
 rate by 1 person/hour.

    for the...      | starting rate of | persons consumed |
                    |  consumption     |    that hour     |
--------------------|------------------|------------------|
    first hour      |    1/hour        |        1         |
    second hour     |    2/hour        |        2         |
    third hour      |    3/hour        |        3         |
    fourth hour     |    4/hour        |        4         |

 TODO: First, make a constructor function, called Blob, that makes blobs.

 TODO: Next, create an instance of Blob named blob.

 TODO: Then, use a loop to calculate how long it took the blob to finish with Dowington. */

function Blob(firstrate) {
  this.rate = firstrate;
}

var blob = new Blob();

var consumedPerson = 0;
var rate = 1;
var hours = 0;
while (consumedPerson < 1000) {
  hours += 1;
  consumedPerson += rate;
  rate += 1;
}
console.log('In ' + hours + ' hours, persons are been consumed totally.');

var hoursSpentInDowington; // TODO: assign me the value of the
                           // above calculation (how long it took
                           // the blob to eat Dowington)
hoursSpentInDowington = hours;

// Now, write a method that takes a population for an arbitrary
// town, and the starting consumption rate, and returns the number
// of hours the blob needs to ooze its way through that town.

function hoursToOoze(population, peoplePerHour) {
  // TODO: implement me based on the instructions above.
  // Be sure to then assign me to the Blob's prototype.
  var consumedPerson = 0;
  var rate = peoplePerHour;
  var hours = 0;
  while (consumedPerson < population) {
    hours += 1;
    consumedPerson += rate;
    rate += 1;
  }
  return hours;
}

Blob.prototype.hoursToOoze = hoursToOoze;

assert(blob.hoursToOoze(0, 1) === 0, 'no people means no time needed.');
assert(blob.hoursToOoze(1000, 1) === hoursSpentInDowington,
  'hoursSpentInDowington should match hoursToOoze\'s result for 1000');

// TODO: write three more assertions like the two above, testing out
// the hoursToOoze method.
assert(blob.hoursToOoze(166, 2) === 17, '17 days needed.');
assert(blob.hoursToOoze(500, 1) === 32, '32 days needed.');
assert(blob.hoursToOoze(2000, 2) === 62, '62 days needed.');
//*********************************************************
// PROBLEM 2: Universal Translator. 20 points
//*********************************************************

var hello = {
  klingon: 'nuqneH',  // home planet is Qo'noS
  romulan: 'Jolan\'tru', // home planet is Romulus
  'federation standard': 'hello' // home planet is Earth
};

// TODO: define a constructor that creates objects to represent
// sentient beings. They have a home planet, a language that they
// speak, and method (that you'll place on the prototype) called
// sayHello.

function SentientBeing(planet, language) {
  // TODO: specify a home planet and a language
  this.homeplanet = planet;
  this.language = language;
  // you'll need to add parameters to this constructor
}

// sb is a SentientBeing object
function sayHello(sb) {
    // TODO: say hello prints out (console.log's) hello in the
    // language of the speaker, but returns it in the language
    // of the listener (the sb parameter above).
    // use the 'hello' object at the beginning of this exercise
    // to do the translating

    /*jshint validthis:true */
  console.log(hello[this.language]);
    // console.log(hello[this.language]);
  return hello[sb.language];
    //TODO: put this on the SentientBeing prototype
}
SentientBeing.prototype.sayHello = sayHello;
// TODO: create three SentientBeings, one for each language in the
// 'hello' object above.
var klingon = new SentientBeing('Qo\'noS', 'klingon'); // TODO: make a klingon
var romulan = new SentientBeing('Romulus', 'romulan'); // TODO: make a romulan
var human = new SentientBeing('Earth', 'federation standard'); // TODO: make a human

assert(human.sayHello(klingon) === 'nuqneH',
  'the klingon should hear nuqneH');

// TODO: write five more assertions, to complete all the possible
// greetings between the three types of sentient beings you created above.
assert(klingon.sayHello(human) === 'hello',
  'the human should hear hello');
assert(klingon.sayHello(romulan) === 'Jolan\'tru',
  'the romulan should hear Jolan\'tru');
assert(romulan.sayHello(human) === 'hello',
  'the human should hear hello');
assert(human.sayHello(romulan) === 'Jolan\'tru',
  'the romulan should hear Jolan\'tru');
assert(romulan.sayHello(klingon) === 'nuqneH',
  'the klingon should hear nuqneH');
//*********************************************************
// PROBLEM 3: Moar Loops. 20 points.
//
// Implement the following functions. Write at least 3
// assertions for each one
//*********************************************************
function max(array) {
  var i;
  var largest = 0;// TODO: return the largest number in the given array
  for (i = 0; i < array.length; i++) {
    if (largest < array[i]) {
      largest = array[i];
    }
  }
  return largest;
}

// TODO: write three more assertions
assert(max([1, 3, 2]) === 3, 'In [1, 3, 2], the largest number is 3');
assert(max([34, 66, 2]) === 66, 'In [34, 66, 2], the largest number is 66');
assert(max([0, 7, 9]) === 9, 'In [0, 7, 9], the largest number is 9.');
assert(max([100, 99, 101]) === 101, 'In [100, 99, 101], the largest number is 101.');
assert(max([34, 6, 888]) === 888, 'In [34, 6, 888], the largest number is 888.');

function variablify(s) {
  // TODO: you are given a string with several words in it
  // return a corresponding variable name that follows
  // javascript conventions
  // HINT:
  // you might want to use these string methods:
  //  split(), charAt(), toUpperCase()
  // and this array method: join()

  var myArray = s.split(' ');
  var i;
  for (i = 1; i < myArray.length; i++) {
    myArray[i] = myArray[i].replace(myArray[i].charAt(0), myArray[i].charAt(0).toUpperCase());
  }
  s = myArray.join('');
  return s;
}

// TODO: write three more assertions
assert(variablify('one two three') === 'oneTwoThree',
  'variablify(\'one two three\')');
assert(variablify('my house') === 'myHouse', 'should be myHouse');
assert(variablify('compare number') === 'compareNumber', 'should be compareNumber');
assert(variablify('check answer') === 'checkAnswer', 'checkAnswer is right');
//*********************************************************
// PROBLEM 4: Cleanup: 10 points
// Makes sure this file passes jshint and jscs
//
// ./node_modules/.bin/grunt jshint
// ./node_modules/.bin/grunt jscs
//*********************************************************
