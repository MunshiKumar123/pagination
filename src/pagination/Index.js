import axios from "axios";
import React, { useEffect, useState } from "react";
import Post from "./component/Post";
import Pagination from "./component/Pagination";
const Index = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const fetch = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((resp) => {
        console.log(resp.data);
        setPosts(resp.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetch();
  }, []);

  //   Get current posts
  debugger;
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <Post posts={currentPosts} loading={loading} />
            <Pagination
              postsPerPage={postsPerPage}
              totalPosts={posts.length}
              paginate={paginate}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
