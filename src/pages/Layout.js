import { Outlet, Link } from "react-router-dom";
import Style from "./style.css";
import logo from '../image/logo/V Shipping.png';
import nav from '../image/India Image.png'
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import { MdAlarm } from "react-icons/md";
import { BiLogInCircle } from "react-icons/bi";
import { AiFillLock ,AiOutlineSearch } from "react-icons/ai";






const Layout = () => {
    return (
        <>
            <div className="navbar-top align-items-center">
                <div className="container navbar-top-a">
                    <div className="navbar-top-a">
                        <div className="navbar-top-a-a">
                            <div>
                                <FaEnvelope style={{ color: '#1A93CD', fontSize: '20px' }} />
                            </div>
                            <p>Info@Vshipping.com</p>
                        </div>
                        <div className="navbar-top-a-a">
                            <div>
                                <FaPhoneAlt style={{ color: '#1A93CD', fontSize: '20px' }} />
                            </div>
                            <p>2243 4322</p>
                        </div>
                        {/* <div className="navbar-top-a-a">
                            <div>
                                <MdAlarm style={{ color: '#1A93CD', fontSize: '25px' }} />
                            </div>
                            <p>9:00AM to 8:00PM</p>
                        </div> */}
                    </div>
                    <div className="navbar-top-a">
                        <div className="navbar-top-a-a">
                            <div>
                                <BiLogInCircle style={{ color: '#1A93CD', fontSize: '25px' }} />
                            </div>

                            <p>Login</p>
                        </div>
                        <div className="navbar-top-a-a">
                            <div>
                                <AiFillLock style={{ color: '#1A93CD', fontSize: '25px' }} />
                            </div>
                            <p>Registration</p>
                        </div>
                        <div className="navbar-top-a-a">
                            <img src={nav} style={{ height:"30px" }}></img>
                            <p>India</p>
                        </div>
                    </div>
                </div>
            </div>

            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <a className="navbar-brand" href="#"><img src={logo} className="logo"></img></a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link activeClassName='menu_active' className="nav-link" aria-current="page" to="">HOME</Link>
                            </li>
                            <li className="nav-item">
                                <Link activeClassName='menu_active' className="nav-link" aria-current="page" to="/services">SERVICES</Link>
                            </li>
                            <li className="nav-item">
                                <Link activeClassName='menu_active' className="nav-link" aria-current="page" to="shipping">SHIPPING</Link>
                            </li>
                            <li className="nav-item">
                                <Link activeClassName='menu_active' className="nav-link" aria-current="page" to="/tracking">TRACKING</Link>
                            </li>
                            <li className="nav-item">
                                <Link activeClassName='menu_active' className="nav-link" aria-current="page" to="/blog">BLOG</Link>
                            </li>
                            <li className="nav-item">
                                <Link activeClassName='menu_active' className="nav-link" aria-current="page" to="/pages">PAGES</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/contact">CONTACT</Link>
                            </li>
                            <button className="search" type="submit"> <AiOutlineSearch ></AiOutlineSearch></button>
                        </ul>
                    </div>
                </div>
            </nav>
            <Outlet />
        </>
    )
};

export default Layout;
