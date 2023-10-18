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

    // DONE
  }
  
  /**
   * @param {number[]} numbers an array of integers
   * @returns {number} the smallest of the numbers
   */
  function getMin(numbers) {
    let minimum=numbers[0];
    for (let i=0;i<numbers.length;i++)
    if (numbers[i]<minimum) 
    minimum=numbers[i];
  return minimum}

    // DONE
  
  
  
  function getMax(numbers) {
    let maximum=numbers[0]
    for(let i=0; i<numbers.length;i++)
    if (numbers[i]> maximum)
    maximum=numbers[i]
    return maximum
    // DONE
  }
  
  /**
   * @param {number[]} numbers an array of integers
   * @returns {number} the range of the numbers (max - min)
   */
  function getRange(numbers) {
    let minimum=numbers[0];
    for (let i=0;i<numbers.length;i++)
    if (numbers[i]<minimum) 
    minimum=numbers[i];
     let maximum=numbers[0]
    for(let i=0; i<numbers.length;i++)
    if (numbers[i]> maximum)
    maximum=numbers[i]
    return (maximum-minimum)}

    // DONE
  
  
  /**
   * @param {number[]} numbers an array of integers
   * @returns {number[]} the even numbers in the array
   */
  function getEvens(numbers) {
      let arr=[];
     for (let i=0;i<numbers.length;i++)
     if (i %2!==0)
     arr.push(numbers[i]);
     return arr}

    // DONE
  
  
  /**
   * @param {number[]} numbers an array of integers
   * @returns {number[]} the odd numbers in the array
   */
  function getOdds(numbers) {
    let arr=[];
     for (let i=0;i<numbers.length;i++)
     if (i %2===0)
     arr.push(numbers[i]);
     return arr}
  
    // DONE
