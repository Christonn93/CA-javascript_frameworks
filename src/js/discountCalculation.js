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
 const discountPercentage = Math.trunc(100 * Math.abs((fullPrice - reducedPrice) / ((fullPrice + reducedPrice) / 2)));

 return discountPercentage;
};
