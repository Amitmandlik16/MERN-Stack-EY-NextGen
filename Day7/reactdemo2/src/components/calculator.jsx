import React, { useState } from 'react'
import './calculator.css'

function calculator() {

    const [a, seta] = useState(0);
    const [b, setb] = useState(0);
    const [res, setres] = useState(0);

    const storea = (e) => {
        seta(parseFloat(e.target.value));
        console.log(a);
    }
    const storeb = (e) => {
        setb(parseFloat(e.target.value));
        console.log(b);
    }
    const addition = (e) => {
        var c = a + b;
        setres(c);
        console.log("Addition is " + c);
        var resultDiv = document.getElementById("result");
        resultDiv.innerHTML = "Addition is " + c;
    }
    const subtraction = (e) => {
        var c = a - b;
        setres(c);
        console.log("Subtraction is " + c);
        var resultDiv = document.getElementById("result");
        resultDiv.innerHTML = "Subtraction is " + c;
    }
    const multiplication = (e) => {
        var c = a * b;
        setres(c);
        console.log("Multiplication is " + c);
        var resultDiv = document.getElementById("result");
        resultDiv.innerHTML = "Multiplication is " + c;
    }
    const division = (e) => {
        var c = a / b;
        setres(c);
        console.log("Division is " + c);
        var resultDiv = document.getElementById("result");
        resultDiv.innerHTML = "Division is " + c;
    }

    return (
        <>
            <div className='container'>
                <h1 className="p-3 mb-2 bg-secondary text-white">Calculator</h1>
                <div className="container-sm imgbox box-color">
                    <img src="https://th.bing.com/th/id/R.16bfb7f09821f537d080870f18d2424d?rik=Qn1fOU9QsvlRNQ&riu=http%3a%2f%2fwww.vpcsbd.com%2fwp-content%2fuploads%2f2013%2f09%2flate-fine.jpg&ehk=E%2fvB0Wj1uKWXBu79hBj3e6gswgdAfAVkh1IzOJtx0so%3d&risl=&pid=ImgRaw&r=0"
                        style={{ marginTop: '10px', borderRadius: '60px' }} height="200px" width="auto"></img>
                    <form>
                        <div className="mb-3 ">
                            <label htmlFor="a" className="form-label">Enter First Number</label>
                            <input type="number" className="form-control" id="a" onChange={storea}></input>
                        </div>
                        <div className="mb-3 ">
                            <label htmlFor="b" className="form-label">Enter Second Number</label>
                            <input type="number" className="form-control" id="b" onChange={storeb}></input>
                        </div>
                        <div className='buttonbox'>
                            <button type="button" onClick={
                                addition} className="btn btn-primary">Add</button>
                            <button type="button" onClick={subtraction} className="btn btn-primary">Subtract</button>
                            <button type="button" onClick={multiplication} className="btn btn-primary">Multiply</button>
                            <button type="button" onClick={division} className="btn btn-primary">Divide</button>
                        </div>
                    </form>
                    <div className="mt-3">
                        <h2 id="result"></h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default calculator