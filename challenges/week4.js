function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  const arr = [];
  nums.forEach(function (item) {
    if (item < 1) {
      arr.push(item);
    }
  })
  return arr
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  let arr = []
  names.forEach(function (name) {
    if (name[0] === char) {
      arr.push(name);
    }
  })
  return arr
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  let arr = []
  words.forEach(function (item) {
    let arrSplit = []
    arrSplit = item.split(' ')
    if (arrSplit[0] === "to") {
      arr.push(item)
    }
  })
  return arr
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  let arr = []
  nums.forEach(function (x) {
    if (Number.isInteger(x) === true) {
      arr.push(x)
    }
  })
  return arr
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  let arr = []
  users.forEach(function (item) {
    arr.push(item.data.city.displayName)
  })
  return arr
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  let arr = nums.map(function (item) {
    return +Math.sqrt(item).toFixed(2)
  })
  return arr
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  let arr=[]
  let splitArr=[]
  sentences.forEach(function(words){
    splitArr=words.split(' ')
    splitArr.forEach(function(item){
      if(item.toLowerCase().includes(str.toLowerCase())===true){
        arr.push(words)
      }
    })
  })
  return arr
}


function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  // Your code here
}

module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides
};
