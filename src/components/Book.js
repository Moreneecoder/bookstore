import PropTypes from 'prop-types';
import '../stylesheets/Booky.css';

const Book = (props) => {
  const { book, handleClick } = props;

  return (
    <div className="Book">
      <div className="book-details">
        <p className="category grey">{book.category}</p>
        <h3 className="title">{book.title}</h3>
        <p className="author main-text-color">Suzanne Collins</p>

        <p className="book-actions main-text-color">
          <span>Comment</span>
          <span>Remove</span>
          <span>Edit</span>
        </p>
      </div>

      <div className="progess-details">
        <div className="progress-bar" />
        <div style={{ marginLeft: '10px' }}>
          <h1 style={{ margin: '0' }}>8%</h1>
          <p style={{ margin: '0' }}>COMPLETED</p>
        </div>
      </div>

      <div className="page-details">
        <small className="grey">CURRENT CHAPTER</small>
        <p>Chapter 17</p>
        <button className="update-btn main-bg-color" type="button">UPDATE PROGRESS</button>
      </div>

      <button type="button" onClick={() => handleClick(book)}>Remove</button>
    </div>

  // <tr className="Book">
  //   <td>{book.id}</td>
  //   <td>{book.title}</td>
  //   <td>{book.category}</td>
  //   <td><button type="button" onClick={() => handleClick(book)}>Remove</button></td>
  // </tr>
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
