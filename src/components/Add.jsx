import axios from 'axios'
import React, { useState } from 'react'

const Add = () => {
    const [data,fetchdata]=useState(
        {
            "name":"",
            "price":"",
            "no":"",
            "image":""
        }
    )
const inputHandler=(event)=>{
    fetchdata(
        {
            ...data,[event.target.name]:event.target.value
        }
    )}
const readValue=()=>{
    console.log(data)
    axios.post("http://localhost:8088/add",data).then(
        (response)=>{
            console.log(response.data)
            if(response.data.status=="success"){
                alert("Successfully Added")
            }else{
                alert("Error")
            }
        }
    ).catch().finally()
}
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Name</label>
                            <input type="text" className="form-control" name='name' value={data.name} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Price</label>
                            <input type="text" className="form-control" name='price' value={data.price} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">No</label>
                            <input type="text" className="form-control" name='no' value={data.no} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Image</label>
                            <input type="file" className="form-control" name='image' value={data.image} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button className="btn btn-success" onClick={readValue} >Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Add