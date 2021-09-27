import React from "react";
import { Pagination } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function Paginate({
  itemCount,
  lastPage = "true",
  pageNo,
  pageSize,
  totalItems,
  totalPages,
}) {
  return (
    pageNo > 1 && (
      <Pagination>
        {[...Array(pageNo).keys()].map((x) => (
          <LinkContainer
            key={x + 1}
            to={
              !lastPage
                ? `/?keyword=${lastPage}&page=${x + 1}`
                : `/admin/productList/?keyword=${lastPage}&page=${x + 1}`
            }
          >
            <Pagination.Item active={x + 1 === pageNo}>{x + 1}</Pagination.Item>
          </LinkContainer>
        ))}
      </Pagination>
    )
  );
}

export default Paginate;
