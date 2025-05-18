function addKeyValueToObject() {
    let employee: any = { name: 'Rohan', age: 40 }; // declaring any as TS enforcing initial state as structure and not allowing to add new key value
    employee = { ...employee,  city: 'London' };
    return employee;
}

console.log(addKeyValueToObject());
// { name: 'Rohan', age: 40, city: 'London' }