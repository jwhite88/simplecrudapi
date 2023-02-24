import './App.css';
import CreatePost from './components/CreatePost';
import DeletePost from './components/DeletePost';
import GetPosts from './components/GetPosts';
import UpdatePost from './components/UpdatePost';

function App() {
  return (
    <div className="App">
      <h1>Simple CRUD API Using JSON Placeholder</h1>
      <GetPosts />
      <CreatePost />
      <UpdatePost />
      <DeletePost />
    </div>
  );
}

export default App;
