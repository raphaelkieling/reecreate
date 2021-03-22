import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { Provider, useDispatch, useSelector } from "react-redux";
import { createStore } from "redux";
import Reecrate from "reecrate";

const initialStore = { name: "Default name", count: 0 };
// USING the Reecrate. Only add Reecrate.reducer. It's done
const reducer = Reecrate.reducer((draft = initialStore, action) => {
  switch (action.type) {
    case "INCREMENT":
      draft.count++;
      return draft;
  }
  return draft;
});

const storeApp = createStore(reducer);

// The application
function App() {
  const count = useSelector((store) => store.count);
  const dispatch = useDispatch();

  useEffect(() => {}, []);

  return (
    <div>
      Counter: {count}
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });
        }}
      >
        Increment
      </button>
    </div>
  );
}

// Render funcion
ReactDOM.render(
  <Provider store={storeApp}>
    <App />
  </Provider>,
  document.getElementById("root")
);
