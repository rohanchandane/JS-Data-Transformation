function getValuesFromObject() {
    const employee = { name: 'Rohan', age: 40 };
    const values = Object.values(employee);
    return values;
}

console.log(getValuesFromObject());
// [ 'Rohan', 40 ]