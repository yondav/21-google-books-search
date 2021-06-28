import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import GoogleBooks from './pages/GoogleBooks/GoogleBooks';
import './App.css';

function App() {
  return (
    <Router>
      <Navigation />
      <Route exact path='/' component={GoogleBooks} />
    </Router>
  );
}

export default App;
