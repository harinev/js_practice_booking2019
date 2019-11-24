function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  let sqrNo=[];
  //getSquares.foreach(function(i){
   for(let i=0; i<nums.length; i++){
    let sqri= nums[i]*nums[i];
    sqrNo.push(sqri);

  }  
  return sqrNo;
}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  //for each first letter of index >0, to upper case first letter
  //replace and return
  let finalWords=(words[0]);
  for(let i=1; i<words.length; i++){
    let capword="";
  capword=words[i].replace(words[i][0], function(x){
    return (words[i][0]).toUpperCase()
  })
    finalWords+=capword;
  }
  return finalWords; 
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  var count =0;
  var finalcount=0;
  for (let i=0; i<people.length; i++){
          count= people[i].subjects.length
          finalcount+=count
          
  } return finalcount
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  // Your code here!
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  // Your code here!
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
