import React from "react";

const Post = ({ posts, loading }) => {
  return (
    <>
      <table className="table mt-5">
        <tbody>
          {posts?.map((item, index) => {
            return (
              <>
                <tr key={index}></tr>
                <td>{item.userId}</td>
                <td>{item.title}</td>
              </>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Post;
