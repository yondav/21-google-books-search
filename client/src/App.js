import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import './App.css';

function App() {
  return (
    <Router>
      <Navigation />
    </Router>
  );
}

export default App;
