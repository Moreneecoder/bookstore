const BooksForm = () => {
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  let idx = 0;

  return (
    <div className="BooksForm">
      <form>
        <input />
        <select>
          {categories.map((item) => {
            idx += 1;
            return (<option key={idx}>{item}</option>);
          })}
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BooksForm;
