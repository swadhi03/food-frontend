import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NavBar from './Navbar'
import { Link } from 'react-router-dom'

const FoodViews = () => {
    const[data,changeData]=useState([])
    const fetchData=()=>{
        axios.post("http://localhost:8088/foodview").then(
            (response)=>{
                console.log(response.data)
                changeData(response.data)
            }
        ).catch(
            (error) => {
                alert(error.message)
            }
        ).finally()
    }
    useEffect(()=>{fetchData() },[])
    return (
        <div>
            <NavBar/>
            <div className="container">
                <div className="row">
                    <h2><center><b>Welcome to the Menu</b></center></h2>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                        {
                            data.map(
                                (value,index)=>{
                                    return <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                    <div className="card">
                                    <img src={value.image} className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                      <p className="card-text">Name:{value.name}</p>
                                      <p className="card-text">price:{value.price}</p>
                                      <p className="card-text">No's:{value.no}</p>
                                      <Link to="/payment" className="btn btn-primary">Buy Now</Link>
                                    </div>
                                  </div>
                                </div>
                                
                                }
                            )
                        }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FoodViews