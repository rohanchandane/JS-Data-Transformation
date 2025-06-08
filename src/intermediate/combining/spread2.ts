function mergeTwoObjectArray() {
    const names = [{ id: 1, name: 'a' }, { id: 2, name: 'b' }];
    const groups = [{ id: 1, group: 'c' }, { id: 2, group: 'd' }];
    
    const namesMap = new Map();

    names.forEach(item => {
        namesMap.set(item.id, item);
    });

    const mergedArray = groups.map((group) => {
        return { ...namesMap.get(group.id), ...group}
    });

    return mergedArray;
}
    
    

console.log(mergeTwoObjectArray());
// [ { id: 1, name: 'a', group: 'c' }, { id: 2, name: 'b', group: 'd' } ]