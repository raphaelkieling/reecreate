<div style="display: flex; justify-content: center; flex-direction: column; font-size: 24px;">
    <img src="./icon.svg" height="200px">
    <h4 align="center"> Reecreate </h4>
</div>

Reecrate is a library to clone deep object to minimize the work that is clone a big store.

Without Reecreate:

```js
const appReducer = (state, action) => {
  switch (action.type) {
    case "SET_DEEP_LOAD":
      return {
        ...state,
        screens: {
          ...state.screens,
          loaders: {
            ...state.screens.loaders,
            someScreen: {
              ...state.screens.loaders.someScreen,
              active: true,
            },
          },
        },
      };
  }

  return state;
};
```

With Reecreate:

```js
const appReducer = Reecreate.reducer((draft, action) => {
  switch (action.type) {
    case "SET_DEEP_LOAD":
      draft.screens.loaders.someScreen.active = true;
  }

  return draft;
});
```
