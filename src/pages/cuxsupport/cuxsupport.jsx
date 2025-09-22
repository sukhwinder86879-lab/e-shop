import './cuxsupport.css'
import { CiCreditCard1 } from "react-icons/ci";
import { MdScreenSearchDesktop } from "react-icons/md";
import { RiCustomerService2Line } from "react-icons/ri";
import { FaCat } from "react-icons/fa";
export function Customersupport() {
    return(
        <>

                <div className="cux-support">
                    <div className="cux-support-txt">
                        <h1>Why Choose Us</h1>
                        <p>The main reason is because our competitors have <br /> disgusting sites, but we can' t write that here, <br /> so the text here will be different</p>
        
                    </div>
                    <div className="support-type">
                        <div className="box">
                            <div className="box-icon">
                                    <CiCreditCard1 />
                            </div>
                            <div className="box-txt">
                               <span >Payment methods</span> 
                               <li>We have a lot of them, from cryptocurrencies to barter for potatoes</li>              
                             </div>
                            </div>
                        <div className="box">
                            <div className="box-icon">
                                <MdScreenSearchDesktop />
                                </div>
                                <div className="box-txt">
                                    <span>Simple search process</span>
                                    <li>We checked it out, even the kid did it, but it was my mom's friend's son</li>
                            </div>
                            </div>
                        <div className="box">
                            <div className="box-icon">
                                <RiCustomerService2Line />
        
                                </div>
                                <div className="box-txt">
                                    <span>24/7 Support</span>
                                    <li>Is there something you don't understand? Feel free to call us. Phone number in the footer</li>
                            </div>
                            </div>
                        <div className="box">
                            <div className="box-icon">
                                <FaCat />
        
                                </div>
                                <div className="box-txt">
                                    <span>We are nice</span>
                                    <li>Fantasy is over, there will be something really convincing here</li>
                            </div>
                            </div>
        
                    </div>
                    
                </div>
        </>
    )
    
}