// Copyright (c) 2023 Sri Lakshmi Kanthan P
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { useEffect, useState } from "react";
import axios from "axios"
import Navbar from "./Navbar"

export default function Transfer() {
    const OnTransfer = (e) => {
        e.preventDefault()
        const from = document.getElementById("from").value
        const to = document.getElementById("to").value
        const amount = document.getElementById("amount").value
        axios.post("http://localhost:9000/transfer", { from, to, amount })
            .then(res => window.location.href = "/history")
            .catch(err => window.alert(err))
    }

    return (
        <><Navbar />
        <form action="" id="transfer">
            <div>
            <label>From</label>
            <input type="text" name="from" id="from" />
            </div>
            <div>
            <label>To</label>
            <input type="text" name="to" id="to" />
            </div>
            <div>
            <label>Amount</label>
            <input type="text" name="amount" id="amount" />
            </div>
            <div>
            <button type="submit" onClick={OnTransfer}>Transfer</button>
            </div>
        </form></>
    )
}