function addAllNumbers() {
    const numbers = [10, 20, 30];
    const num = numbers.reduce((acc, next) => {
        return acc + next;
    }, 0);

    return num;
}

console.log(addAllNumbers());
// 60