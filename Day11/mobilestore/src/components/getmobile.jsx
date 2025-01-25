import React, { useState,useEffect } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import './getmobile.css'

function getmobile() {

    const [news, setnews] = useState([]);
    useEffect(() => {
      axios
        .get("http://127.0.0.1:3000/getmobiledata")
        .then((res) => {
          // handle success
          console.log(res.data);
          setnews(res.data);
          //  console.log(res);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .finally(function () {
          // always executed
        });
    }, []);
    return ( 
        <>
        <div className="container my-5">
          <input type="button" value="Refersh Mobile Details" onClick='http://localhost:5173/'/>
          <div className="row text-center">
            {news.map((val) => {
              return (
                <div className="col my-3">
                  <div className="card" style={{ width: "18rem" }}>
                    <img src={val.image} className="card-img-top imgsize" alt="Image not available" />
                    <div className="card-body">
                      <h5 className="card-title">{val.brand}</h5>
                      <p className="card-text">{val.model}</p>
                      <p className="card-text">{val.year}</p>
                      <p className="card-text">{val.price}</p>
                      <p className="card-text">{val.feautres}</p>
                      <a
                        href={val.rating}
                        target="_blank"
                        className="btn btn-primary"
                      >
                        Know More
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </>
  )
}

export default getmobile