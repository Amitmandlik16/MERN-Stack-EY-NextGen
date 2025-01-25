import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './MobileStore.css';


function MobileStore() {
  return (
    <>
    
    <nav className="navbar navbar-expand-lg bg-body-tertiary  ">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">Mobile Store</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
                aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Features</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Pricing</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">About Us</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Contact Us</a>
                    </li>
                </ul>
                <span className="navbar-text">
                </span>
            </div>
        </div>
    </nav>

    <div className="carousel1">
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item">
                    <img src="https://images.samsung.com/in/smartphones/galaxy-s23-ultra/buy/DM3-web-7.jpg?imbypass=true"
                        className="d-block w-100" alt="..."></img>
                </div>
                <div className="carousel-item active">
                    <img src="https://images.samsung.com/in/smartphones/galaxy-s23-ultra/buy/DM3-web-1.jpg?imbypass=true"
                        className="d-block w-100" alt="..."></img>
                </div>
                <div className="carousel-item">
                    <img src="https://images.samsung.com/in/smartphones/galaxy-s23-ultra/buy/DM3-web-3.jpg?imbypass=true"
                        className="d-block w-100" alt="..."></img>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </div>


    <div className="row row-cols-1 row-cols-md-5 g-4 ">
        <div className="col">
            <div className="card bg-info.bg-gradient">
                <img src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/u/a/l/-original-imagzm8qrfdmhy8z.jpeg?q=70"
                    className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title">SAMSUNG Galaxy S23 Ultra 5G</h5>
                    <p className="card-text">(Phantom Black, 256 GB) (12 GB RAM)#JustHere</p>
                </div>
                <div className="card-footer">
                    <div className="d-flex flex-row d-grid gap-2 row-6 mx-auto center">
                        <p className="font-monospace">₹80,000 <del>₹1,49,999</del></p>
                        <button className="btn btn-primary" type="button">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="col">
            <div className="card bg-info.bg-gradient">
                <img src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/u/a/l/-original-imagzm8qrfdmhy8z.jpeg?q=70"
                    className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title">SAMSUNG Galaxy S23 Ultra 5G</h5>
                    <p className="card-text">(Phantom Black, 256 GB) (12 GB RAM)#JustHere</p>
                </div>
                <div className="card-footer">
                    <div className="d-flex flex-row d-grid gap-2 row-6 mx-auto center">
                        <p className="font-monospace">₹80,000 <del>₹1,49,999</del></p>
                        <button className="btn btn-primary" type="button">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="col">
            <div className="card bg-info.bg-gradient">
                <img src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/u/a/l/-original-imagzm8qrfdmhy8z.jpeg?q=70"
                    className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title">SAMSUNG Galaxy S23 Ultra 5G</h5>
                    <p className="card-text">(Phantom Black, 256 GB) (12 GB RAM)#JustHere</p>
                </div>
                <div className="card-footer">
                    <div className="d-flex flex-row d-grid gap-2 row-6 mx-auto center">
                        <p className="font-monospace">₹80,000 <del>₹1,49,999</del></p>
                        <button className="btn btn-primary" type="button">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="col">
            <div className="card bg-info.bg-gradient">
                <img src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/u/a/l/-original-imagzm8qrfdmhy8z.jpeg?q=70"
                    className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title">SAMSUNG Galaxy S23 Ultra 5G</h5>
                    <p className="card-text">(Phantom Black, 256 GB) (12 GB RAM)#JustHere</p>
                </div>
                <div className="card-footer">
                    <div className="d-flex flex-row d-grid gap-2 row-6 mx-auto center">
                        <p className="font-monospace">₹80,000 <del>₹1,49,999</del></p>
                        <button className="btn btn-primary" type="button">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="col">
            <div className="card bg-info.bg-gradient">
                <img src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/u/a/l/-original-imagzm8qrfdmhy8z.jpeg?q=70"
                    className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title">SAMSUNG Galaxy S23 Ultra 5G</h5>
                    <p className="card-text">(Phantom Black, 256 GB) (12 GB RAM)#JustHere</p>
                </div>
                <div className="card-footer">
                    <div className="d-flex flex-row d-grid gap-2 row-6 mx-auto center">
                        <p className="font-monospace">₹80,000 <del>₹1,49,999</del></p>
                        <button className="btn btn-primary" type="button">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="col">
            <div className="card bg-info.bg-gradient">
                <img src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/u/a/l/-original-imagzm8qrfdmhy8z.jpeg?q=70"
                    className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title">SAMSUNG Galaxy S23 Ultra 5G</h5>
                    <p className="card-text">(Phantom Black, 256 GB) (12 GB RAM)#JustHere</p>
                </div>
                <div className="card-footer">
                    <div className="d-flex flex-row d-grid gap-2 row-6 mx-auto center">
                        <p className="font-monospace">₹80,000 <del>₹1,49,999</del></p>
                        <button className="btn btn-primary" type="button">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="col">
            <div className="card bg-info.bg-gradient">
                <img src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/u/a/l/-original-imagzm8qrfdmhy8z.jpeg?q=70"
                    className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title">SAMSUNG Galaxy S23 Ultra 5G</h5>
                    <p className="card-text">(Phantom Black, 256 GB) (12 GB RAM)#JustHere</p>
                </div>
                <div className="card-footer">
                    <div className="d-flex flex-row d-grid gap-2 row-6 mx-auto center">
                        <p className="font-monospace">₹80,000 <del>₹1,49,999</del></p>
                        <button className="btn btn-primary" type="button">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="col">
            <div className="card bg-info.bg-gradient">
                <img src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/u/a/l/-original-imagzm8qrfdmhy8z.jpeg?q=70"
                    className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title">SAMSUNG Galaxy S23 Ultra 5G</h5>
                    <p className="card-text">(Phantom Black, 256 GB) (12 GB RAM)#JustHere</p>
                </div>
                <div className="card-footer">
                    <div className="d-flex flex-row d-grid gap-2 row-6 mx-auto center">
                        <p className="font-monospace">₹80,000 <del>₹1,49,999</del></p>
                        <button className="btn btn-primary" type="button">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="col">
            <div className="card bg-info.bg-gradient">
                <img src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/u/a/l/-original-imagzm8qrfdmhy8z.jpeg?q=70"
                    className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title">SAMSUNG Galaxy S23 Ultra 5G</h5>
                    <p className="card-text">(Phantom Black, 256 GB) (12 GB RAM)#JustHere</p>
                </div>
                <div className="card-footer">
                    <div className="d-flex flex-row d-grid gap-2 row-6 mx-auto center">
                        <p className="font-monospace">₹80,000 <del>₹1,49,999</del></p>
                        <button className="btn btn-primary" type="button">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="col">
            <div className="card bg-info.bg-gradient">
                <img src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/u/a/l/-original-imagzm8qrfdmhy8z.jpeg?q=70"
                    className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title">SAMSUNG Galaxy S23 Ultra 5G</h5>
                    <p className="card-text">(Phantom Black, 256 GB) (12 GB RAM)#JustHere</p>
                </div>
                <div className="card-footer">
                    <div className="d-flex flex-row d-grid gap-2 row-6 mx-auto center">
                        <p className="font-monospace">₹80,000 <del>₹1,49,999</del></p>
                        <button className="btn btn-primary" type="button">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <footer className="text-center text-lg-start bg-body-tertiary text-muted">
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
           
            <div>
                <a href="" className="me-4 text-reset">
                    <i className="fab fa-facebook-f"></i>
                </a>
                <a href="" className="me-4 text-reset">
                    <i className="fab fa-twitter"></i>
                </a>
                <a href="" className="me-4 text-reset">
                    <i className="fab fa-google"></i>
                </a>
                <a href="" className="me-4 text-reset">
                    <i className="fab fa-instagram"></i>
                </a>
                <a href="" className="me-4 text-reset">
                    <i className="fab fa-linkedin"></i>
                </a>
                <a href="" className="me-4 text-reset">
                    <i className="fab fa-github"></i>
                </a>
            </div>
        </section>

        <section className="">
            <div className="container text-center text-md-start mt-5">
                <div className="row mt-3">
                    <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                        <h6 className="text-uppercase fw-bold mb-4">
                            <i className="fas fa-gem me-3"></i>Galaxy Mobile Store
                        </h6>
                        <p>
                            Connecting you to the future, one device at a time.
                        </p>
                    </div>
                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                        <h6 className="text-uppercase fw-bold mb-4">
                            Products
                        </h6>
                        <p>
                            <a href="#!" className="text-reset">Galaxy S24 Ultra</a>
                        </p>
                        <p>
                            <a href="#!" className="text-reset">Galaxy Z Fold6</a>
                        </p>
                        <p>
                            <a href="#!" className="text-reset">Galaxy A55 5G</a>
                        </p>
                        <p>
                            <a href="#!" className="text-reset">Galaxy Tab S9 Ultra

                            </a>
                        </p>
                    </div>
                    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                        <h6 className="text-uppercase fw-bold mb-4">
                            Useful links
                        </h6>
                        <p>
                            <a href="#!" className="text-reset">Pricing</a>
                        </p>
                        <p>
                            <a href="#!" className="text-reset">Exclusive Stores</a>
                        </p>
                        <p>
                            <a href="#!" className="text-reset">Orders</a>
                        </p>
                        <p>
                            <a href="#!" className="text-reset">Help</a>
                        </p>
                    </div>
                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                        <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                        <p><i className="fas fa-home me-3"></i> New York, NY 10012, US</p>
                        <p>
                            <i className="fas fa-envelope me-3"></i>
                            galaxymobilestore@example.com
                        </p>
                        <p><i className="fas fa-phone me-3"></i> + 01 234 567 88</p>
                        <p><i className="fas fa-print me-3"></i> + 01 234 567 89</p>
                    </div>
                </div>
            </div>
        </section>

        <div className="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
            © 2025 Copyright:
            <a className="text-reset fw-bold" href="https://galaxymobilestore.com/">galaxymobilestore.com</a>
        </div>
    </footer>

    </>
  )
}

export default MobileStore