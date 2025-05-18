function sortArrayInAscendingOrder() {
    const numbers = [100, 5, 20];
    return numbers.sort((a, b) => a - b);
}

console.log(sortArrayInAscendingOrder());
// [ 5, 20, 100 ]