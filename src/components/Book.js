import PropTypes from 'prop-types';

const Book = (props) => {
  const { book } = props;

  return (
    <tr className="Book">
      <td>{book.id}</td>
      <td>{book.title}</td>
      <td>{book.category}</td>
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
};

export default Book;
