import { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createBook } from '../actions';
import '../stylesheets/BooksForm.css';

const BooksForm = (props) => {
  const { submitNewBook } = props;
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  let idx = 0;

  const [book, setBook] = useState({
    id: '',
    title: '',
    category: '',
  });

  const [uniqId, setUniqId] = useState(3);

  const handleChange = (data, actionType) => {
    if (actionType === 'changeTitle') {
      setBook({
        ...book,
        title: data,
      });
    } else if (actionType === 'changeCategory') {
      setBook({
        ...book,
        category: data,
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setUniqId(uniqId + 1);
    submitNewBook({
      ...book,
      id: uniqId,
    });
    setBook({
      id: '',
      title: '',
      category: '',
    });
  };

  return (
    <div className="BooksForm">
      <h3 className="grey">ADD NEW BOOK</h3>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input required value={book.title} onChange={(e) => handleChange(e.target.value, 'changeTitle')} placeholder="Book Title" />

        <select required onChange={(e) => handleChange(e.target.value, 'changeCategory')} name="categories">
          <option style={{ color: 'darkgrey' }} value="">Category</option>
          {categories.map((item) => {
            idx += 1;
            return (<option value={item} key={idx}>{item}</option>);
          })}
        </select>
        <button className="main-bg-color" type="submit">ADD BOOK</button>
      </form>
    </div>
  );
};

BooksForm.propTypes = {
  submitNewBook: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  submitNewBook: (book) => {
    dispatch(createBook(book));
  },
});

const BooksFormContainer = connect(null, mapDispatchToProps)(BooksForm);
export default BooksFormContainer;
