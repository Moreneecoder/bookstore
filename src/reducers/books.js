const initialState = [];

const booksReducer = (state = initialState, action) => {
  let output;
  switch (action.type) {
    case 'CREATE_BOOK':
      output = [
        ...state,
        action.book,
      ];
      break;
    case 'REMOVE_BOOK':
      output = state.filter((book) => book.id !== action.book.id);
      break;
    default:
      output = state;
  }

  return output;
};

export default booksReducer;
