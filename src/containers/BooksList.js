import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const BooksList = (props) => {
  const { books } = props;
  //   console.log(books);
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
          <tr>
            <td>{books[0].id}</td>
            <td>{books[0].title}</td>
            <td>{books[0].category}</td>
          </tr>
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
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  })),
};

// export default BooksList;
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
