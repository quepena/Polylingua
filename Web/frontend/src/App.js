import './App.css';
import Header from './components/Header';
import './bootstrap.min.css';
import MessageScreen from './screens/MessageScreen';
import BlogScreen from './screens/BlogScreen';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <Route path='/message' component={MessageScreen} exact />
      <Route path='/' component={BlogScreen} exact />
    </Router>
  );
}

export default App;
