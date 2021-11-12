const initialState = [
  {
    id: Math.random().toFixed(2),
    title: 'Harry Porter series',
    category: 'Fantasy',
  },
  {
    id: Math.random().toFixed(2),
    title: 'The New Man',
    category: 'Fiction',
  },
];

const booksReducer = (state = initialState, action) => {
  let output;
  switch (action.type) {
    case 'CREATE_BOOK':
      output = 'CREATED';
      break;
    case 'REMOVE_BOOK':
      output = 'CREATED';
      break;
    default:
      output = state;
  }

  return output;
};

export default booksReducer;
