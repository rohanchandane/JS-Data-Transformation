function mergeTwoObject() {
    return Object.assign( {a: 1}, {b: 2} );
}

console.log(mergeTwoObject());
// { a: 1, b: 2 }