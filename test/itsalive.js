// var expect = require('chai').expect;
// var obj = require('../example_testing')
// var chai = require('chai');
// var spies = require('chai-spies');
// chai.use(spies);


// var obj = function(){
// 	this.value =0
// }


// describe('Adder is a function that sums two numbers', function(){
// 	var ourFunction;
// 	beforeEach(function(){
// 	ourFunction = new obj();
// 	console.log(ourFunction.value, '----------') 
// })
// 	it('has initial value of 0', function(){
// 		// expect(ourFunction.value).to.equal(0);
// 	})
// })


// describe('Testing suite capabilities', function () {
//   it('confirms basic arithmetic', function () {
//     expect(2+2).to.equal(4);
//   });
// });



// // describe('Testing Asynchornous', function(){
// // 	it('takes 1000ms to complete task', setTimeout{

// // 	})
// // })
// it('confirms setTimeout\'s timer accuracy', function (done) {
//   var start = new Date();
//   setTimeout(function () {
//     var duration = new Date() - start;
//     expect(duration).to.be.closeTo(1000, 50);
//     done();
//   }, 1000);
// });



// describe('iterator function: prints each element of an array', function() {
// 	it('console logs 6 times', function() {
// 		var arr = [0, 2, 3, 6,4 ,5];
		
// 			var print = function(a) {
// 				console.log(a);
// 			}
// 		var newSpy = chai.spy(print);
// 		arr.forEach(newSpy);
// 		expect(newSpy).to.have.been.called.exactly(arr.length)
// 	});
// });

// it('returns the larger of two numbers', function () {
// 	  var larger = Math.max(5,5);
// 	  var arr = [3, 12, 6];
// 	  function big(array) {
// 	  	var greatest = 0;
// 	  	for (var i = 0; i < array.length; i++) {
// 	  		if (greatest < array[i]) {
// 	  			greatest = array[i];
// 	  		}
	  		
// 	  	}
// 	  	return greatest;
// 	  }


// 	  expect(big(arr)).to.equal(4);
// });