const Discount = (data) => {
    // Calculating discount price
    const fullPrice = data.price;
    const reducedPrice = data.discountedPrice;
    const discountPercentage = Math.trunc(100 * Math.abs((fullPrice - reducedPrice) / ((fullPrice + reducedPrice) / 2)));
   
    return discountPercentage;
   };
   
   export default Discount;