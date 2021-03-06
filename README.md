<div align="center">
  <img align="center" src="./icon.svg" width="200px">
</div>
<p align="center">
  <h1 align="center">Reecrate</h1>
</p>


Reecrate is a library to clone deep object to minimize the work that is clone a big store using the concept from redux "Immutable Update patterns", see in https://redux.js.org/recipes/structuring-reducers/immutable-update-patterns/

### Install

```
yarn add reecrate
npm install --save reecrate
```

Without Reecrate:

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

With Reecrate:

```js
const appReducer = Reecrate.reducer((draft, action) => {
  switch (action.type) {
    case "SET_DEEP_LOAD":
      draft.screens.loaders.someScreen.active = true;
  }

  return draft;
});
```
