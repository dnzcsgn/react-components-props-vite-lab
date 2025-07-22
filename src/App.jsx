import React from "react";
import Header from "./App/Header/Header";
import About from "./App/About/About";
import ArticleList from "./App/ArticleList/ArticleList";

const posts = [
  {
    id: 1,
    title: "React is Awesome",
    date: "July 19, 2025",
    preview: "React lets you build user interfaces in a modular way...",
  },
  {
    id: 2,
    title: "Component Design Tips",
    date: "July 18, 2025",
    preview: "A guide to designing clean and reusable components...",
  },
];

const App = () => {
  return (
    <div className="App">
      <Header name="My React Blog" />
      <About
        image="https://www.w3schools.com/howto/img_avatar.png"
        about="This is a blog about learning React step-by-step."
      />
      <ArticleList posts={posts} />
    </div>
  );
};

export default App;
