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

describe("createRange", () => {
    test("Creates a range of numbers as an array.Taking start, end and step numbers. Get an array of numbers from start to end with incremantal of step", () => {
        expect(createRange(2, 10, 2).toBe([2, 4, 6, 8, 10]));
        expect(createRange(11, 41, 10).toBe([11, 21, 31, 41]));


    });

    test("if only start and end is given go with step 1 as increment", () => {
        expect(createRange(45, 47).toBe([45, 46, 47]));
    })

});

describe.only("getScreentimeAlertList", () => {
    test("should return an array of username of users who have used more than 100 minutes of screentime for a given date.", () => {
        const users= [
            {
                username: "beth_1234",
                name: "Beth Smith",
                screenTime: [
                    { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40 } },
                    { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31 } },
                    { date: "2019-05-03", usage: { twitter: 42, instagram: 55, facebook: 39 } },
                    { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61 } },
                ]
            },
            {
                username: "sam_j_1989",
                name: "Sam Jones",
                screenTime: [
                    { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10 } },
                    { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16 } },
                    { date: "2019-05-03", usage: { mapMyRun: 0, whatsApp: 40, facebook: 30, safari: 31 } },
                ]
            },
        ];
        expect(getScreentimeAlertList(users, "2019-05-03")).toEqual(["beth_1234", "sam_j_1989"]);
        expect(getScreentimeAlertList(users, "2019-05-04")).toEqual(["beth_1234"]);
    });
});

describe("hexToRGB", () => {
    test("returns each hexadecimal value for R, G and B into its decimal equivalent", () => {
        expect(hexToRGB("#FF1133")).toEqual(rgb(255,17,51));
        expect(hexToRGB("#C0C0C0")).toBe(rgb(192,192,192));
    });
});

describe("findWinner",()=> {
    test("The function should return X if player X has won.", () => {
        expect(findWinner([
            ["X", "0", null],
            ["X", null, "0"],
            ["X", null, "0"]

        ]).toEqual("X"))
    })

    test("The function should return 0 if the player 0 has won.", () => {
        expect(findWinner([
            ["X", "0", "X"],
            ["0", "0", "X"],
            ["X", "0", "0"]

        ]).toEqual("0"))
    })
    test("The function should return null if there is currently no winner.", () => {
        expect(findWinner([
            ["0", "X", null],
            [null, "X", "0"],
            ["0", null, "X"]

        ]).toEqual(null))
    })

})