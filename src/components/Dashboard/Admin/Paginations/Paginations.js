import React, { useState } from "react";
import ReactPaginate from "react-paginate";

const Paginations = () => {
  // const [users] = useState(0, 15);
  // const [setPageNumber] = useState(0);

  // const usersPerPage = 10;
  // const pagesVisited = pageNumber * usersPerPage;

  //   const displayUsers = users
  //     .slice(pagesVisited, pagesVisited + usersPerPage)
  //     .map((user) => {
  //       return (
  //         <div className="user">
  //           <h3>{user.firstName}</h3>
  //         </div>
  //       );
  //     });
  // const pageCount = Math.ceil(users.length / usersPerPage);
  // const changePage = ({ selected }) => {
  //   setPageNumber(selected);
  // };
  return (
    <div className="App">
      <ReactPaginate
        previousLabel={"Previous"}
        nextLable={"Next"}
        // pageCount={pageCount}
        // onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </div>
  );
};
export default Paginations;
