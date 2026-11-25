
import "./App.css";

import Header from "./components/header";
import Stories from "./components/stories";
import Post from "./components/post";
import Bottom from "./components/bottom";

function App() {
  return (
    <div className="app">

      <Header />

      <Stories />

      <main className="feed">
        <Post />
        <Post />
        <Post />
      </main>

      <Bottom />

    </div>
  );
}

export default App;
