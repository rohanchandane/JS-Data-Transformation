function convertJSONToString() {
    const obj = {name: 'Rohan', age: 40};
    return JSON.stringify(obj);
}

console.log(convertJSONToString());
// {"name":"Rohan","age":40}