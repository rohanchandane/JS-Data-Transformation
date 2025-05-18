function findNumberGreaterThan(num: Number) {
    const numbers = [10, 55, 80, 30];
    const nums = numbers.filter((num) => {
        return num >= 50;
    });

    return nums;
    
}

console.log(findNumberGreaterThan(50));
// [55, 80]

// Note: filter() returns array