// example_testing


var obj =  function(){
	this.value = 0
}

obj.prototype.adder = function(num){
	 this.value = num
}

module.exports= {obj}