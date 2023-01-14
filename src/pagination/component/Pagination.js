import React from "react";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    debugger;
    pageNumbers.push(i);
  }
  console.log(postsPerPage, "--postsPerPage--");
  console.log(totalPosts, "---totalPosts---");
  console.log(paginate, "--paginate----");
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <nav>
              <ul className="pagination">
                {pageNumbers.map((number) => (
                  <li key={number} className="page-item">
                    <a
                      onClick={() => paginate(number)}
                      href="!#"
                      className="page-link"
                    >
                      {number}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pagination;
