import React from 'react'

const DashBoard = () => {
  return (
    <div>
        <div className="container">
            <div className="row">
                <col className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12" />
            </div>
            <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active"> 
      <img src="https://fisat.ac.in/wp-content/uploads/2022/04/1614594395_Canteen-e1658138234624.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://media.istockphoto.com/id/1457979959/photo/snack-junk-fast-food-on-table-in-restaurant-soup-sauce-ornament-grill-hamburger-french-fries.webp?b=1&s=170667a&w=0&k=20&c=A_MdmsSdkTspk9Mum_bDVB2ko0RKoyjB7ZXQUnSOHl0=" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://i0.wp.com/myenglishteacher.co.uk/wp-content/uploads/2023/01/pexels-photo-1092730.jpeg?resize=750%2C563&ssl=1" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        </div>
    </div>
  )
}

export default DashBoard