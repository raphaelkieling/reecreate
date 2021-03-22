# Reecrate

Reecrate is a library to clone deep object to minimize the work that is clone a big store.

Without Reecreate:

```js
const appStore = (state, action) => {
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
const appStore = Reecreate.reducer((draft, action) => {
  switch (action.type) {
    case "SET_DEEP_LOAD":
      draft.screens.loaders.someScreen.active = true;
  }

  return draft;
});
```
