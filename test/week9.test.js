const {
    sumMultiples,
    isValidDNA,
    getComplementaryDNA,
    isItPrime,
    createMatrix,
    areWeCovered
} = require("../challenges/week9");

describe("sumMultiples", () => {
    test("returns sum of numbers that are multiple of 3 or 5", () => {
      expect(sumMultiples([5,12,1,4,9,20])).toBe(46);
      expect(sumMultiples([5, 3,7, 11])).toBe(8);
      expect(sumMultiples([330,15,4,62,117])).toBe(462);
      expect(sumMultiples([333])).toBe(333);
    });
    
    test("return 0 if there are no multiples of 3 or 5", ()=>{
        expect(sumMultiples([1,2,4,7])).toBe(0);
    })

});

describe("isValidDNA", () => {
    test("returns true or false by checking if the string only contains C, G, A and T", ()=> {
        expect(isValidDNA("AAAA")).toBe(true);
        expect(isValidDNA("ACUATGA")).toBe(false);
        expect(isValidDNA("CGTTACGAT")).toBe(true);
        expect(isValidDNA("TACGAUGA")).toBe(false);
    });
});
describe("getComplementaryDNA",()=>{
    test("return a string of the complementary base pairs. In DNA, T always pairs with A, and C always pairs with G.  ACTG will be  TGAC", 
    () => {
        expect(getComplementaryDNA("ACTG")).toBe("TGAC");
        expect(getComplementaryDNA("TAGACT")).toBe("ATCTGA");
    })
});

describe("isItPrime", () => {
    test("This function should receive a number and return true/false depending on whether it is a prime number or not."
      , () => {
        expect(isItPrime(23)).toBe(true);
        expect(isItPrime(987)).toBe(false);
        expect(isItPrime(13)).toBe(true);
        expect(isItPrime(1)).toBe(false);

        
    });
  });