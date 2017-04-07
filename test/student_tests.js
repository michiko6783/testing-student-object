  var chai = require('chai');
var expect = chai.expect;

var Student = require('../student');
var student;

describe('Student Test Suite', function(){
 before(function(){
   student = new Student('melissa', 'pringle');
 })

 describe('test student', function(){

   it('should return the first name', function(){
     var firstName = student.getFirstName();
     console.log(student);

     expect(firstName).to.equal('melissa');
   });

   it('should return the last name', function(){
     var lastName = student.getLastName();
     expect(lastName).to.equal('pringle');
   });

   it('should return the full name', function(){
     var fullName = student.getFullName();
     expect(fullName).to.equal('melissa pringle');
   });

   it('should return the greeting', function(){
     var greeting = student.getGreeting();
     expect(greeting).to.equal('Good day mate, my name is melissa');
   });

 });



});
