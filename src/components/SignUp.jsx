import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
    const [data, changeData]=useState([])
    const inputHandler=(event)=>{
        changeData({...data, [event.target.name]:event.target.value})
    }
    const readValue=()=>{
        console.log(data)
        axios.post("http://localhost:8088/signup",data).then(
            (response)=>{
                console.log(response.data)
                if (response.data.status==="success") 
                    {
                    alert("User signedup successfully")
                    } 
                else 
                {
                    alert("User didnot signedup ")
                }
            }
        ).catch(
            (error)=>{
                console.log(error.message)
                alert(error.message)
            }
        ).finally()
    }
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <h2><center><b>Lets's SignUp</b></center></h2>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Name:</label>
                            <input type="text" className="form-control" name="name" value={data.name} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Admission No:</label>
                            <input type="text" className="form-control" name="admno" value={data.admno} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Email-ID:</label>
                            <input type="email" className="form-control" name="email" value={data.email} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Course:</label>
                            <select name="course" id="" className="form-control" value={data.course} onChange={inputHandler}>
                                <option value=""></option>
                                <option value="MCA">MCA</option>
                                <option value="MBA">MBA</option>
                                <option value="M.Tech">M.Tech</option>
                                <option value="B.Tech EEE">B.Tech EEE</option>
                                <option value="B.Tech CS">B.Tech CS</option>
                                <option value="B.Tech Mech">B.Tech Mec</option>
                                <option value="B.Tech Civil">B.Tech Civil</option>
                            </select>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Phone No:</label>
                            <input type="text" className="form-control" name="phone" value={data.phone} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">DOB:</label>
                            <input type="date" name="dob" id="" className="form-control" value={data.dob} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Password:</label>
                            <input type="password" name="password" id="" className="form-control" value={data.password} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Confirm Password:</label>
                            <input type="password" name="cfmpassword" id="" className="form-control" value={data.cfmpassword} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button className="btn btn-success" onClick={readValue}>SignUp</button>
                        </div>
                        <Link to="/signin">Existing User</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignUp