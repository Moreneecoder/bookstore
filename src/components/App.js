// import '../stylesheets/App.css';
import NavBar from './NavBar';
import BooksListContainer from '../containers/BooksList';
import BooksFormContainer from '../containers/BooksForm';

const App = () => (
  <div className="App">
    <NavBar />
    <BooksListContainer />
    <BooksFormContainer />
  </div>
);

export default App;
