import PostsList from './features/post/postsList';
import './App.css'
import AddPostForm from './features/post/AddPostForm';


function App() {

  return (
    <main className="App">
      <AddPostForm />
      <PostsList />
    </main>
  );
}

export default App;
