const initialState = [
  {
    id: 1,
    title: 'The New Man',
    category: 'History',
  },
  {
    id: 2,
    title: 'Human Error',
    category: 'Action',
  },
  {
    id: 3,
    title: 'Aztec Blood',
    category: 'History',
  },
];

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
