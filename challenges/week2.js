function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  //return the fillings for sandwiches
  return sandwich.fillings
}

function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  // true or false 
  if (person.city === "Manchester") {
    return true
  } return false
}

function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");
  
  var noofbusses = 0;
  noofbusses = Math.ceil(people / 40);
  return noofbusses
}

function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");
  // count the sheep in an array
  var count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "sheep") {
      count += 1
    }
  } return count
}

function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");

  if (person.address.postCode[0] === "M" && person.address.city === "Manchester") {
    return true
  }
  return false
}

module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode
};
