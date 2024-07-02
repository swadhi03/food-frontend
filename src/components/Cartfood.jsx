import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Cartfood = () => {

  const [data, changeData] = useState([])
  const fetchData = () => {
    axios.post("http://localhost:8088/Cart", data).then(

      (response) => {

        console.log(response.data)
        changeData(response.data)
      }

    ).catch().finally()

  }

  useEffect(() => { fetchData() }, [])


  return (
    <div>

      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
          <h2><center><b>Let's See What we have choose</b></center></h2>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">index</th>
                  <th scope="col">name</th>
                  <th scope="col">price</th>
                  <th scope="col">no</th>
                </tr>
              </thead>
              <tbody>
                {data.map(
                  (value, index) => {
                    return <tr>
                      <th scope="row">{index + 1}</th>
                      <td>{value.name}</td>
                      <td>{value.price}</td>
                      <td>{value.no}</td>
                    </tr>

                  }
                )}

              </tbody>
            </table>

          </div>
        </div>
      </div>

    </div>
  )
}

export default Cartfood