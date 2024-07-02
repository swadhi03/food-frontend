import axios from 'axios'
import React, { useState } from 'react'
import NavBar from './Navbar'
import { Link } from 'react-router-dom'

const SignIn = () => {
    const [data, changeData]=useState([])
    const inputHandler=(event)=>{
        changeData({...data, [event.target.name]:event.target.value})
    }
    const readValue=()=>{
        console.log(data)
        axios.post("http://localhost:8088/signin",data).then(
            (response)=>{
                console.log(response.data)
                if (response.data.status=="success") {
                    alert("User signedup successfully")
                } else {
                    alert("User didnot signedup ")
                }
            }
        ).catch()
    }
  return (
    <div>
        <NavBar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <h2><center><b>SignIn</b></center></h2>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Email-ID</label>
                            <input type="email" name="email" id="" className="form-control" value={data.email} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Password:</label>
                            <input type="text" name="password" className="form-control" value={data.password} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button className="btn btn-success" onClick={readValue}>SignIn</button>
                        </div>
                        <Link to="/signup">New User</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignIn