import ApiHook from "../../api/ApiHooks";

const SumCalculation = ({ id }) => {
 const { data } = ApiHook(`https://api.noroff.dev/api/v1/online-shop/${id}`);

 const allNum = [];
 const numbers = data.map((e) => e.discountedPrice);

 allNum.push(numbers);
 return allNum.reduce((a, b) => a + b);
};

export default SumCalculation;
