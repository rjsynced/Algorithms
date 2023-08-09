// given two non-empty arrays of integers, write a function that determines whether the second array is a subsequence of teh first one.

// A subsequence of an array is a set of numbers that arn't necessarily adjacent in the array but that are in the same order as they appear in the array. For instance, the numbers [1,3,4] form a subsequence of the array [1,2,3,4], and so do the numbers [2,4]. Note that a single number in an array and the array itself are both valid subsequences of teh array

array = [5, 1, 22, 25, 6, -1, 8, 10]

sequence = [1, 6, -1, 10]

// iterating the array while having a counter at the top of our code, if there's a match the counter value goes up and we compare the number to the sequence length
function isValidSubsequence(array, sequence) {
    let counter = 0;
    array.forEach((num) => num == sequence[counter] && counter++)
    return counter == sequence.length
}

console.log(isValidSubsequence(array, sequence))

// O(n) time | O(1) space - where n is the length of the array
function isValidSubsequence1(array, sequence) {
    let arrPointer = 0;
    let seqPointer = 0;
    while (arrPointer < array.length && seqPointer < sequence.length) {
        if (array[arrPointer] === sequence[seqPointer]) {
            seqPointer++;
        }
        arrPointer++;
    }
    return seqPointer === sequence.length;
}

console.log(isValidSubsequence1(array, sequence))

// O(n) time | O(1) space - where n is the length of the array
function isValidSubsequence2(array, sequence) {
    let seqPointer = 0;
    for (const value of array) {
        if (seqPointer === sequence.length) break;
        if (sequence[seqPointer] === value) seqPointer++;
    }
    return seqPointer === sequence.length;
}

console.log(isValidSubsequence2(array, sequence))