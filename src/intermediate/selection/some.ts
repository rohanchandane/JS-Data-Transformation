function checkIfScoreGreaterThan(num: number) {
    const scores = [{score: 90}, {score:50}];
    const isPresent = scores.some( (item) => {
        return item.score > num;
    })
    return isPresent;
}

console.log(checkIfScoreGreaterThan(80));
// true

// Note: some() returns true/ false