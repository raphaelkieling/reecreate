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
type ReducerClone = (state: { [key: string]: any }, action: any) => any;
type ReducerType = (draft: { [key: string]: any }, action: any) => void;

function reducer(callback: ReducerType): ReducerClone {
  return (state, action) => {
    callback(state, action);
  };
}

export default {
  reducer,
};

// export default function appReducer(state = initialState, action) {
//     // The reducer normally looks at the action type field to decide what happens
//     switch (action.type) {
//       // Do something here based on the different types of actions
//       default:
//         // If this reducer doesn't recognize the action type, or doesn't
//         // care about this specific action, return the existing state unchanged
//         return state
//     }
//   }
