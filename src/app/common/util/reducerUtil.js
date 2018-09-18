export const createReducer = (initial, fnMap) => {
  return (state = initial, { type, payload }) => {
    const handler = fnMap[type];

    return handler ? handler(state, payload) : state;
  };
};