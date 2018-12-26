const initState = {
  quizes: [],
  loggedIn: false
};

const rootReducer = (state = initState, action) => {
  console.log(state);
};

export default rootReducer;
