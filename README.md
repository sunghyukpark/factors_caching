<h1>Algorithm Overview</h1>
<h3>Finding Factors without caching</h3>
1. For each element in input array, check if an item in the array is a factor of element. n factor-check for a single element.
2. O(n^2) time complexity if there are n elements in input array

<h3>Finding Factors with caching</h3>
1. Sort input array in desc order. If we start with larger element, more probability of caching results earlier. Takes O(n logn) for sorting - Quicksort, or Mergesort

2. After caching factors of an element, cache factors of each factor(2nd level).

ex) for arr2 in Test cases,
Suppose we start from the first element 10000.

1. cache[10000] = [5000,2500,1000,500,250,100,50,25,10,5]
2. At 2nd level,
cache[5000] = [2500,1000,500,250,100,50,25,10,5]
cache[2500] = [500,250,100,50,25,10,5]
cache[1000] = [500,250,100,50,25,10,5]
cache[500] = [250,100,50,25,10,5]
cache[250] = [50,25,10,5]
cache[100] = [50,25,10,5]
cache[50] = [25,10,5]
cache[25] = [5]
cache[10] = [5]
cache[5] = []

Next element to find factors is 5000 (2nd element in input array). Since we already cached factors array for 5000 at 1st iteration(with 10000), no need to find factors. Reuse cached results.

<h3>Additional Questions</h3>
1. Implemented
2. Performance of caching depends on 1) Whether input array is sorted or not. 2) Whether an element has many factors in input array. We could expect best case when input array is already sorted, has input with large coverage of factors. As example above, if a large element(10000) has every other elements as factors, we could cache every element with a single implementation. This case, total factor checks made is less than 60, which is way smaller compared to 121(11*11 without caching).

Caching with ramdom input array is not efficient, because it has overhead sorting cost. Also, if each element in array is not related as much as in the previous case, cached results are hardly used. Extra storage needed to save cache result could be another cost.

3. Even if we reverse operation, caching algorithm will be the same.As before, we iterate over array, and cache results that are multiples of a single element.

