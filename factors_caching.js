var findFactors = function(numArr){
  var arrLen = numArr.length;
  var sorted = numArr.sort(sortNumber);

  if(arrLen == 0)
    throw new userException("Invalid input, Should have at least 1 element")

  var factorSet = {}

  for(var i=0; i< arrLen; i++){
    var factors = []

    for(var j=0; j< arrLen; j++){
      if (sorted[i] % sorted[j] == 0 && sorted[i] != sorted[j]){
        factors.push(sorted[j])
      }
    }
    factorSet[sorted[i]] = factors

  }
  console.log(factorSet)
}


// custom exception
var userException = function(message){
  this.message = message;
  this.name = "userException";
}

var displayFactors = function(factorSet){
  console.log(factorSet);
}

var sortNumber = function(a,b){
  return a - b;
}

var arr = [20,5,2,10];
// var arr2 = [10,2,7];
findFactors(arr);
findFactorsempem([]);
// findFactors(arr2);

