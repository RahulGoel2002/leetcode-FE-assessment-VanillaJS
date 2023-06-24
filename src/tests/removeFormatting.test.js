const removeFormatting = require("../removeFormatting");

test("Check 1: Checking unformatted input", () => {
  expect(removeFormatting("12")).toBe("12");
  expect(removeFormatting("123")).toBe("123");
});

test("Check 2: Checking formatted input containing only parenthesis", () => {
  expect(removeFormatting("(123) 4")).toBe("1234");
  expect(removeFormatting("(123) 456")).toBe("123456");
});

test("Check 3: Checking complete formatted input", () => {
  expect(removeFormatting("(123) 456-7890")).toBe("1234567890");
});

test("Check 4: Checking for alien inputs", () => {
  expect(removeFormatting("(123) 4p7-890")).toBe("12347890");
});
