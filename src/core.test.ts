import Recreate from "./index";

describe("Core", () => {
  describe("reducer", () => {
    test("create a function with the same interface that a reducer", () => {
      const result = Recreate.reducer(() => {});
      expect(result).toBeTruthy();
      expect(typeof result).toBe("function");
    });

    test("should return with a new object when send a action using the reducer", () => {
      const reducerForRedudex = Recreate.reducer((draft, action) => {
        if (action.type === "add_job") {
          draft.jobs.push(action.payload);
          return draft;
        }
      });

      const initialState = { name: "Test", jobs: [] };
      const action = {
        type: "add_job",
        payload: {
          name: "TEST_JOB",
        },
      };

      const result = reducerForRedudex(initialState, action);

      expect(result).toBeTruthy();
      expect(result).not.toMatchObject(initialState);
      expect(result.jobs).not.toBe(initialState.jobs);
    });
  });

  describe("deepCloneValue", () => {
    test("Clone a simple object", () => {
      const mainObject = { name: "" };
      const result = Recreate.deepCloneValue(mainObject);
      expect(mainObject).not.toBe(result);
    });

    test("should return the value if not is a object value", () => {
      const resultNull = Recreate.deepCloneValue(null);
      expect(resultNull).toBe(null);

      const resultUndefined = Recreate.deepCloneValue(undefined);
      expect(resultUndefined).toBe(undefined);

      const resultEmptyObject = Recreate.deepCloneValue({});
      expect(resultEmptyObject).toBe(resultEmptyObject);

      const resultPrimitiveValue = Recreate.deepCloneValue(1);
      expect(resultPrimitiveValue).toBe(1);
    });

    test("Clone a object deep object, depth = 1", () => {
      const deepObject = { deep: true };
      const mainObject = { name: {}, deepObject };
      const result = Recreate.deepCloneValue(mainObject);

      expect(mainObject).not.toBe(result);
      expect(mainObject.deepObject).not.toBe(result.deepObject);
      expect(result).toMatchObject(mainObject);
    });

    test("Clone a object deep object, depth > 1", () => {
      const mainObject = {
        name: {},
        deep1: {
          deep2: {
            deep3: {
              simpleArray: [1, 2, 3],
              complexArray: [
                {
                  name: "advanced",
                },
              ],
              active: true,
            },
          },
        },
      };
      const result = Recreate.deepCloneValue(mainObject);

      expect(mainObject).not.toBe(result);
      expect(mainObject.deep1).not.toBe(result.deep1);
      expect(result).toMatchObject(mainObject);
    });
  });
});
