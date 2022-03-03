import { data } from "../libs/data";

const initState = {
  data: data,
  time: 30
};

const myReducer = (state = initState, action) => {
  switch (action.type) {
    case 'decrementTime':
      return {
        ...state,
        time: state.time - 1
      };
    default:
      return state;
  }
};

export { myReducer };
