import { Outlet, Link } from "react-router-dom";
import Style from "./style.css";
import React from 'react';
import logo from '../image/V Shipping.png';
import { IoCall } from "react-icons/io5";
import { GiRotaryPhone } from "react-icons/gi";
import { BiLogoTelegram } from "react-icons/bi";
import { TfiEmail } from "react-icons/tfi";
// import { BiLogoTelegram } from "react-icons/bs";
import { AiOutlineRight } from "react-icons/ai";
import fb from '../image/footer/image 151.png'
import tw from '../image/footer/image 152.png'
import you from '../image/footer/image 154.png'
import google from '../image/footer/image 153.png'


const Footer = () => {
    return (
        <>
            <footer className="text-center text-lg-start footer">
                <section className="">
                    <div className="container text-center text-md-start mt-4">
                        <div className="row mt-5">
                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                <img src={logo} className="logo"></img>
                                <p className="footer-box-1-p mt-3">it was popularized in the 1960s with the
                                    release of letterset sheets containing.</p>

                                <p><IoCall></IoCall><span className="footer-span">+(91) 99099 45454</span> </p>
                                <p><TfiEmail></TfiEmail><span className="footer-span">Info@Vshipping.com</span></p>
                                <p><GiRotaryPhone></GiRotaryPhone><span className="footer-span">+(0362) 4455 556</span> </p>

                                <div className="footer-box-1-a">
                                    <div><img src={fb}></img></div>
                                    <div><img src={tw}></img></div>
                                    <div><img src={you}></img></div>
                                    <div><img src={google}></img></div>
                                </div>
                            </div>
                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    QUICK LINKS
                                </h6>
                                <div className=" footer-box-2-a">
                                    <p>
                                        <a href="#!" className="text-reset"><AiOutlineRight></AiOutlineRight>Company Overview</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-reset"><AiOutlineRight></AiOutlineRight>Our Services</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-reset"><AiOutlineRight></AiOutlineRight>Media & Publications</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-reset"><AiOutlineRight></AiOutlineRight>Blog</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-reset"><AiOutlineRight></AiOutlineRight>Contact Us</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-reset"><AiOutlineRight></AiOutlineRight>Freight Gallery</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-reset"><AiOutlineRight></AiOutlineRight>Image Gallery</a>
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Useful links
                                </h6>
                                <div className="footer-box-2-a">
                                    <p>
                                        <a href="#!" className="text-reset"><AiOutlineRight></AiOutlineRight>Create Shipping </a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-reset"><AiOutlineRight></AiOutlineRight>Tracking</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-reset"><AiOutlineRight></AiOutlineRight>Shipment History</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-reset"><AiOutlineRight></AiOutlineRight>Typography</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-reset"><AiOutlineRight></AiOutlineRight>Button Accordion</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-reset"><AiOutlineRight></AiOutlineRight>Tracking Result</a>
                                    </p>
                                </div>
                            </div>

                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                                <h6 className="text-uppercase fw-bold mb-4">
                                    OPENING HOURS
                                </h6>
                                <div className="footer-box-2-a">
                                    <p>
                                        Monday To Friday: <span className="footer-span">9:30</span>AM to <span className="footer-span">5:30</span>PM
                                    </p>
                                    <p>
                                        Sunday: <span className="footer-span">Closed</span>
                                    </p>
                                </div>
                                {/* <div>
                                    <div className="input-group footer-search">
                                        <div className="form-outline">
                                            <input id="search-input" type="search" className="form-control" placeholder="Enter Your E-Mail" />
                                            <label className="form-label" for="form1"></label>
                                        </div>
                                        <button id="search-button" type="button" className="btn btn-primary">
                                            <BiLogoTelegram></BiLogoTelegram>
                                        </button>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </section>
                <div className="copy text-center">
                    <p>
                        COPYRIGHT <span>@</span>2017 <span>VING’S SHIPPING.</span> ALL RIGHTS RESERVED
                    </p>
                </div>
            </footer >
        </>
    );

}
export default Footer;