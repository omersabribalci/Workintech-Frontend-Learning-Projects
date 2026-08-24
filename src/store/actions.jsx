export const CHANGE_DISPLAY = 'CHANGE_DISPLAY';
export const CHANGE_OPERATION = 'CHANGE_OPERATION';
export const CLEAR_DISPLAY = 'CLEAR_DISPLAY';
export const SHOW_RESULT = 'SHOW-RESULT';
export const ADD_MEMORY = 'ADD_MEMORY';
export const CLEAR_MEMORY = 'CLEAR_MEMORY';
export const RECALL_MEMORY = 'RECALL_MEMORY';

export const changeDisplay = (numStr) => {
  return { type: CHANGE_DISPLAY, payload: numStr };
};

export const changeOperation = (operation) => {
  return { type: CHANGE_OPERATION, payload: operation };
};

export const clearDisplay = () => {
  return { type: CLEAR_DISPLAY };
};

export const showResult = () => {
  return { type: SHOW_RESULT };
};

export const addMemory = () => {
  return { type: ADD_MEMORY };
};

export const clearMemory = () => {
  return { type: CLEAR_MEMORY };
};

export const recallMemory = () => {
  return { type: RECALL_MEMORY };
};
