import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import CategoryFilter from '../components/CategoryFilter';
import { removeBook, changeFilter } from '../actions';

const BooksList = (props) => {
  const {
    books, filter, removeExistingBook, changeBookFilter,
  } = props;

  const handleFilterChange = (category) => {
    changeBookFilter(category);
  };

  const filteredBooks = () => (filter === 'ALL' ? books : books.filter((book) => book.category === filter));

  return (
    <div className="BooksList">
      <CategoryFilter handleChange={handleFilterChange} />

      {filteredBooks().map((item) => {
        const { id } = item;
        return (<Book key={id} book={item} handleClick={removeExistingBook} />);
      })}
    </div>
  );
};

BooksList.defaultProps = {
  books: [],
};

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  })),
  filter: PropTypes.string.isRequired,
  removeExistingBook: PropTypes.func.isRequired,
  changeBookFilter: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => (state);

const mapDispatchToProps = (dispatch) => ({
  removeExistingBook: (book) => {
    dispatch(removeBook(book));
  },
  changeBookFilter: (filter) => {
    dispatch(changeFilter(filter));
  },
});

const BooksListContainer = connect(mapStateToProps, mapDispatchToProps)(BooksList);
export default BooksListContainer;
