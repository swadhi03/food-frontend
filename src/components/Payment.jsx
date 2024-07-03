import axios from 'axios'
import React, { useState } from 'react'
import NavBar from './Navbar'

const Payment = () => {
    const [data, fetchdata] = useState(
        {
            "cardnum": "",
            "cvv": "",
            "dob": "",
            "name": "",
            "price": ""
        }
    )
    const inputHandler = (event) => {
        fetchdata(
            {
                ...data, [event.target.name]: event.target.value
            }
        )
    }
    const readValue = () => {
        console.log(data)
        axios.post("http://localhost:8088/add", data).then(
            (response) => {
                console.log(response.data)
                if (response.data.status == "success") {
                    alert("Successfully Added")
                } else {
                    alert("Error")
                }
            }
        ).catch().finally()
    }
    return (
        <div>
            <NavBar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <h2><center><b>Payment Portal</b></center></h2>
                        <div className="card">
                            <form className="row g-3">
                                <div className="col-md-6">
                                    <label for="inputEmail4" className="form-label">Card Number</label>
                                    <input type="password" name="cardnum" id="" className="form-control" value={data.cardnum} onChange={inputHandler} />
                                </div>
                                <div className="col-md-6">
                                    <label for="inputPassword4" className="form-label">CVV</label>
                                    <input type="password" name="cvv" id="" className="form-control" value={data.cvv} onChange={inputHandler}/>
                                </div>
                                <div className="col-12">
                                    <label for="inputAddress" class="form-label">Expiry Date</label>
                                    <input type="text" name="dob" id="" className="form-control" placeholder="MM/YY" value={data.dob} onChange={inputHandler}/>
                                </div>
                                <div className="col-12">
                                    <label for="inputCity" className="form-label">Name on Card</label>
                                    <input type="text" className="form-control" id="inputCity" name="name" value={data.name} onChange={inputHandler}/>
                                </div>
                                <div className="col-12">
                                    <label for="inputCity" className="form-label">Ruppees</label>
                                    <input type="text" className="form-control" id="inputPrice" name="price" value={data.price} onChange={inputHandler}/>
                                </div>
                                <div className="col-12">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="gridCheck" />
                                        <label className="form-check-label" for="gridCheck">
                                            Access for payment
                                        </label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <button type="submit" className="btn btn-primary" onClick={readValue}>Pay Now</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment