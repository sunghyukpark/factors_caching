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


var cacheFactors = function(cache, num, arr){
  if(cache[num] == undefined)
    cache[num] = findFactors(num, arr);
}


var makeFactorSet = function(numArr){
  checkArrayLength(numArr);
  var arrLen = numArr.length;
  var factorSet = {};

  for(var i=0; i< arrLen; i++){
    var mightBeFactors = numArr.slice(i,arrLen);
    var num = numArr[i];
    var factors = findFactors(num, mightBeFactors);

    factorSet[num] = factors;
  }
  return factorSet;
}

var cacheMakeFactorSet = function(numArr){
  checkArrayLength(numArr);

  // sort in descending order to utilize caching
  numArr.sort(sortDesc);

  var cache = [];
  var arrLen = numArr.length;
  var factorSet = {};

  for(var i=0; i< arrLen; i++){

    // since array is sorted, no need to look for elements with smaller index
    var mightBeFactors = numArr.slice(i,arrLen)
    var num = numArr[i]

    // cache[20] = [10,5,2] if it's undefined
    cacheFactors(cache, num, mightBeFactors);

    // after caching [10,5,2], cache factors of 10,5,2 into cache
    // cache[10], cache[5], cache[2]
    var clen = cache[num].length;
    if (clen > 0){
      for(var j=0; j< clen; j++){
        var factor = cache[num][j];
        var idx = numArr.indexOf(factor);
        var fmightBeFactors = numArr.slice(idx, arrLen)
        cacheFactors(cache, factor, fmightBeFactors);
      }
    }

    // console.log(num)
    // console.log(cache)
    // console.log(" ")

    factorSet[num] = cache[num];
  }
  return factorSet;
}


var displayFactors = function(factorSet){
  console.log(factorSet);
}


var sortDesc = function(a,b){
  return b - a;
}


// Test cases
var arr = [20,10,7,5,2];
var cacheTestSet = cacheMakeFactorSet(arr);
var testSet = makeFactorSet(arr);

displayFactors(cacheTestSet);
displayFactors(testSet);

