import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';

const BooksList = (props) => {
  const { books } = props;

  return (
    <div className="BooksList">
      <table>
        <thead>
          <tr>
            <th>Book ID</th>
            <th>Title</th>
            <th>Category</th>
          </tr>
        </thead>

        <tbody>
          {books.map((item) => {
            const { id } = item;
            return (<Book key={id} book={item} />);
          })}
        </tbody>
      </table>
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
};

const mapStateToProps = (state) => ({ books: state });

const mapDispatchToProps = (dispatch) => ({
  submitNewBook: () => {
    // dispatch(addBook(book));
    dispatch({
      id: '1',
      title: 'Harry Porter series',
      category: 'Fantasy',
    });
  },
});

const BooksListContainer = connect(mapStateToProps, mapDispatchToProps)(BooksList);
export default BooksListContainer;
