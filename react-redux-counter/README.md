# React Redux

### Node version `v16.18.0`

### Redux - A complex satet management tool, with single store as CDS.

### Reducer - Manage the state and returns the newly updated state.

### Actions - Actions have two properties type: which is unique identifier and payload which has data

### Dispatch - Dispatch is used to send actions to update the data.

### Create App `npx create-react-app react-redux`

### Satrt the App `npm start`

### Test App `npm test`

### Build App `npm run build`

### Eject Build `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

### Install redux and react-redux `npm i redux react-redux`

### createStore -

### createSlice -

### Provider -

### useSelector -

### useDispatch -

### `npm install @mui/material @emotion/react @emotion/styled`

### "thunks" are a pattern of writing functions with logic inside that can interact with a Redux store's dispatch and getState methods.

## Counter App Demo 1

### `create store and call it on App.js component wrapped with Provider and with attribute store in import store from from store like below`

### `import store from './store'; import { Provider } from 'react-redux';`

### `<Provider store={store}> <React.StrictMode> <App /> </React.StrictMode> </Provider>`

### `
<code>
    function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const incr = () => {
    dispatch({ type: "INCR" });
  };
  const decr = () => {
    dispatch({ type: "DECR" });
  };
  const add = () => {
    dispatch({ type: "ADD", payload: 10 });
  };
</code>`

<code> 
      <p>Counter: {counter}</p>
      <button onClick={incr}>Increment</button>
      <button onClick={decr}>Decrement</button>
      <button onClick={add}>Add By 10</button>
</code> 

## Counter App Demo 2 with Redux Toolkit

### `npm install @reduxjs/toolkit`