import './home.css'

import { Offercard } from '../../component/offercard/offercard';
import { Footer } from '../../component/footer/footer';
import { Customersupport } from '../cuxsupport/cuxsupport';
import { Recent } from '../recentpost/recent';
import { Review } from '../review/review';


export function Home() {
    return(
        <>
        <div className="home-con">
            <div className="home-txt">
                <li className='home-head'>Find an apartment for <br /> your vacation</li>
                <span className='home-intro'>We have several thousand apartments <br />for every taste in every corner of the globe</span>
            </div>

        </div>
         <div className="offer">
            <h2 className='ofer-txt'>Special offers</h2>
           <div className="discount-crt">
            <Offercard image={'/img/bed.png'} crdhead={'Wilderness Club at Big Ceddar'} combined={'2 Bedroom Combined Lodge'} date={'28 October — 1 November'}  price={'$2016 / 6night'}/>
            <Offercard image={'/img/bed1.png'} crdhead={'Wilderness Club at Big Ceddar'} combined={'2 Bedroom Combined Lodge'} date={'28 October — 1 November'} price={'$2016 / 6night'}/>
            <Offercard image={'/img/bed2.png'} crdhead={'Wilderness Club at Big Ceddar'} combined={'2 Bedroom Combined Lodge'} date={'28 October — 1 November'} price={'$2016 / 6night'}/>
        
         

            </div>
           </div>
   
        <Recent/>
        <Customersupport/>
        <Review/>
        <Footer/>
        
        </>
    )
}
