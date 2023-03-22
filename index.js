import React, { useState } from "react";

function App() {
  const [posts, setPosts] = useState([]);

  const handleFetchClick = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  };

  return (
    <div>
      <button onClick={handleFetchClick}>Fetch</button>
      <div id="card-container">
        {posts.map((post) => (
          <div key={post.id} className="card">
            <h2>
              {post.id}. {post.title}
            </h2>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
