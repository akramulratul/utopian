import React from "react";
import { Link } from "react-router-dom";

const UserSubnav = ({ firstOption }) => {
  return (
    <div className="row m-0 p-0">
      <div className="col-lg-4 m-0  p-0">
        <Link to={firstOption.link}>
          <div className="profile-nav border text-center py-3">
            <small>
              <b>Profile</b>
            </small>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default UserSubnav;
