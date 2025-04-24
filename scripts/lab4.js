/**
 * 
 * @param {*} num1, first number to add. 
 * @param {*} num2, second number to add. 
 * @param {*} add, boolean value to tell the function what to do. 
 * @returns The sum of the two numbers if add is true and false otherwise.
 */
function sumValues(num1, num2, add) {
    if (add) {
        const result = 0;

        result = num1 + num2;

        return result;
    }
    else {
        return !add;
    }
}

/**
 * 
 * @param {*} prices, an array of the original price.
 * @param {*} discount, a number between 0-1 to represent the discount. 
 * @returns An array of each price's new price, after the discount is applied. Or false, if prices array is empty.
 */
function discountPrices(prices, discount) {
    const discounted = []
    const length = prices.length;
    let discountedPrice = 0
    for(let i = 0; i < length; i++) {
        discountedPrice += prices[i] * (1 - discount);
        discounted.push(discountedPrice);
    }

    return discounted;
}

module.exports = {sumValues, discountPrices};