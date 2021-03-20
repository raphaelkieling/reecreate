import Recreate from "./index";

describe("Core", () => {
  test("Create a function with the same interface that a reducer", () => {
    const result = Recreate.reducer(() => {});
    expect(result).toBeTruthy();
  });
});
