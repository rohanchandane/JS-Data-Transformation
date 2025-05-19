function addTotalCount() {
    const count = [ {count: 1}, {count: 3}, {count: 6}];
    const totalCount = count.reduce( (acc, next) => {
        return acc + next.count;
    }, 0)
    return totalCount;
}

console.log(addTotalCount());
// 10