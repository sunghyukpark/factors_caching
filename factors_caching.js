// var memoizer = function(callback){
//   var cache = [];
//   return function(n){
//     var idx = n.toString();
//     if(cache[idx] == undefined){
//       cache[idx] = callback(n);
//     }

//     return cache[idx];
//   };
// }


var findFactors = function(numArr){
  var arrLen = numArr.length;

  if(arrLen == 0)
    throw new Error("Invalid input, Should have at least 1 element")

  var factorSet = {}

  for(var i=0; i< arrLen; i++){
    var factors = []

    for(var j=0; j< arrLen; j++){
      if (numArr[i] % numArr[j] == 0 && numArr[i] != numArr[j]){
        factors.push(numArr[j])
      }
    }
    factorSet[numArr[i]] = factors;
  }

  return factorSet;
}


var displayFactors = function(factorSet){
  console.log(factorSet);
}

var sortNumber = function(a,b){
  return a - b;
}


// Test cases
var arr = [20,5,2,7,10];
var arr2 = [2,5,10]
var testSet = findFactors(arr);
var testSet2 = findFactors(arr2);
displayFactors(testSet);
displayFactors(testSet2);

