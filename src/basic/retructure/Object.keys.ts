function getKeysFromObject() {
    const employee = { name: 'Rohan', age: 40 };
    const keys = Object.keys(employee);
    return keys;
}

console.log(getKeysFromObject());
// ['name', 'age']