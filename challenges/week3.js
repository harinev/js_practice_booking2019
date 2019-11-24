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

function checkIngredients(menu, ingredients) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredients) throw new Error("ingredient is required");
  // check if ingredient is there,
  //if so , return true else false
  let count=0
  for(let i=0;i<menu.length; i++){
    for (let k=0;k<menu[i].ingredients.length; k++){
      if(menu[i].ingredients[k]== checkIngredients){
        return true
        count+=1
      }
    }
  } 
if (count ==0){
  return false
}
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  // create a new array and stores the numbers 
  let arr3=[]
  arr1.foreach(function(x){
    arr2.foreach(function(y){
      arr1[x]===arr2[y]
      return arr3.push(arr2[y])
    } )
  })
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
