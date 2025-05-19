function mergeTwoObjectWithUpdatedValue() {
    const a = {a: 1};
    const b = {b: 2};
    const override = {a: 5};
    return Object.assign( {a: 1}, {b: 2}, override );
}

console.log(mergeTwoObjectWithUpdatedValue());
// { a: 5, b: 2 }