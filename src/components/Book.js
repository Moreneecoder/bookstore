import PropTypes from 'prop-types';

const Book = (props) => {
  const { book, handleClick } = props;

  return (
    <tr className="Book">
      <td>{book.id}</td>
      <td>{book.title}</td>
      <td>{book.category}</td>
      <td><button type="button" onClick={() => handleClick(book)}>Remove</button></td>
    </tr>
  );
};

Book.defaultProps = {
  book: {},
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }),
  handleClick: PropTypes.func.isRequired,
};

export default Book;
