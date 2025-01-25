import React, { useState } from 'react'
import './kmtomiles.css'

function kmtomiles() {

    const [km, setkm] = useState(0);
    const [miles, setmiles] = useState(0);

    const storekm = (e) => {
        setkm(parseFloat(e.target.value));
        console.log(a);
    }

    const convertkmtomiles = (e) => {
        console.log("Kilometers are " + km);
        var miles;
        const m = 0.621371;
        miles = km * m;
        console.log("Miles are " + miles);
        var resultDiv = document.getElementById("result");
        resultDiv.innerHTML = "Miles are " + miles;

    }


    return (
        <>
            <div className='container'>
                <div className="container-sm imgbox box-color">
                    <img src="https://fullequations.com/wp-content/uploads/2023/04/mph-to-kph-min.png" style={{ marginTop: '10px', borderRadius: '20px' }} height="200px" width="auto" alt="Conversion Example" />
                    <form>
                        <div className="mb-3 ">
                            <label htmlFor="km" className="form-label">Enter kM</label>
                            <input type="number" className="form-control" id="km" onChange={storekm} />
                        </div>
                        <button type="button" onClick={
                            convertkmtomiles} className="btn btn-primary">Convert to Miles</button>
                    </form>
                    <div className="mt-3">
                        <h2 id="result"></h2>
                    </div>
                </div>

            </div>
        </>
    )
}

export default kmtomiles