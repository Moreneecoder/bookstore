import '../stylesheets/App.css';
import NavBar from './NavBar';
import BooksListContainer from '../containers/BooksList';
import BooksFormContainer from '../containers/BooksForm';

const App = () => (
  <div className="App">
    <NavBar />
    <div className="AppItem">
      <BooksListContainer />
      <BooksFormContainer />
    </div>
  </div>
);

export default App;
