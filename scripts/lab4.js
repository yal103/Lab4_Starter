/**
 * 
 * @param {*} num1, first number to add. 
 * @param {*} num2, second number to add. 
 * @param {*} add, boolean value to tell the function what to do. 
 * @returns The sum of the two numbers if add is true and false otherwise.
 */
function sumValues(num1, num2, add) {
    // check if num1 and num2 are numbers
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return false;
    }

    // check if add is a boolean
    if (typeof add !== 'boolean') {
        return false;
    }

    if (add) { 
        let result = 0;

        result = num1 + num2;

        return result;
    }
    else {
        return add;
    }
}

/**
 * 
 * @param {*} prices, an array of the original price.
 * @param {*} discount, a number between 0-1 to represent the discount. 
 * @returns An array of each price's new price, after the discount is applied. Or false, if prices array is empty.
 */
function discountPrices(prices, discount) {
    // validates prices and discount
    if (!Array.isArray(prices) || prices.length === 0 || 
        typeof discount !== 'number' || discount < 0 || discount > 1) {
            return false;
    }
    const discounted = []
    const length = prices.length;
    let discountedPrice = 0
    for(let i = 0; i < length; i++) {
        // check if price is number
        if (typeof prices[i] !== 'number' || prices[i] < 0) {
            return false;
        }
        discountedPrice = prices[i] * (1 - discount);
        discounted.push(discountedPrice);
    }

    return discounted;
}

module.exports = {sumValues, discountPrices};