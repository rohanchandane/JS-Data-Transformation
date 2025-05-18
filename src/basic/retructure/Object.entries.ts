function getEntriesFromObject() {
    const employee = { name: 'Rohan', age: 40 };
    const entries = Object.entries(employee);
    return entries;
}

console.log(getEntriesFromObject());
// [ [ 'name', 'Rohan' ], [ 'age', 40 ] ]