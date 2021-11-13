const filterReducer = (state = 'ALL', action) => {
  let output;
  console.log(action);
  switch (action.type) {
    case 'CHANGE_FILTER':
      output = action.filter;
      break;
    default:
      output = state;
  }
  console.log(output);
  return output;
};

export default filterReducer;
