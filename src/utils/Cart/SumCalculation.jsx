const SumCalculation = ({ product }) => {
 const allNum = [];
 const numbers = product.map((e) => e.discountedPrice);

 allNum.push(numbers);
 return allNum.reduce((a, b) => a + b);
};

export default SumCalculation;
