import {
  CHANGE_DISPLAY,
  CHANGE_OPERATION,
  CLEAR_DISPLAY,
  SHOW_RESULT,
  ADD_MEMORY,
  CLEAR_MEMORY,
  RECALL_MEMORY,
} from './actions.jsx';

export const initialState = {
  total: 0,
  operation: '+',
  display: '0',
  memory: 0,
};

const calculateResult = (num1, num2, operation) => {
  switch (operation) {
    case '+':
      return num1 + num2;
    case '*':
      return num1 * num2;
    case '-':
      return num1 - num2;
    case '/':
      return num1 / num2;
    default:
      return;
  }
};

const reducer = (state, action) => {
  switch (action.type) {
    case CHANGE_DISPLAY:
      return {
        ...state,
        display:
          state.display === '0'
            ? action.payload
            : state.display + action.payload,
      };

    case CHANGE_OPERATION:
      return {
        ...state,
        total: Number(state.display),
        operation: action.payload,
        display: '0',
      };

    case SHOW_RESULT:
      const result = calculateResult(
        state.total,
        Number(state.display),
        state.operation
      );
      return {
        ...state,
        total: result,
        display: String(result),
      };

    case CLEAR_DISPLAY:
      return { ...state, total: 0, display: '0' };
    default:
      return state;

    case ADD_MEMORY:
      return {
        ...state,
        memory: Number(state.display) + state.memory,
      };
    case CLEAR_MEMORY:
      return {
        ...state,
        memory: 0,
      };
    case RECALL_MEMORY:
      return {
        ...state,
        display: String(state.memory),
      };
  }
};

export default reducer;
