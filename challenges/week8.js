const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  // find the num in the array and console the num+1
  let ans = null
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === n) {
         (nums[i + 1] !== undefined)? ans = nums[i + 1] : ans = null
    }
  } return ans
};

const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");
  const count = {
    1: 0,
    0: 0
  };
  let numstr = str.toString().split("")
  for (let i = 0; i < numstr.length; i++) {
    const char = numstr[i]
    if (count[char] === undefined) {
      count[char] = 1
    } else count[char] += 1
  }
  return count
};

const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");
  let rev=n.toString().split("").reverse().join("");
  rev=Number(rev)
  return rev
};

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");
  let total =0
  arrs.forEach(function(num){
    num.forEach(function(n){
      total+=n
    })    
  });
  return total
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

str="hEllo world Hello HELLO!"
const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  const frequencies={}
  let str1=str.replace(/[?,'!']/g, "")
  let splitWord=str1.toLowerCase().split(" ")
  for (let i=0; i<splitWord.length; i++){
     let word=splitWord[i]
     if(frequencies[word]===undefined){
       frequencies[word]=1
     } else {frequencies[word]+=1}
  }
   return frequencies
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
