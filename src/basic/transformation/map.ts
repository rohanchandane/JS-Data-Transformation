function doubleEveryNumber() {
    const numbers = [1, 2, 3];
    const nums = numbers.map( (num: number) => {
        return num * 2;
    });

    return nums;
}

console.log(doubleEveryNumber());
// [2, 4, 6]