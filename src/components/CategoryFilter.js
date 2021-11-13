import PropTypes from 'prop-types';

const categories = ['ALL', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

const CategoryFilter = (props) => {
  const { handleChange } = props;
  let idx = 0;

  return (
    <select name="categories" onChange={(e) => handleChange(e.target.value)}>
      {categories.map((item) => {
        idx += 1;
        return (<option value={item} key={idx}>{item}</option>);
      })}
    </select>
  );
};

CategoryFilter.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default CategoryFilter;
