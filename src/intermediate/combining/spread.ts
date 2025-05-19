function spreadUsingOperatorInNewCopy() {
    const numbers = [1, 2, 3];
    const updated = [ 0, ...numbers];
    
    return updated;
}

console.log(spreadUsingOperatorInNewCopy());