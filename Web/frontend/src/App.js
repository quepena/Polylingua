import './App.css';
import Header from './components/Header';
import './bootstrap.min.css';
import MessageScreen from './screens/MessageScreen';
import BlogScreen from './screens/BlogScreen';
import UsersScreen from './screens/UsersScreen';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoginScreen from './screens/LoginScreen';

function App() {
  return (
    <Router>
      <Header />
      <Route path='/messages' component={MessageScreen} exact />
      <Route path='/' component={BlogScreen} exact />
      <Route path='/users' component={UsersScreen} />
      <Route path="/login" component={LoginScreen}></Route>
    </Router>
  );
}

export default App;
