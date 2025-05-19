function findIndexOfFirstOddNumber() {
    const numbers = [2, 4, 7, 10];
    const firstOdd = numbers.findIndex( (num) => {
        return num % 2 > 0;
    });

    return firstOdd;
}

console.log("Index of the first odd number:", findIndexOfFirstOddNumber());
// 2

// Note: used for arrays, its a higher order function