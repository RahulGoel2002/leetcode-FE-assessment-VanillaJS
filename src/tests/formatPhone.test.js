const formatPhone = require("../formatPhone");

test("Check 1: Check when no formatting required", () => {
  expect(formatPhone("1", "123")).toBe("123");
  expect(formatPhone("1", "")).toBe("");
});

test("Check 2: Check for length of string(l) ( 3 < l < 7)", () => {
  expect(formatPhone("1", "1234")).toBe("(123) 4");
  expect(formatPhone("1", "123456")).toBe("(123) 456");
});

test("Check 3: Check for (l > 6)", () => {
  expect(formatPhone("1", "1234567")).toBe("(123) 456-7");
  expect(formatPhone("1", "1234567890")).toBe("(123) 456-7890");
});

test("Check 4: Check for non-numeric key press", () => {
  expect(formatPhone("p", "1234")).toBe("");
});
