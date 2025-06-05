function convertStringToJson() {
    const str = `{"name":"Rohan","age":40}`;
    return JSON.parse(str);
}

console.log(convertStringToJson());
// {name: 'Rohan', age: 40}
