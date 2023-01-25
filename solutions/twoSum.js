// input: is an arr of numbers and a target(num)
// output: a pair of nums in the arr that equal target
// constraints: only 1 valid answer exists
// edge: none

// create a map to store our results that we can refer back to
// start with 1 num and check if that number + the next is a match
// if its not we can store in our map since we know there can only be 1 solution
// keep trying all options until we find a match

var twoSum = function(nums, target) {
  let result = {};

  for(let i=0; i < nums.length; i++) {
    let val = nums[i];
    let compPair = target - val;

    if(result[compPair] !== undefined) {
      return [result[compPair], i]
    } else {
      result[val] = i;
    }
  }
};


let nums1 = [3,2,4]
let target1 = 6 //[1,2]
let nums2 = [2,7,11,15]
let target2 = 9 //[0,1]

console.log(twoSum(nums1, target1))