import { createStore, applyMiddleware, compose } from "redux";

export const configureStore = (preloadedState) => {
  const middlewares = [];
  const middlewareEnhancer = applyMiddleware(...middlewares);
  const storeEnhancers = [middlewareEnhancer];
  const composedEnhancer = compose(...storeEnhancers);

  return createStore(
    rootReducer,
    preloadedState,
    composedEnhancer
  );
};