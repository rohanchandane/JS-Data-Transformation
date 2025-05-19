function addTaxToPrice() {
    const percentageOfTax: number = 10;
    const prices = [ {price: 100}, {price: 200} ];
    const taxedPrice = prices.map( (item) => {
        return { price: item.price + ( item.price / 100 ) * percentageOfTax } 
    });

    return taxedPrice;
}

console.log(addTaxToPrice());
// [ {price: 110}, {price: 220} ]