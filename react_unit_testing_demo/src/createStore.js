import { createStore, applyMiddleware, compose } from 'redux';
import RootReducer from './reducers';
import thunk from 'redux-thunk';

const initialState = {};
export const middleWare = [thunk];

const store = createStore(
  RootReducer,
  initialState,
  compose(
    compose(
      applyMiddleware(...middleWare),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  )
);

// export const createStoreWithMiddleware = applyMiddleware(...middleWare)(
//   createStore
// );
// export const store = createStoreWithMiddleware(RootReducer);
export default store;
