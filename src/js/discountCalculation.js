/**
 * Calculating out % difference on product price
 *
 * @param {*} product
 * @returns The % difference between two numbers
 */
export const priceDiscount = (product) => {
 // Calculating discount price
 const fullPrice = Math.round(product.price);
 const reducedPrice = Math.round(product.discountedPrice);
 const discountPercentage = Math.round(((fullPrice - reducedPrice) / fullPrice) * 100);

 //  const discountPercentage = Math.trunc(100 * Math.abs((fullPrice - reducedPrice) / ((fullPrice + reducedPrice) / 2)));

 console.log("Full price:", Math.round(product.price));
 console.log("ReducedPrice:", Math.round(product.discountedPrice));
 console.log("Discount %:", discountPercentage);

 return discountPercentage;
};

export function getPercentageIncrease(numA, numB) {
 return ((numA - numB) / numB) * 100;
}
