import React, { useState } from 'react'
import './postmovie.css'

import axios from 'axios'

function postmovie() {

    const [moviename, setmoviename] = useState('');
    const [hero, sethero] = useState('');
    const [heroine, setheroine] = useState('');
    const [year, setyear] = useState('');
    const [rating, setrating] = useState('');
    const [genre, setgenre] = useState('');
    const [image, setimage] = useState('');
    const URL = 'http://127.0.01:3000/addmoviedata';

    const sendmoviedata = async () => {
        try {
            const jsonObject = await axios.post(URL, { moviename, hero, heroine, year, rating, genre, image })
            console.log("Movie Data sent to Backend is" + jsonObject.data);
        } catch (error) {
            console.log("Error is " + error);
        }


        console.log("MovieDetails are =>");
        console.log("Movie Name :" + moviename);
        console.log("Hero: " + hero);
        console.log("Heroine: " + heroine);
        console.log("Year: " + year);
        console.log("Rating: " + rating);
        console.log("Genre: " + genre);
        console.log("Image URL: " + image);

        var resultDiv = document.getElementById("resultpost");
        resultDiv.innerHTML = "Movie :" + moviename + " Details Saved Sucessfully";

    }




    return (
        <>
            <div className='container'>
                <div className="container-sm imgbox box-color">
                    <img src="https://designenlassen1.s3.amazonaws.com/5/543355/designs/18_537465.jpg" style={{ marginTop: '5px', marginBottom: '5px', borderRadius: '20px' }} height="auto" width="200px" alt="moviestore logo" />
                    <form>
                        <div className="mb-3 centerinputs">
                            <label htmlFor="moviename" className="form-label">Movie:</label>
                            <input type="text" className="form-control" id="moviename" onChange={(e) => setmoviename(e.target.value)} />
                        </div>
                        <div className="mb-3 centerinputs">
                            <label htmlFor="hero" className="form-label">Hero:</label>
                            <input type="text" className="form-control" id="hero" onChange={(e) => sethero(e.target.value)} />
                        </div>
                        <div className="mb-3 centerinputs">
                            <label htmlFor="heroine" className="form-label">Heroine:</label>
                            <input type="text" className="form-control" id="heroine" onChange={(e) => setheroine(e.target.value)} />
                        </div>
                        <div className="mb-3 centerinputs">
                            <label htmlFor="year" className="form-label">Release Year:</label>
                            <input type="number" className="form-control" id="year" onChange={(e) => setyear(parseInt(e.target.value))} />
                        </div>
                        <div className="mb-3 centerinputs">
                            <label htmlFor="rating" className="form-label">Rating:</label>
                            <input type="text" className="form-control" id="rating" onChange={(e) => setrating(parseInt(e.target.value))} />
                        </div>
                        <div className="mb-3 centerinputs">
                            <label htmlFor="genre" className="form-label">Genre:</label>
                            <input type="text" className="form-control" placeholder='seperate genre by comma' id="genre" onChange={(e) => setgenre(e.target.value)} />
                        </div>
                        <div className="mb-3 centerinputs">
                            <label htmlFor="image" className="form-label">Image Url:</label>
                            <input type="text" className="form-control" placeholder='Insert Image url' id="image" onChange={(e) => setimage(e.target.value)} />
                        </div>
                        <button type="button" onClick={
                            sendmoviedata} className="btn btn-primary">Save Movie Details</button>
                    </form>

                </div>
                <div className="mt-3">
                    <h2 id="resultpost"></h2>
                </div>
            </div>
        </>
    )
}

export default postmovie