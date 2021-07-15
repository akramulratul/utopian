import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { adminUserListAction } from "../../../Redux/Actions/adminDashboardAction";

const UsersTop = () => {
  const dispatch = useDispatch()


  const allUserList = useSelector(state => state.adminUserList)
  console.log(allUserList.adminInfo);
  const { loading, error, userListInfo } = allUserList
  console.log(userListInfo);
  const [isloading, setIsloading] = useState(true);
  const stopLoading = () => {
    setIsloading(false);
  };

  useEffect(() => {
    dispatch(adminUserListAction())
    stopLoading();
  }, [dispatch])

  return (
    <>
      {isloading ? (
        <div className="d-flex justify-content-center text-primary">
          <div className="spinner-border" role="status">
            <span className="visually-hidden"></span>
          </div>
        </div>
      ) : loading ? (
        <div className="d-flex justify-content-center text-primary">
          <div className="spinner-border" role="status">
            <span className="visually-hidden"></span>
          </div>
        </div>
      ) : (
        <div className="bg-white d-flex justify-content-between rounded mt-3 ml-3 mr-3">
          <div className="left-content d-flex align-items-center ">
            <div>
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb bg-white">
                  <li class="breadcrumb-item">
                    <a href="/admin/dashboard">Dashboard</a>
                  </li>
                  <li class="breadcrumb-item active" aria-current="page">
                    Users
                  </li>
                </ol>
              </nav>
            </div>
          </div>
          <div className="right-content d-flex  align-items-center m-3 p-2 border-left">

            <div className="px-3">
              <h2>{userListInfo.data.length}</h2>
              <small>Total Users</small>
            </div>

            <div className="px-3">
              <Button
                className="admin-button btn btn-brand w-100 py-2 mt-2"
                type="button"
              >
                Dashboard
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UsersTop;
