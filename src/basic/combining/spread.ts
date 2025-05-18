function spreadUsingOperator() {
    const numbers = [1, 2, 3, 4];
    const newNumbers = [9, 8, 7];

    return [ ...numbers, ...newNumbers];
}

console.log(spreadUsingOperator());