/**
 * Create a way to deep clone all componente
 *
 * Example of use:
 * import Recreate from 'recreate'
 *
 * const initial = {
 *  person: {
 *      name: "Raphael"
 *  }
 * }
 *
 * const personReducer = Recreate.reducer((draft, action)=>{
 *  switch(action.type) {
 *      case "SOMETHING":
 *          draft.person.name = "Diego"
 *      break;
 *  }
 * })
 *
 * Output: (initial, action)=>{}
 */
type SimpleObject = { [key: string]: any };
type ReducerClone = (state: SimpleObject, action: any) => any;
type ReducerType = (draft: SimpleObject, action: any) => void;

type DeepCloneReturn = any;
type DeepCloneParams = any;
// Clone the object to avoid references
function deepCloneValue(valueObject: DeepCloneParams): DeepCloneReturn {
  if (valueObject === null) return null;
  if (valueObject === undefined) return undefined;
  if (typeof valueObject !== "object") return valueObject;

  const finalObjectKeys = Object.keys(valueObject);

  // Recursive way to create a clone of objects
  const finalObject = finalObjectKeys.reduce(
    (acc: SimpleObject, currentKey: string): SimpleObject => {
      const value = valueObject[currentKey];
      const typeOfValue = typeof value;

      if (Array.isArray(value)) {
        acc[currentKey] = value.map(deepCloneValue);
      } else if (typeOfValue === "object") {
        acc[currentKey] = deepCloneValue(value);
      } else {
        acc[currentKey] = value;
      }

      return acc;
    },
    {}
  );

  return finalObject;
}

// Create a reducer function
function reducer(callback: ReducerType): ReducerClone {
  return (state, action) => {
    // make the deep clone
    return callback(deepCloneValue(state), action);
  };
}

export default {
  reducer,
  deepCloneValue,
};
