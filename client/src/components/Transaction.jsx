// Copyright (c) 2023 Sri Lakshmi Kanthan P
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { useEffect, useState } from "react";
import axios from "axios"
import Navbar from "./Navbar"

export default function Transaction() {
    const [trans,setTrans]= useState([])
    useEffect(()=>{
      axios.get("http://localhost:9000/history")
      .then(users=> setTrans(users.data))
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
                From
                </th>
                <th>
                To
                </th>
                <th>
                Amount
                </th>
                <th>
                Date
                </th>
              </tr>
            </thead>
            <tbody>
              {trans.map(t=>{
                return <tr>
                  <td>{t.from.name}</td>
                  <td>{t.to.name}</td>
                  <td>{t.amount}</td>
                  <td>{t.date}</td>
                </tr>
              })
              }
            </tbody>
          </table>
          </div>
        </div>  
    );
}
