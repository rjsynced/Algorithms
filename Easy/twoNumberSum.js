// write a function that takes in a non-empty array of distinct integers and an integer represeting a target sum. If any two numbers in the input aray sum up to the target sum, the function should return the min an aray, in any order. If no two numbers sum up to the taret sum, the function should return an empty array.

// not that the target sum has to be obtained by suming two different integers in the array; you can't add a single integer to itself in order to obtain the target sum.

// you can assume that there will be most pair of numbers summing to the target sum.

array = [3, 5, -4, 8, 11, 1, -1, 6]

targetSum = 10

// sample output should be [-1,11]

// double for-loop solution
function twoNumberSum(array, targetSum) {
    let result = []
    for(let i = 0; i < array.length; i++) {
        for(let j = i + 1; j < array.length; j++) {
            if (array[i] + array[j] == targetSum) {
                result.push(array[j], array[i]);
            }
        }
    }
    return result;
}

console.log(twoNumberSum(array, targetSum))

// O(n) Time | O(n) Space Solution
function twoNumberSum1(array, targetSum) {
    const seen = new Set();

    for(let num of array) {
        // complement is the number that will sum up to target when added to the current number we are considering
        const complement = targetSum - num;
        // if we've seen the complement before then we have a pair fo number summing up to the target
        if(seen.has(complement)) {
            return [num, complement];
        }
        // mark the number as seen
        seen.add(num);
    }

    return []
}
console.log(twoNumberSum1(array, targetSum))

// O(n log (n)) time complexity | O(1) Space
// third solution involving two pointers
function twoNumberSum2(array, targetSum) {
    array.sort((a,b) => a - b);
    let left = 0;
    let right = array.length - 1;
    while(left < right) {
        const currentSum = array[left] + array[right];
        if (currentSum === targetSum) {
            return [array[left], array[right]];
        } else if (currentSum < targetSum) {
            left++;
        } else if (currentSum > targetSum) {
            right--;
        }
    }
    return [];
}

console.log(twoNumberSum2(array, targetSum))