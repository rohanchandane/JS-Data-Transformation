function findAgeGreaterThan(num: number) {
    const ages = [ {age: 10}, {age: 25}, {age: 40} ];
    const selectedAge = ages.filter( (item) => {
        return item.age >= num;
    });

    return selectedAge;
}

console.log(findAgeGreaterThan(20));
// [ { age: 25 }, { age: 40 } ]

// Note: filter() returns array