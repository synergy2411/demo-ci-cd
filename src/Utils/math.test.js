import { sum, getFirstName, getFriends, isDivisibleBy2 } from "./math";

describe("Test suite 1", () => {
  test("returns the addition of two number", () => {
    const result = sum(2, 3);
    expect(result).toEqual(5);
  });

  test("returns the first name of the supplied username", () => {
    const firstName = getFirstName("Monica Geller");
    expect(firstName).toBe("Monica");
  });

  test("returns the friends array", () => {
    const friends = getFriends();
    expect(friends.length).not.toEqual(0);
  });
});

describe("Test Suite 2", () => {
  test("should contains Monica as a friend", () => {
    const friends = getFriends();
    expect(friends).toContain("Rachel");
  });

  test("return true if number is divisible by 2, else false", () => {
    const result = isDivisibleBy2(11);
    // expect(result).toBeTruthy();
    expect(result).toBeFalsy();
  });
});
