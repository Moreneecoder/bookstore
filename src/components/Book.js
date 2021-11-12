import PropTypes from 'prop-types';

const Book = (props) => {
  const { id, title, category } = props;
  return (
    <div className="Book">
      <tr>
        <td>{id}</td>
        <td>{title}</td>
        <td>{category}</td>
      </tr>
    </div>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
