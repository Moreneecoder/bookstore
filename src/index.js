import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './stylesheets/index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

const initialState = [
  {
    id: '1',
    title: 'Harry Porter series',
    category: 'Fantasy',
  },
  {
    id: '2',
    title: 'The New Man',
    category: 'Fiction',
  },
];

const CREATE_BOOK = 'CREATE_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

const booksReducer = (state = initialState, action) => {
  let output;
  switch (action.type) {
    case CREATE_BOOK:
      output = 'CREATED';
      break;
    case REMOVE_BOOK:
      output = 'CREATED';
      break;
    default:
      output = state;
  }

  console.log(output);
  return output;
};

const store = createStore(booksReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
