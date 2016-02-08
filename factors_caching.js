var memoizer = function(callback){
  var cache = [];
  return function(n){
    var idx = n.toString();
    if(cache[idx] == undefined){
      cache[idx] = callback(n);
    }

    return cache[idx];
  };
}


var checkArrayLength = function(arr){
  if (arr.length == 0)
    throw new Error("Invalid input. Should have at least 1 element")
}



var findFactors = function(num, arr){
  checkArrayLength(arr);

  var len = arr.length;
  var factors = [];

  for(var j=0; j< len; j++){
    if (num % arr[j] == 0 && num != arr[j]){
      factors.push(arr[j])
    }
  }
  return factors;
}


var makeNumFactorSet = function(numArr){
  checkArrayLength(numArr);

  var arrLen = numArr.length;
  var factorSet = {}

  for(var i=0; i< arrLen; i++){
    factorSet[numArr[i]] = findFactors(numArr[i], numArr)
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
var testSet = makeNumFactorSet(arr);
var testSet2 = makeNumFactorSet(arr2);
displayFactors(testSet);
displayFactors(testSet2);

