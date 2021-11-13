const filterReducer = (state = 'ALL', action) => {
  let output;

  switch (action.type) {
    case 'CHANGE_FILTER':
      output = action.filter;
      break;
    default:
      output = state;
  }
  return output;
};

export default filterReducer;
