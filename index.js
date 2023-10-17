
const userInputString = prompt(
    "Please enter some integers separated by commas.",
    "1,2,3,4,5"
  );
  
  const stringArray = userInputString.split(",");
  
  const numbers = [];
  for (let i = 0; i < stringArray.length; i++) {
    const str = stringArray[i];
    const number = parseInt(str);
    numbers.push(number);
  }
  
  console.log(numbers);
  console.log(`You have given ${getLength(numbers)} numbers.`);
  console.log(`The sum of your numbers is ${getSum(numbers)}.`);
  console.log(`The mean of your numbers is ${getMean(numbers)}.`);
  console.log(`The smallest of your numbers is ${getMin(numbers)}.`);
  console.log(`The largest of your numbers is ${getMax(numbers)}.`);
  console.log(`The range of your numbers is ${getRange(numbers)}.`);
  console.log(`The even numbers you gave are ${getEvens(numbers)}.`);
  console.log(`The odd numbers you gave are ${getOdds(numbers)}.`);
  


function getLength(numbers) {
let length= numbers.length
    return length
    // DONE
  }

  function getSum(numbers) {
    let sum=0;
    for (let i =0 ; i<numbers.length;i++)
    sum+=numbers[i]
   return sum;
    // DONE
  }
  
  function getMean(numbers) {
    let sum=0
    let i=0
    for(; i < numbers.length;i++)
    sum += numbers[i]
const mean=(sum/i)
return mean

    // TODO
  }
  
  /**
   * @param {number[]} numbers an array of integers
   * @returns {number} the smallest of the numbers
   */
  function getMin(numbers) {
    // TODO
  }
  
  /**
   * @param {number[]} numbers an array of integers
   * @returns {number} the largest of the numbers
   */
  function getMax(numbers) {
    // TODO
  }
  
  /**
   * @param {number[]} numbers an array of integers
   * @returns {number} the range of the numbers (max - min)
   */
  function getRange(numbers) {
    // TODO
  }
  
  /**
   * @param {number[]} numbers an array of integers
   * @returns {number[]} the even numbers in the array
   */
  function getEvens(numbers) {
    // TODO
  }
  
  /**
   * @param {number[]} numbers an array of integers
   * @returns {number[]} the odd numbers in the array
   */
  function getOdds(numbers) {
    // TODO