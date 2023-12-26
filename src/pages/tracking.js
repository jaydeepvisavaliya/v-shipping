import React from "react";
import { PiLockKeyFill } from "react-icons/pi";



const tracking = () => {
    return (
        <>

            {/* section 1 */}
            <section>
                <div className="background-tracking">
                    <div className="background-tracking-bg">
                        <div className="container tracking-sec-1">
                            <div>
                                <p className="tracking-sec-1-a">Customer login</p>
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

            <div className="container tracking-sec-2 my-5">
                <div className="tracking-sec-2-a" >
                    <div className="tracking-sec-2-a-bg p-5 text-center">
                        <div className="tracking-sec-2-a-lock-bg">
                            <div className="tracking-sec-2-a-lock">
                                <PiLockKeyFill className="tracking-sec-2-1-lock-bg"></PiLockKeyFill>
                            </div>
                        </div>
                        <p className="tracking-sec-2-a-p  mt-4">welcome to your account</p>
                        <div className="tracking-sec-2-a-lock-bg">
                            <p className="tracking-sec-2-a-p1">A website welcome slogan is a short and catchy
                                phrase that greets visitors and sets the
                                tone for your website.</p>
                        </div>
                        <p className="tracking-sec-2-a-p2">Create A new account</p>
                    </div>
                </div>
                <div className="tracking-sec-2-b p-5">
                    <form>
                        <p className="tracking-sec-2-b-p">Login To your account</p>
                        <div class="form mb-4">
                            <label class="form-label" for="form2Example1">Email address :</label>
                            <input type="email" id="form2Example1" class="form-control" />

                        </div>

                        <div class="form mb-4">
                            <label class="form-label" for="form2Example2">Password :</label>
                            <input type="password" id="form2Example2" class="form-control" />

                        </div>
                        <div class="row mb-4">
                            <div class="col d-flex justify-content-center">
                                <div class="form-check">
                                    <label class="form-check-label tracking-sec-2-b-last" for="form2Example31"> Remember me </label>
                                    <input class="form-check-input" type="checkbox" value="" id="form2Example31" />
                                </div>
                            </div>

                            <div class="col">
                                <a href="#!" className="tracking-sec-2-b-last">Forgot Your Password?</a>
                            </div>
                        </div>
                        <button type="button" class="btn btn-primary btn-block mb-4">Login</button>
                    </form>
                </div>
            </div>

        </>
    );
}

export default tracking;