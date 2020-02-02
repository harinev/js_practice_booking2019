const {
    sumDigits,
    createRange,
    getScreentimeAlertList,
    hexToRGB,
    findWinner
  } = require("../challenges/week10");

  describe("sumDigits", () => {
    test("Takes a number and returns the sum of all its digits", () => {
        expect(sumDigits(1234)).toEqual(10);
        expect(sumDigits(7687454)).toEqual(41);
        
    });

    test("if number is negative", () => {
        expect(sumDigits([-78])).toBe(-15);
    })

});