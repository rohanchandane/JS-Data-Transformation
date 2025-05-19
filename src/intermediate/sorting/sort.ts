function sortArrayName() {
    let users: any = [ {name: 'Zed'}, {name: 'Amy'} ]
    return users.sort((a: any, b: any) => a.name - b.name).reverse();
}

console.log(sortArrayName());
// [ 5, 20, 100 ]