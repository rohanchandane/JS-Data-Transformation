function getEntriesFromUser() {
    const employee = { name: 'Rohan', status: 'active' };
    const entries = Object.entries(employee);
    return entries;
}

console.log(getEntriesFromUser());
// [ [ 'name', 'Rohan' ], [ 'status', 'active' ] ]