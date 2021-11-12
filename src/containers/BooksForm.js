import { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createBook } from '../actions';

const BooksForm = (props) => {
  const { submitNewBook } = props;
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  let idx = 0;

  const [book, setBook] = useState({
    id: '',
    title: '',
    category: '',
  });

  const [uniqId, setUniqId] = useState(1);

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
      <form onSubmit={(e) => handleSubmit(e)}>
        <input required value={book.title} onChange={(e) => handleChange(e.target.value, 'changeTitle')} />

        <select required onChange={(e) => handleChange(e.target.value, 'changeCategory')} name="categories">
          {categories.map((item) => {
            idx += 1;
            return (<option value={item} key={idx}>{item}</option>);
          })}
        </select>
        <button type="submit">Submit</button>
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
