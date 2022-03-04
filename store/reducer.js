import { data } from "../libs/data";

const initState = {
  data: data,
  // time: 30,
  point: 0,
  questionId: 0,
};

const myReducer = (state = initState, action) => {
  switch (action.type) {
    // case 'decrementTime':
    //   return {
    //     ...state,
    //     time: action.payload
    //   };
    case "incrementPoint":
      return {
        ...state,
        point: state.point + 1,
      };
    case "changeQuestion":
      return {
        ...state,
        questionId: action.payload,
      };

    default:
      return state;
  }
};

export { myReducer };
