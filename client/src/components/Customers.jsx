// Copyright (c) 2023 Sri Lakshmi Kanthan P
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { useEffect, useState } from "react";
import axios from "axios"
import Navbar from "./Navbar"

export default function Customers() {
    const [users,setUsers]= useState([])
    useEffect(()=>{
      axios.get("http://localhost:9000/getusers")
      .then(users=> setUsers(users.data))
      .catch(err=>console.log(err))
    },[])
  
  
    return (
        <div className="w-100 vh-100 d-flex justify-content-center align-items-center">
          <div> <Navbar/></div>
          <div className="w-50">
          <table className="table">
            <thead>
              <tr>
                <th>
                Name
                </th>
                <th>
                Email
                </th>
                <th>
                phone
                </th>
                <th>
                accountno
                </th>
                <th>
                ifscno
                </th>
                <th>
                accountbalance
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map(user=>{
                return <tr>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.accountno}</td>
                  <td>{user.ifscno}</td>
                  <td>{user.accountbalance}</td>
                </tr>
              })
              }
            </tbody>
          </table>
          </div>
        </div>
  
    );
}