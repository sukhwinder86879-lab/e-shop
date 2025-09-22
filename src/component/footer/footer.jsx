import './footer.css'
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
export function Footer() {
    return(
        <>
        <div className="footer-con">
            <div className="about-con">
                <div className="title">
                <h3>Title of section</h3>
                <li>page litle</li>
                <li>page title</li>
                <li>page title</li></div>
                <div className="title">
                <h3>Title of section</h3>
                <li>page litle</li>
                <li>page title</li>
                <li>page title</li></div>
                <div className="title">
                <h3>Title of section</h3>
                <li>page litle</li>
                <li>page title</li>
                <li>page title</li></div>
                <div className="newsletter">
                    <h3>Subscribe to Newsletter</h3>
                    <div className="inp-submit">
                        <label htmlFor="">Your Email</label>
                    <input type="text" />
                    </div>

                </div>
                
            </div>
            <hr />
            <div className="social">
                <div className="footer-logo">
                    <li className='logo-txt'>your</li>
                <li className='logo-txt2'>.logo</li>
                </div>
                <div className="social-media-logo">
                    <FaPhoneAlt />
                    <FaFacebook />
                    <FaYoutube />
                    <FaInstagram />
                    <FaTelegram />
                    

                </div>

            </div>
        </div>
        </>
    )
    
}