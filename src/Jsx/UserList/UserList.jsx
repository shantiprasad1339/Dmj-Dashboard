import React, { useEffect, useState } from "react";
import "./UserList.css";
import MainCategory from "../../Dashboard/MainCategory/MainCategory";
import { NavLink } from "react-router-dom";
import { Pagination } from "@mui/material"; ``
import axios from "axios";



const url = "https://api.diwamjewels.com/DMJ";


function UserList() {
  const handlePagination = (e, page) => {
    setPageSize(page - 1);
  };

  useEffect(() => {
    userApi();
  }, []);

  const [userData, setUserData] = useState([]);

  function userApi() {
    axios.get(url + '/api/v1/user/list?pageNumber=1')
      .then((res) => {

        setUserData(res.data.data.order);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
      <MainCategory>
        <div className="pagetitle">
          <h1>My User List</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="breadcrumb-item active">My User List</li>
            </ol>
          </nav>
        </div>
        <div className="col-12">
          <div className="card top-selling overflow-auto">
            <div className="card-body pb-0">

              <div className="table-responsive">
                <table className="w-100">
                  <tr>
                    <th scope="col " style={{fontSize:'20px'}}>S No.</th>
                    <th scope="col " style={{fontSize:'20px'}}>Name</th>
                    <th scope="col " style={{fontSize:'20px'}}>Email</th>
                    <th scope="col " style={{fontSize:'20px'}}>Number</th>
                    <th scope="col " style={{fontSize:'20px'}}>Address</th>
                  </tr>
                  {userData.map((item, index) => {
                    console.log(item.addressModels)
                    return (
                      <tr key={index}>
                        <td className="fw-bold">{index + 1}</td>
                        <td className="price">{item.userName}</td>
                        <td className="price">{item.email}</td>
                        <td className="price">{item.phoneNumber}</td>
                        <td className="price">
                          {
                            item.addressModels.length === 0 ? '304, near bus stand jaising pura '
                              :
                              item.addressModels[0].area
                          }
                        </td>
                      </tr>
                    )
                  })}


                </table>
              </div>


            </div>
          </div>
        </div>
        <div
          className="container d-flex align-center"
          style={{ justifyContent: "center" }}
        >
          <Pagination
            color="primary"
            onChange={handlePagination}
          />
        </div>
      </MainCategory>


    </>
  );
}

export default UserList;