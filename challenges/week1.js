function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  for (n=0; n<= word.length; n++){
    const upperFirst= word[n][0]
    return upperFirst.toUpperCase()+word.slice(1);
  };
}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  //get firstname[0] and lastname[0] and concatenate
  const firstInitials=firstName[0];
  const lastInitials=lastName[0];
  return (firstInitials+"."+ lastInitials);
}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  // vatamount is defined, add it to the original price for the addvat price
  const vatAmount=Number((originalPrice*vatRate/100).toFixed(2));
  // const vatAddedPrice= originalPrice+vatAmount;
  return (originalPrice+vatAmount);
}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  // calculate reduction amount 
  const reductionAmt= Number(originalPrice*reduction/100).toFixed(2);
  //calculate net amount for sale after discount
  return (originalPrice-reductionAmt);
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  
    //get the length of the string and mod 2=0? then evenstr: oddstr
    if (str.length% 2===1) {
      const oddStringIndex= (str.length-1)/2;
      return str[oddStringIndex];
    } else {
      const oddStringIndex=(str.length)/2;
      return str.slice(oddStringIndex-1, oddStringIndex+1)
    }
    // if odd string, get middle char index
    //if even string, get 2 middle char index

  }

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  // into array-split the words-reverse-join 
  return word.split("").reverse().join("");
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  let count=0;
  for(i=0;i<users.length; i++){
    if (users.type[i]==="Linux"){
count +=1;}
return count;
  }
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
    //mean score is avg of numbers
    let sum=0;
    for (i=0;i<=scores.length; i++){
      sum+=scores;
    } 
    let meanscore= Number(sum/scores.length).toFixed(2);
    return meanscore;
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  // return fizz if no is divisible by 3
  //returns buzz if number is divisible by 5
  //returns number is neither
  //returns fizzbuzz if number is divisible by 3 and 5
  if (n%3===0 && n%5===0){
    return ("fizzbuzz") 
  } else if (n% 5===0){
    return ("buzz")
  } else if (n%3===0){
    return ("fizz") 
  } else return (n);
}


module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
};
