const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  // find the num in the array and console the num+1
  let ans="null"
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === n) {
      if (nums[i + 1] !==null) {
         ans= nums[i+1] 
       } else {
         ans= "null"
       }
    }
  } return ans
};

const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
  const count={
    1:0,
    0:0
  };
  let numstr=str.toString().split("")
  for(let i=0; i<numstr.length;i++){
    const char=numstr[i]
    if (count[char]===undefined){
      count[char]=1
    } else count[char]+=1
  }
  return count
  
};

const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");
  // Your code here!
};

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");
  // Your code here!
};

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  // Your code here!
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  // Your code here!
};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
};

module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies
};
