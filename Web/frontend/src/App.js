import './App.css';
import Header from './components/Header';
import './bootstrap.min.css';
import MessageScreen from './screens/MessageScreen';
import BlogScreen from './screens/BlogScreen';

function App() {
  return (
    <>
      <Header />
      <MessageScreen />
      <BlogScreen />
    </>
  );
}

export default App;
