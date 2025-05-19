function findWordGreaterThan(num: number) {
    const words = ['hi', 'hello', 'yo'];
    const foundWord = words.find( (word) => {
        return word.length > 3;
    });

    return foundWord;

}

console.log(findWordGreaterThan(3));
// hello

// Note: find() returns item or undefined