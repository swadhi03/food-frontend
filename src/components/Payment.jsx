import React from 'react'

const Payment = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <form className="row g-3">
                            <div className="col-md-6">
                                <label for="inputEmail4" className="form-label">Card Number</label>
                                <input type="password" name="" id="" className="form-control" />
                            </div>
                            <div className="col-md-6">
                                <label for="inputPassword4" className="form-label">CVV</label>
                                <input type="password" name="" id="" className="form-control" />
                            </div>
                            <div className="col-12">
                                <label for="inputAddress" class="form-label">Expiry Date</label>
                                <input type="text" name="" id="" className="form-control" placeholder="MM/YY"/>
                            </div>
                            <div className="col-12">
                                <label for="inputCity" className="form-label">Name on Card</label>
                                <input type="text" className="form-control" id="inputCity"/>
                            </div>
                            <div className="col-12">
                                <label for="inputCity" className="form-label">Ruppees</label>
                                <input type="text" className="form-control" id="inputPrice"/>
                            </div>
                            <div className="col-12">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="gridCheck"/>
                                        <label className="form-check-label" for="gridCheck">
                                            Access for payment
                                        </label>
                                </div>
                            </div>
                            <div className="col-12">
                                <button type="submit" className="btn btn-primary">Pay Now</button>
                            </div>
                        </form>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment