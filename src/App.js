import Navbar from './Navbar/Navbar';
import './style/App.css';
import UserPosts from './UserPosts/UserPosts';

function App() {
  return (
    <div className="App">
      <Navbar />

      <UserPosts />
    </div>
  );
}

export default App;
