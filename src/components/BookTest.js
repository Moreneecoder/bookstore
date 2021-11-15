import '../stylesheets/Booky.css';

const Booky = () => (
  <div className="Booky">
    <div>
      <p className="category grey">Action</p>
      <h3 className="title">The Hunger Games</h3>
      <p className="author main-text-color">Suzanne Collins</p>

      <p className="book-actions main-text-color">
        <span>Comment</span>
        <span>Remove</span>
        <span>Edit</span>
      </p>
    </div>

    <div>yolo</div>

    <div className="page-details">
      <small className="grey">CURRENT CHAPTER</small>
      <p>Chapter 17</p>
      <button className="update-btn main-bg-color" type="button">UPDATE PROGRESS</button>
    </div>
  </div>
);

export default Booky;
