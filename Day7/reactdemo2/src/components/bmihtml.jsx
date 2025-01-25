import React, { useState } from 'react'
import './bmi.css'

function bmicalculate() {

    const [weight, setweight] = useState(0);
    const [height, setheight] = useState(0);
    const [bmi, setbmi] = useState(0);

    const storeweight = (e) => {
        setweight(parseFloat(e.target.value));
        console.log(weight);
    }
    const storeheight = (e) => {
        setheight(parseFloat(e.target.value));
        console.log(height);
    }
    const addition = (e) => {
        setbmi(weight / (height) ** 2);
        console.log("BMI is " + bmi);

        var img = document.createElement('img');
        var status;

        var existingImage = document.getElementById("bmiImage");
        if (existingImage) {
            existingImage.remove();
        }

        if (bmi < 18.5) {
            status = "Under weight";
            img.src = "https://cdn3.iconfinder.com/data/icons/people-emoji/50/Skinny-1024.png";
        }
        else if (bmi >= 18.5 && bmi <= 24.9) {
            status = "Normal weight";
            img.src = "https://static.thenounproject.com/png/687023-200.png";
        }
        else if (bmi >= 25 && bmi <= 29.9) {
            status = "Over weight";
            img.src = 'https://tse2.mm.bing.net/th?id=OIP.5PjvBl7iOac-F4DJ6vt43QAAAA&pid=Api&P=0&h=180';
        }
        else {
            status = "Obese";
            img.src = 'https://png.pngtree.com/png-vector/20230728/ourmid/pngtree-obesity-clipart-cartoon-cartoon-fat-man-on-a-white-background-vector-png-image_6811138.png';
        }

        var resultdiv = document.getElementById("result");
        resultdiv.innerHTML = "BMI is " + bmi + "\nPerson is " + status;

        img.height = 300;
        img.id = "bmiImage";
        var resultdiv = document.getElementById("resultimg");
        resultdiv.appendChild(img);


        return (
            <>
                <div className='container'>
                    <div className="centerbox">
                        <div className="container-sm imgbox box-color">
                            <img src="https://www.tataaia.com/content/dam/tataaialifeinsurancecompanylimited/calculator/life-planning-tools/bmi-calculator/banner-image-bmi.png"
                                style="margin-top: 
        10px;border-radius: 20px;" weight="auto" height="250px" />
                            <form>
                                <div className="mb-3 ">
                                    <label for="weight" className="form-label">Enter Weight(kg)</label>
                                    <input type="number" className="form-control" id="weight" />
                                </div>
                                <div className="mb-3 ">
                                    <label for="height" className="form-label">Enter height(m)</label>
                                    <input type="number" className="form-control" id="height" />
                                </div>
                                <button type="button" onclick="
            bmi()" className="btn btn-primary">Calculate BMI</button>
                            </form>
                            <div className="mt-3">
                                <h2 id="result"></h2>
                            </div>
                        </div>
                        <div id="resultimg"></div>
                    </div>

                </div>
            </>
        )
    }
}

export default bmicalculate