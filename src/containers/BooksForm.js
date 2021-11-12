import { useState } from 'react';

const BooksForm = () => {
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  let idx = 0;

  const [book, setBook] = useState({
    id: Math.floor(Math.random() * 10) + 1,
    title: '',
    category: 'Something',
  });

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

  const handleSubmit = (formData) => {
    console.log(formData);
  };

  return (
    <div className="BooksForm">
      <form>
        <input value={book.title} onChange={(e) => handleChange(e.target.value, 'changeTitle')} />
        <p>
          Title:
          {book.title}
        </p>

        <p>
          Category:
          {book.category}
        </p>

        <select onChange={(e) => handleChange(e.target.value, 'changeCategory')} name="categories">
          {categories.map((item) => {
            idx += 1;
            return (<option value={item} key={idx}>{item}</option>);
          })}
        </select>
        <button type="submit" onSubmit={(e) => handleSubmit(e)}>Submit</button>
      </form>
    </div>
  );
};

export default BooksForm;
