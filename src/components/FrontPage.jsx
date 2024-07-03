import React from 'react'
import NavBar from './Navbar'

const FrontPage = () => {
  return (
    <div>
        <NavBar/>
      <div className="container">
        <div className="row">
          <col className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12" />
        </div>
        <div id="carouselExample" className="carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="https://urthfitness.com.au/carbon/wp-content/uploads/2016/07/Fri22_FridayFoodies-1200x600.jpg" class="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://mms.businesswire.com/media/20220808005132/en/1536956/5/Benson-Hill-ADM-2C.jpg" class="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://dynaimage.cdn.cnn.com/cnn/c_fill,g_auto,w_1200,h_675,ar_16:9/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F191101102722-vegan-diet-stock.jpg" class="d-block w-100" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default FrontPage