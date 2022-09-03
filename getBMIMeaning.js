const { template } = require('@babel/core')

function calculateBMI(weight, height) {
  bmi = weight/(height^2);
  return bmi;
}
function getBMIMeaning(weight, height) {
  let bmiMeaning;
  let getBMIVal = calculateBMI(weight, height);
  if (getBMIVal < 18.5) {
    bmiMeaning = "Underweight";
    return bmiMeaning;
  } else if (getBMIVal >= 18.5 && getBMIVal <= 25) {
    bmiMeaning = "Normal Weight";
    return bmiMeaning;
  } else {
    bmiMeaning = "Overweight";
    return bmiMeaning;
  }

}  
module.exports = getBMIMeaning
// console.log(getBMIMeaning(99, 1.8));

