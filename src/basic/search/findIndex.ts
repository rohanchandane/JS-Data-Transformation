function findIndexOfCar() {
    const vechicals: any = ['car', 'bus', 'bike'];
    return vechicals.findIndex( (item: string) => {
        return item === 'car'
    });
}

console.log(findIndexOfCar());
// 0

// Note: used for arrays, its a higher order function