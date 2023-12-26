import React from "react";
import { Outlet, Link } from "react-router-dom";
import card1 from '../image/section2 card/image 120.png'
import card2 from '../image/section2 card/image 121.png'
import card3 from '../image/section2 card/image 122.png'
import sec4 from '../image/section4/image 128.png'
import sec41 from '../image/section4/Group 427321667.png'
import sec42 from '../image/section4/Group 427321668.png'
import sec43 from '../image/section4/Group 427321669.png'
import sec44 from '../image/section4/Group 427321670.png'
import sec51 from '../image/section5/1.png'
import sec52 from '../image/section5/2.png'
import sec53 from '../image/section5/3.png'
import sec54 from '../image/section5/4.png'
import sec71 from '../image/section7/1.png'
import sec72 from '../image/section7/2.png'
import sec73 from '../image/section7/3.png'
import sec81 from '../image/section8/Group 427321672.png'
import sec82 from '../image/section8/Group 427321673.png'
import sec83 from '../image/section8/Group 427321674.png'
import sec84 from '../image/section8/Group 427321675.png'
import sec9a1 from '../image/section9/Group 427321676.png'
import sec9a2 from '../image/section9/Group 427321677.png'
import sec9b from '../image/section9/image 149.png'
import sec101 from '../image/section10/client-1 1.png'
import sec102 from '../image/section10/client-2 1.png'
import sec103 from '../image/section10/client-3 1.png'
import sec104 from '../image/section10/client-4 1.png'
import sec105 from '../image/section10/client-4 2.png'

import { FaAngleRight, FaUserAlt } from 'react-icons/fa';
import { AiOutlinePlus } from 'react-icons/ai';



