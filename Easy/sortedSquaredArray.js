// write a function that takes in a non-empty array of integers that are sorted in ascending order and returns a new array of the same length with the squares of the original integers also sorted in ascending order.

array = [1, 2, 3, 5, 6, 8, 9]

// array1 = [-5, -4, -3, -2, -1]

// expected output: [1, 4, 9, 25, 36, 64, 81]

function sortedSquaredArray(array) {
    for(let i = 0; i < array.length; i++) {
        array[i] *= array[i]
    }
    array.sort((a,b) => a-b) // this deals with negative numbers that may pop up in the array and reorder's the array in ascending order
    return array
}
console.log(sortedSquaredArray(array))

function sortedSquaredArray1(array) {
    const sortedSquares = new Array(array.length).fill(0);
    let smallValueIdx = 0;
    let largeValueIdx = array.length - 1;

    for (let indx = array.length - 1; indx >= 0; indx--) {
        const smallValue = array[smallValueIdx];
        const largeValue = array[largeValueIdx];

        if(Math.abs(smallValue) > Math.abs(largeValue)) {
            sortedSquares[indx] = smallValue * smallValue;
            smallValueIdx++;
        } else {
            sortedSquares[indx] = largeValue * largeValue;
            largeValueIdx--;
        }
    }
    return sortedSquares
}
console.log(sortedSquaredArray1(array))

