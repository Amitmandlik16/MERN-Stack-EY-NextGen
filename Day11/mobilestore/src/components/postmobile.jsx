import React, { useState } from 'react'
import './postmobile.css'

import axios from 'axios'

function postmobile() {

    const [brand, setbrand] = useState('');
    const [model, setmodel] = useState('');
    const [year, setyear] = useState('');
    const [price, setprice] = useState('');
    const [feautres, setfeautres] = useState('');
    const [image, setimage] = useState('');
    const URL = 'http://127.0.01:3000/addmobiledata';

    const sendmoviedata = async () => {
        try {
            const jsonObject = await axios.post(URL, { brand, model,year, price, feautres, image })
            console.log("Mobile Data sent to Backend is" + jsonObject.data);
        } catch (error) {
            console.log("Error is " + error);
        }


        console.log("MobileDetails are =>");
        console.log("Mobile Name :" + brand);
        console.log("Model: " + model);
        console.log("Year: " + year);
        console.log("Rating: " + price);
        console.log("Genre: " + feautres);
        console.log("Image URL: " + image);

        var resultDiv = document.getElementById("resultpost");
        resultDiv.innerHTML = "Mobile :" + brand + " Details Saved Sucessfully";

    }




    return (
        <>
            <div className='container'>
                <div className="container-sm imgbox box-color">
                    <img src="https://img.freepik.com/premium-vector/mobile-store-logo-template-design_316488-1363.jpg?w=1380" style={{ marginTop: '5px', marginBottom: '5px', borderRadius: '20px' }} height="auto" width="200px" alt="moviestore logo" />
                    <form>
                        <div className="mb-3 centerinputs">
                            <label htmlFor="brand" className="form-label">Mobile Brand:</label>
                            <input type="text" className="form-control" id="brand" onChange={(e) => setbrand(e.target.value)} />
                        </div>
                        <div className="mb-3 centerinputs">
                            <label htmlFor="model" className="form-label">Model:</label>
                            <input type="text" className="form-control" id="model" onChange={(e) => setmodel(e.target.value)} />
                        </div>
                        <div className="mb-3 centerinputs">
                            <label htmlFor="year" className="form-label">Release Year:</label>
                            <input type="number" className="form-control" id="year" onChange={(e) => setyear(parseInt(e.target.value))} />
                        </div>
                        <div className="mb-3 centerinputs">
                            <label htmlFor="price" className="form-label">Price:</label>
                            <input type="text" className="form-control" id="price" onChange={(e) => setprice(parseInt(e.target.value))} />
                        </div>
                        <div className="mb-3 centerinputs">
                            <label htmlFor="feautres" className="form-label">Feautres:</label>
                            <input type="text" className="form-control" placeholder='seperate feautres by comma' id="feautres" onChange={(e) => setfeautres(e.target.value)} />
                        </div>
                        <div className="mb-3 centerinputs">
                            <label htmlFor="image" className="form-label">Image Url:</label>
                            <input type="text" className="form-control" placeholder='Insert Image url' id="image" onChange={(e) => setimage(e.target.value)} />
                        </div>
                        <button type="button" onClick={
                            sendmoviedata} className="btn btn-primary">Save Mobile Details</button>
                    </form>

                </div>
                <div className="mt-3">
                    <h2 id="resultpost"></h2>
                </div>
            </div>
        </>
    )
}

export default postmobile