function getValuesFromObject() {
    const user = { id: 'Rohan', status: 'active' };
    const values = Object.values(user);
    return values;
}

console.log(getValuesFromObject());
// [ 'Rohan', 'active' ]