import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import "./Tree.css";

const Tree = ({ data = [] }) => {
  return (
    <div className="d-tree">
      <ul className="d-flex d-tree-container flex-column">
        {data.map((tree) => (
          <TreeNode node={tree} />
        ))}
      </ul>
    </div>
  );
};

const TreeNode = ({ node }) => {
  const [childVisible, setChildVisiblity] = useState(false);

  const hasChild = node.nextGens ? true : false;

  return (
    <li className="d-tree-node  bg-white px-3 py-2 my-1 rounded border-0">
      <div className="d-flex" onClick={(e) => setChildVisiblity((v) => !v)}>
        {hasChild && (
          <div
            className={`d-inline d-tree-toggler ${
              childVisible ? "active" : ""
            }`}
          >
            <FontAwesomeIcon icon={faCaretRight} />
          </div>
        )}

        <div className="col pl-4 d-tree-head">
          <p>
            <b>{node.username}</b>
          </p>
          <small className="text-secondary">{node.phoneNo}</small>
        </div>
      </div>

      {hasChild && childVisible && (
        <div className="d-tree-content pl-5">
          <ul className="d-flex d-tree-container flex-column">
            <Tree data={node.nextGens} />
          </ul>
        </div>
      )}
    </li>
  );
};

export default Tree;
