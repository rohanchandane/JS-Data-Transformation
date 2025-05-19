function getKeysFromUser() {
    const user = { id: 'Rohan', status: 'active' };
    const keys = Object.keys(user);
    return keys;
}

console.log(getKeysFromUser());
// ['id', 'status']