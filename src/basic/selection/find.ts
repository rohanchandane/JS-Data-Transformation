function findFirstEvenNumber() {
    const numbers = [7, 11, 20, 9];
    const nums = numbers.find( (num) => {
        return num % 2 === 0;
    });

    return nums;
}

console.log(findFirstEvenNumber());
// 7 

// Note: find() returns item or undefined