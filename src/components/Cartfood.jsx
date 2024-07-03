import axios from 'axios'
import React, { useState } from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'


const CartFood = () => {
  const [data, changeData] = useState(
    {
      "username": ""
    }
  )
  const [result, changeResult] = useState([])
  const inputHandler = (event) => {
    changeData({ ...data, [event.target.name]: event.target.value })
  }

  const deleteBus = (id) => {
    let input = { "_id": id }
    axios.post("", input).then(
      (response) => {
        console.log(response.data)
        if (response.data.status == "success") {
          alert("Deleted Successfully")
        }
        else {
          alert("Failed")
        }
      }
    ).catch().finally()
  }


  const readValue = () => {
    console.log(data)
    axios.post("", data).then(
      (response) => {
        console.log(response.data)
        changeResult(response.data)
      }
    ).catch(
      (error) => {
        alert(error)
      }
    ).finally()
  }
  return (
    <div>
      <div className="container">
        <Navbar />
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">User Name</label>
                <input type="text" className="form-control" name='username' value={data.username} onChange={inputHandler} />
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <button className="btn btn-success" onClick={readValue}>Search</button>
              </div>
            </div>
            <div className="row">
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">Index</th>
                      <th scope="col">User Name</th>
                      <th scope="col">Product Name</th>
                      <th scope="col">Price</th>
                      <th scope="col">Nos</th>
                    </tr>
                  </thead>
                  <tbody>
                    {result.map(
                      (value, index) => {
                        return <tr>
                          <th scope="row">{index}</th>
                          <td>{value.username}</td>
                          <td>{value.name}</td>
                          <td>{value.price}</td>
                          <td>{value.no}</td>
                          <td>
                            <button className="btn btn-danger" onClick={() => { deleteBus(value._id) }}>Delete</button>
                          </td>
                        </tr>
                      }
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <Link to="/payment" className="btn btn-primary">Buy Now</Link>
      </div>
    </div>
  )
}

export default CartFood