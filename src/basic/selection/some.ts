function checkIfAnyNumberIsEven() {
    const numbers = [4, 5, 6];
    const nums = numbers.some( (num) => {
        return num % 2 === 0;
    });

    return nums;
}

console.log(checkIfAnyNumberIsEven());
// true

// Note: some() returns true/ false