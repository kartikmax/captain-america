export const reducerF = (state, action) => {
  console.log(state, action,"here is value");
  if (action.type === "one") {
    return (state = 1);
  }
  if (action.type === "two") {
    return (state = 2);
  }
  if (action.type === "three") {
    return (state = 3);
  }
  if (action.type === "four") {
    return (state = 4);
  }
  // if (action.type === "reset") {
  //   return (state = 0);
  // }
  return state;
};
