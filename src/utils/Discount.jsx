const Discount = (props) => {
 // Calculating discount price
 const fullPrice = props.price;
 const reducedPrice = props.discountedPrice;
 const discountPercentage = Math.trunc(100 * Math.abs((fullPrice - reducedPrice) / ((fullPrice + reducedPrice) / 2)));

 return discountPercentage;
};

export default Discount;
