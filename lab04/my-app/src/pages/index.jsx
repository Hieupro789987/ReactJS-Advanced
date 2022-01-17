import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "../components/navbar";
import { PostForm } from "../components/post/postForm";
import { PostList } from "../components/post/postList";
import "./style.css";

const Index = (props) => {
  return (
    <Router>
      <h1>Wellcome to Blog app of VAC</h1>
      <Navbar />

      <Routes>
        <Route
          exact
          path="/"
          element={(
            <React.Fragment >
              <PostForm />
              <PostList />
            </React.Fragment>
          )}
        />
      </Routes>

    </Router>
  );
};

export default Index;
