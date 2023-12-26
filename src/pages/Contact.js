import React from "react";

import sec1 from '../image/contact/image 169.png'

import { FaLocationDot } from "react-icons/fa6";
import { BsTelephoneFill } from "react-icons/bs";
import { GiRotaryPhone } from "react-icons/gi";
import { MdEmail } from "react-icons/md";
const Contact = () => {
    return (
        <>
            {/* section 1 */}
            <section>
                <div className="background-tracking">
                    <div className="background-tracking-bg">
                        <div className="container tracking-sec-1">
                            <div>
                                <p className="tracking-sec-1-a">Contact us</p>
                            </div>
                            <div>
                                <p className="tracking-sec-1-b">We Freight To All Over The World The Best Logistic</p>
                                <p className="tracking-sec-1-b">Company, <span>FAST</span> And <span>SAFELY!</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* section 2 */}
            <div className="container">
                <p className="contact-sec-2-p">We Are Always With <span>you :)</span> </p>
            </div>
            <div className="container contact-sec-2">

                <div>
                    <img src={sec1}></img>
                </div>
                <div>
                    <div className="">
                        <h5 className="card-header contact-card-header">Corporate office</h5>
                        <div className="contact-card">
                            <div className="contact-sec-2-a">
                                <div>
                                    <FaLocationDot className="contact-sec-2-icon"></FaLocationDot>
                                </div>
                                <div className="contact-sec-2-p">
                                    <p className="contact-sec-2-p1">Address:</p>
                                    <p className="contact-sec-2-p2">201, 2nd floor, slice mall, near s.g road, Nicol,
                                        Ahmadabad, India.</p>
                                </div>
                            </div>
                            <div className="contact-sec-2-a">
                                <div>
                                    <BsTelephoneFill className="contact-sec-2-icon"></BsTelephoneFill>
                                </div>
                                <div className="contact-sec-2-p">
                                    <p className="contact-sec-2-p1">Telephone no:</p>
                                    <p className="contact-sec-2-p2">+(91) 99099 45454</p>
                                </div>
                            </div>
                            <div className="contact-sec-2-a">
                                <div>
                                    <GiRotaryPhone className="contact-sec-2-icon"></GiRotaryPhone>
                                </div>
                                <div className="contact-sec-2-p">
                                    <p className="contact-sec-2-p1">Fax no:</p>
                                    <p className="contact-sec-2-p2">+(0362) 4455 556</p>
                                </div>
                            </div>
                            <div className="contact-sec-2-a">
                                <div>
                                    <MdEmail className="contact-sec-2-icon"></MdEmail>
                                </div>
                                <div className="contact-sec-2-p">
                                    <p className="contact-sec-2-p1">E-mail:</p>
                                    <a className="contact-sec-2-a-a">Info@Vshipping.com</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* section 3 */}

            <div className="container contact-sec-2">

                <div>
                    <img src={sec1}></img>
                </div>
                <div>
                    <div className="">
                        <h5 className="card-header contact-card-header">Corporate office</h5>
                        <div className="contact-card">
                            <div className="contact-sec-2-a">
                                <div>
                                    <FaLocationDot className="contact-sec-2-icon"></FaLocationDot>
                                </div>
                                <div className="contact-sec-2-p">
                                    <p className="contact-sec-2-p1">Address:</p>
                                    <p className="contact-sec-2-p2">201, 2nd floor, slice mall, near s.g road, Nicol,
                                        Ahmadabad, India.</p>
                                </div>
                            </div>
                            <div className="contact-sec-2-a">
                                <div>
                                    <BsTelephoneFill className="contact-sec-2-icon"></BsTelephoneFill>
                                </div>
                                <div className="contact-sec-2-p">
                                    <p className="contact-sec-2-p1">Telephone no:</p>
                                    <p className="contact-sec-2-p2">+(91) 99099 45454</p>
                                </div>
                            </div>
                            <div className="contact-sec-2-a">
                                <div>
                                    <GiRotaryPhone className="contact-sec-2-icon"></GiRotaryPhone>
                                </div>
                                <div className="contact-sec-2-p">
                                    <p className="contact-sec-2-p1">Fax no:</p>
                                    <p className="contact-sec-2-p2">+(0362) 4455 556</p>
                                </div>
                            </div>
                            <div className="contact-sec-2-a">
                                <div>
                                    <MdEmail className="contact-sec-2-icon"></MdEmail>
                                </div>
                                <div className="contact-sec-2-p">
                                    <p className="contact-sec-2-p1">E-mail:</p>
                                    <a className="contact-sec-2-a-a">Info@Vshipping.com</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Contact;