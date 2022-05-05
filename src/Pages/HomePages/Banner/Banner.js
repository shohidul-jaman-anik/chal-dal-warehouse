import React from 'react';
import './Banner.css';
import banner1 from '../../images/b-1.png'

const Banner = () => {
        return (
                <div className="container-fluid">
                        <div className="banner brand-bg row">
                                <div className="col-md-6 d-flex justify-content-center">
                                        <div className="w-75 ms-auto">
                                                <h1 className="">Explore Your Next</h1>
                                                <h1 className="brand-color fw-bold text-decoration-underline">MacBook</h1>
                                                <p className="pt-3">The MacBook is a brand of Macintosh notebook computers designed and marketed by Apple Inc. that use Apple's macOS operating system since 2006. It replaced the PowerBook and iBook brands during the Mac transition to Intel processors, announced in 2005.</p>
                                        </div>
                                </div>
                                <div className="col-md-5">
                                        <div className="">
                                                <img className="img-fluid" src={banner1} alt="" />
                                        </div>
                                </div>
                        </div>
                </div>
        );
};

export default Banner;