function cloneAndAddKeyValue() {
    const randomObject: any = { x: 1, y: 2 }; // declaring any as TS enforcing initial state as structure and not allowing to add new key value
    const clonedArray = { ...randomObject };
    return { ...clonedArray,  z: 3  }
}

console.log(cloneAndAddKeyValue());
// { x: 1, y: 2, z: 3 }