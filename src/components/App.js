import '../stylesheets/App.css';
import NavBar from './NavBar';
import Booky from './BookTest';
import BooksListContainer from '../containers/BooksList';
import BooksFormContainer from '../containers/BooksForm';

const App = () => (
  <div className="App">
    <NavBar />
    <div className="AppItem">
      <Booky />
      <BooksListContainer />
      <BooksFormContainer />
    </div>
  </div>
);

export default App;
