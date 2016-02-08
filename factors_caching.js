// input check - check length of array
var checkArrayLength = function(arr){
  if (arr.length == 0)
    throw new Error("Invalid input. Should have at least 1 element")
}



// find factors of given num in arr
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



// Cache factors of a given number
var cacheFactors = function(cache, num, arr){
  if(cache[num] == undefined)
    cache[num] = findFactors(num, arr);
}



// Get factor set from input array without caching
var makeFactorSet = function(numArr){
  var start = new Date().getTime();
  checkArrayLength(numArr);
  var arrLen = numArr.length;
  var factorSet = {};

  for(var i=0; i< arrLen; i++){
    var num = numArr[i];
    var factors = findFactors(num, numArr);

    factorSet[num] = factors;
  }
  var elapsed = new Date().getTime() - start;

  console.log("elapsed without cache: " + elapsed);
  console.log("result: ");
  console.log(factorSet);
  console.log();
}



// Get factor set from input array and cache intermediate results
var cacheFactorSet = function(numArr, callback){
  // set timer
  var start = new Date().getTime();

  // check input
  checkArrayLength(numArr);

  // sort in descending order to utilize caching
  numArr.sort(sortDesc);

  var cache = [];
  var arrLen = numArr.length;
  var factorSet = {};

  for(var i=0; i< arrLen; i++){

    // sorted array - look for larger elements only
    var mightBeFactors = numArr.slice(i,arrLen)
    var num = numArr[i]

    // 1st level caching
    cacheFactors(cache, num, mightBeFactors);

    // 2nd level caching
    var clen = cache[num].length;
    if (clen > 0){
      for(var j=0; j< clen; j++){
        var factor = cache[num][j];
        var idx = numArr.indexOf(factor);
        var fmightBeFactors = numArr.slice(idx, arrLen)
        cacheFactors(cache, factor, fmightBeFactors);
      }
    }
    factorSet[num] = cache[num];
  }

  // calculate time (start to elapsed)
  var elapsed = new Date().getTime() - start;

  console.log("elapsed with cache: " + elapsed);
  console.log("result: ");
  console.log(factorSet);
  console.log();
}


// sort number in desc order
var sortDesc = function(a,b){
  return b - a;
}


// display result
var displayFactorSet = function(){
  var caller = arguments.callee.caller.name;
  if (caller == cacheFactorSet){
    console.log("called by cachefactorset")
  }
}



// Test cases
var arr = [2,5,7,10,20];
var arr2 = [10000,5000,2500,1000,500,250, 100, 50, 25, 10, 5];
var arr3 = [];

// smaller set
cacheFactorSet(arr);
makeFactorSet(arr);

// larger set
cacheFactorSet(arr2);
makeFactorSet(arr2);

// check error case
// cacheFactorSet(arr3);
// makeFactorSet(arr3);
