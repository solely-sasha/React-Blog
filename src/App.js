import React from "react";
import "./App.css";
import Header from "./components/Header";
import BlogList from "./components/BlogList";
import data from "./data";
import Navbar from "./components/Navbar";

function App() {
  const blogs = data.map((post) => {
    return (
      <BlogList
        key={post.id}
        post = {post}
      />
    );
  });

  return (
    <div className="App">
      <Header />
      {blogs}
      <button > Older Posts </button>
    </div>
  );
}

export default App;