function Home() {
    return (
        <>
            {/* section 1 */}

            <div className="home-img">
                <div className="home-img-bg">
                    <div className="container text-center sec-1">
                        <p className="sec-1-p1">We are Proud</p>
                        <h2 className="sec-1-h2">to be always on demand</h2>
                        <p className="sec-1-p2 my-5">“You Support, we import making your worldwide trading easy our
                            passion is in precision and accuracy importing the way
                            you want a place people are proud to call home.”</p>
                        <button className="btn btn-primary sec-1-btn">contact with us</button>
                    </div>
                </div>
            </div>

            {/* section 2 */}

            <div className="container my-5">
                <h1 className="sec-2-a-h1 text-center">Our services</h1>
                <p className="sec-2-a-p1 text-center">taxation in case of export services under GST.</p>

                <div className="sec-2-b my-5">
                    <div className="sec-2-b-card">
                        <div className="card">
                            <img src={card1} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title sec-2-b-h5">OCEAN FRIEGHT SHIPPING</h5>
                                <p className="card-text sec-2-b-p my-4">Shipping solutions for a connected world. Fastreliable, and hassle-free shipping. Your trustedpartner in shipping.</p>
                            </div>
                            <div className="sec-2-card-right ">
                                <a href="#" class="card-link sec-2-b-a card-body">Read More  <FaAngleRight style={{ color: '#1A93CD', fontSize: '18px' }} /></a>
                                <div className="sec-2-card-box"><AiOutlinePlus></AiOutlinePlus></div>
                            </div>

                        </div>
                    </div>
                    <div className="sec-2-b-card">
                        <div className="card ">
                            <img src={card2} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title sec-2-b-h5">aIR FRIEGHT SHIPPING</h5>
                                <p className="card-text sec-2-b-p my-4">From standard airport-to-airport services to comprehensive end-to-end solutions, we are affordable and scalable. </p>
                            </div>
                            <div className="sec-2-card-right ">
                                <a href="#" class="card-link sec-2-b-a card-body">Read More  <FaAngleRight style={{ color: '#1A93CD', fontSize: '18px' }} /></a>
                                <div className="sec-2-card-box"><AiOutlinePlus></AiOutlinePlus></div>
                            </div>
                        </div>
                    </div>
                    <div className="sec-2-b-card">
                        <div className="card">
                            <img src={card3} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title sec-2-b-h5">Car FRIEGHT SHIPPING</h5>
                                <p className="card-text sec-2-b-p my-4">Identify the key benefits & advantages your logistics company offers. These could include reliability, efficiency, speed, flexibility, personalized service, or cost-effectiveness.</p>
                            </div>
                            <div className="sec-2-card-right ">
                                <a href="#" class="card-link sec-2-b-a card-body">Read More  <FaAngleRight style={{ color: '#1A93CD', fontSize: '18px' }} /></a>
                                <div className="sec-2-card-box"><AiOutlinePlus></AiOutlinePlus></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* section 3 */}

            <div className="home-img">
                <div className="home-img-bg">
                    <div className="container text-center sec-1">
                        <p className="sec-1-p1">We are Proud</p>
                        <h2 className="sec-3-h2">the best sea and air freight services</h2>
                        <p className="sec-3-p2 my-4">For Book your shipping from any country</p>
                        <button className="btn btn-primary sec-1-btn">contact with us</button>
                    </div>
                </div>
            </div>

            {/* section 4 */}

            <div className="container sec-4 my-5">
                <div className="sec-4-a">
                    <img src={sec4}></img>
                </div>
                <div className="sec-4-b">
                    <p className="sec-4-b-p1">why choose us?</p>
                    <p className="sec-4-b-p2">India’s imports from Australia amount to 17 US $ billion its exports to Australia amount to 10.5 US $ billion.</p>
                    <p className="sec-4-b-p3"> However, what we need to realize that India’s imports from Australia are primarily (96%) raw materials &intermediate goods. They are highly concentrated in Coal (74% of Australia’s exports to India) out of which 71.4% is coking coal. On the other hand, India’s exports to Australia are broad-based and dominated by finished products (consumer goods). India also spends $ 4 bn approx. each year on education of students in Australia.</p>
                    <a href="#" class="card-link sec-2-b-a card-body">Read More  <FaAngleRight style={{ color: '#1A93CD', fontSize: '18px' }} /></a>
                </div>
                <div className="sec-4-c">
                    <div className="sec-4-c-right">
                        <div className="sec-4-c-img1 sec-4-c-img11">
                            <img src={sec41}></img>
                        </div>
                        <div className="sec-4-c-right-1">
                            <p className="sec-4-c-right-1">We Are trusted</p>
                        </div>
                    </div>

                    <div className="sec-4-c-right">
                        <div className="sec-4-c-img1 sec-4-c-img2">
                            <img src={sec42}></img>
                        </div>
                        <div className="sec-4-c-right-1"><p>The best security</p></div>
                    </div>
                    <div className="sec-4-c-right">
                        <div className="sec-4-c-img1 sec-4-c-img3">
                            <img src={sec43}></img>
                        </div>
                        <div className="sec-4-c-right-1"> <p>100% guarantee</p></div>
                    </div>
                    <div className="sec-4-c-right">
                        <div className="sec-4-c-img1 sec-4-c-img4">
                            <img src={sec44}></img>
                        </div>
                        <div className="sec-4-c-right-1">
                            <p>quick location</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* section 5 */}

            <div className="container my-5">
                <h1 className="sec-2-a-h1 text-center">Our services process</h1>
                <p className="sec-2-a-p1 text-center">FTP expands export promotion scheme to include PM MITRA.
                </p>

                <div className="sec-5 my-5 text-center">

                    <div>
                        <div className="sec-5-box-1">
                            <div className="sec-5-box-11">
                                1
                            </div>
                            <img src={sec51}></img>
                        </div>
                        <p className="sec-5-p">Select freight</p>
                    </div>
                    <div>
                        <div className="sec-5-box-1">
                            <div className="sec-5-box-11">
                                2
                            </div>
                            <img src={sec52}></img>
                        </div>
                        <p className="sec-5-p">Create invoice </p>
                    </div>


                    <div>
                        <div className="sec-5-box-1">
                            <div className="sec-5-box-11">
                                3
                            </div>
                            <img src={sec53}></img>
                        </div>
                        <p className="sec-5-p">Secure payment</p>
                    </div>
                    <div>
                        <div className="sec-5-box-1">
                            <div className="sec-5-box-11">
                                4
                            </div>
                            <img src={sec54}></img>
                        </div>
                        <p className="sec-5-p">fast delivery</p>
                    </div>

                </div>
            </div>

            {/* section 6 */}

            <div className="sec-6-img ">
                <div className="">
                    <div className="sec-6 my-5 ">
                        <div className="sec-6-a">
                            <div className="container ">
                                <p className="sec-6-a-p1">get a free quote</p>
                                <p className="sec-6-a-p2 mb-5">we always use best & fastest fleets</p>

                                <form>
                                    <div className="form-group">
                                        <input type="text" className="form-control" id="exampleInputName1" aria-describedby="NameHelp" placeholder="Full Name" />
                                    </div>
                                    <div className="form-group sec-6-a-a">
                                        <div>
                                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="E-Mail" />
                                        </div>
                                        <div>
                                            <input type="phone" className="form-control" id="exampleInputPhone1" placeholder="Mobile" />
                                        </div>
                                    </div>
                                    <div className="form-group sec-6-a-a">
                                        <div>
                                            <input type="text" className="form-control" id="exampleInputName1" aria-describedby="NameHelp" placeholder="Destination From" />
                                        </div>
                                        <div>
                                            <input type="text" className="form-control" id="exampleInputName1" aria-describedby="NameHelp" placeholder="Destination To" />
                                        </div>
                                    </div>
                                    <div className="sec-6-a-a">
                                        <div>
                                            <input type="text" className="form-control" id="exampleInputName1" aria-describedby="NameHelp" placeholder="Shipping Type" />
                                        </div>
                                        <div class="md-form  input-with-post-icon datepicker">
                                            <input placeholder="Select date" type="date" id="example" class="form-control" />
                                        </div>
                                    </div>
                                    <div class="">

                                        <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Message" rows="4"></textarea>
                                    </div>
                                    <button type="submit" class="btn btn-primary sec-6-a-a">send us quote</button>
                                </form>

                            </div>
                        </div>
                        <div className="sec-6-b"></div>
                    </div>
                </div>
            </div>

            {/* section 7 */}

            <div>
                <h1 className="sec-2-a-h1 text-center">Latest blog</h1>
                <p className="sec-2-a-p1 text-center">Perfect import company with perfect solution...</p>
            </div>

            <div className="sec-7-a container my-5" >
                <div className="card sec-2-b-card">
                    <img src={sec71} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title sec-7-a-card-h5">shipping container all
                            international transport</h5>
                        <div className="sec-7-a-a">
                            <div>
                                <p></p>
                            </div>
                            <div>
                                <p className="sec-7-a-a-pp"><FaUserAlt></FaUserAlt> Mr. Thomas</p>
                            </div>

                        </div>
                        <p className="card-text sec-7-a-card-p">Shipping solutions for a connected world. Fast
                            reliable, and hassle-free shipping. Your trusted
                            partner in shipping...</p>
                    </div>

                    <a href="#" class="card-link sec-2-b-a card-body">Read More  <FaAngleRight style={{ color: '#1A93CD', fontSize: '20px' }} /></a>
                </div>
                <div className="card sec-2-b-card">
                    <img src={sec72} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title sec-7-a-card-h5">Air shipping container all
                            international transport</h5>
                        <div className="sec-7-a-a">
                            <div>
                                <p></p>
                            </div>
                            <div>
                                <p className="sec-7-a-a-pp"><FaUserAlt></FaUserAlt> Mr. John</p>
                            </div>

                        </div>
                        <p className="card-text sec-7-a-card-p">From standard airport-to-airport services
                            to comprehensive end-to-end solutions, we
                            are affordable and scalable...
                        </p>
                    </div>

                    <a href="#" class="card-link sec-2-b-a card-body">Read More  <FaAngleRight style={{ color: '#1A93CD', fontSize: '20px' }} /></a>
                </div>
                <div className="card sec-2-b-card">
                    <img src={sec73} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title sec-7-a-card-h5">Car shipping container all
                            international transportt</h5>
                        <div className="sec-7-a-a">
                            <div>
                                <p></p>
                            </div>
                            <div>
                                <p className="sec-7-a-a-pp"><FaUserAlt></FaUserAlt> Mr. Ralf</p>
                            </div>

                        </div>
                        <p className="card-text sec-7-a-card-p">Identify the key benefits & advantages your logistics
                            company offers. These could include reliability,
                            efficiency, speed, flexibility....</p>
                    </div>

                    <a href="#" class="card-link sec-2-b-a card-body">Read More  <FaAngleRight style={{ color: '#1A93CD', fontSize: '20px' }} /></a>
                </div>
            </div>


            {/* section 8 */}

            <div className="sec-8-img">
                <div className="sec-8-img-bg">
                    <div className="container sec-8-box">
                        <div className="sec-8-box-1">
                            <div className="sec-8-box-img"><img src={sec81}></img></div>
                            <div className="sec-8-box-a">
                                <div className="sec-8-box-a-p1"><p>687</p></div>
                                <div className="sec-8-box-a-p2"><p>Project done</p></div>
                            </div>
                        </div>
                        <div className="sec-8-box-1">
                            <div className="sec-8-box-img"><img src={sec82}></img></div>
                            <div className="sec-8-box-a">
                                <div className="sec-8-box-a-p1"><p>687</p></div>
                                <div className="sec-8-box-a-p2"><p>Project done</p></div>
                            </div>
                        </div>
                        <div className="sec-8-box-1">
                            <div className="sec-8-box-img"><img src={sec83}></img></div>
                            <div className="sec-8-box-a">
                                <div className="sec-8-box-a-p1"><p>687</p></div>
                                <div className="sec-8-box-a-p2"><p>Project done</p></div>
                            </div>
                        </div>
                        <div className="sec-8-box-1">
                            <div className="sec-8-box-img"><img src={sec84}></img></div>
                            <div className="sec-8-box-a">
                                <div className="sec-8-box-a-p1"><p>687</p></div>
                                <div className="sec-8-box-a-p2"><p>Project done</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* section 9 */}

            <div className="container sec-9 my-5">
                <div>
                    <p className="sec-9-a-box-title">latest news</p>
                    <div className="sec-9-a-box1">
                        <div>
                            <img src={sec9a1}></img>
                        </div>
                        <div className="p-2">
                            <p className="sec-9-a-box-p1">news title</p>
                            <p className="sec-9-a-box-p2">By <span>Thomas</span></p>
                            <p className="sec-9-a-box-p3">Trade Emerge brings knowledge, global export-import
                                data, logistics under one roof. Avail end-to-end
                                services. Extensive service network.</p>
                        </div>
                    </div>
                    <div className="sec-9-a-box1 mt-5">
                        <div>
                            <img src={sec9a2}></img>
                        </div>
                        <div className="p-2">
                            <p className="sec-9-a-box-p1">news title</p>
                            <p className="sec-9-a-box-p2">By <span>John</span></p>
                            <p className="sec-9-a-box-p3">Trade Emerge brings knowledge, global export-import
                                data, logistics under one roof. Avail end-to-end
                                services. Extensive service network.</p>
                        </div>
                    </div>
                </div>
                <div >
                    <p className="sec-9-a-box-title">Testimonial</p>
                    <div className="sec-9-a-box2">
                        <div>
                            <img src={sec9b}></img>
                        </div>
                        <div className="sec-9-a-box2-b p-3">
                            <p>
                                “India is all set to spend Rs 2.71 lakh crores
                                ($33 billion) on defense equipment Financial
                                Year 2023.99 per cent of this equipment will
                                be sourced from Indian industries. Much
                                to the US and Russia’s dismay, India’s defend
                                ports are shrinking year-on-year and it's
                                because of the emergence of the Indian
                                defense industry.”
                            </p>
                            <div>
                                <div>
                                    <button></button>
                                </div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>


            {/* section10 */}

            <div className="sec-10 container text-center my-5">
                <p>Our valuable client</p>
                <div className="sec-10-box">
                    <div>
                        <img src={sec101}></img>
                    </div>
                    <div>
                        <img src={sec102}></img>
                    </div>
                    <div>
                        <img src={sec103}></img>
                    </div>
                    <div>
                        <img src={sec104}></img>
                    </div>
                    <div>
                        <img src={sec105}></img>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Home;