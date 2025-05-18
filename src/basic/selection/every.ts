function  checkIfAllNumbersAreEven() {
    const numbers = [2, 4, 6, 8];
    const num = numbers.every( (num) => {
        return num % 2 === 0;
    });

    return num;
}

console.log(checkIfAllNumbersAreEven());
// true

// Note: every() returns true/ false