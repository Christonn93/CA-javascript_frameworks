/**
 * Calculating out % difference on product price
 *
 * @param {*} product
 * @returns The % difference between two numbers
 */
export const priceDiscount = (product) => {
 // Calculating discount price
 const fullPrice = product.price;
 const reducedPrice = product.discountedPrice;
 const discountPercentage = Math.round(((fullPrice - reducedPrice) / fullPrice) * 100);

 return discountPercentage;
};

export function getPercentageIncrease(numA, numB) {
 return ((numA - numB) / numB) * 100;
}
