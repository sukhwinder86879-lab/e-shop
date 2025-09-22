import { Footer } from '../../component/footer/footer'
import { Offercard } from '../../component/offercard/offercard'
import './roomimg.css'
export function Room() {
    return(
        <>
        <div className="room-glry">
            <div className="glry-head">
                <h1 className='img-heading'>Last Minute Deals</h1>
               
            </div>
            <div className="room-img">
                <div className="upper-img-glry">
                    <div className="img-box">
                <Offercard image={'/img/bed.png'} crdhead={'Wilderness Club at Big Ceddar'} combined={'2 Bedroom Combined Lodge'} date={'28 October — 1 November'} price={'$2016 / 6night'}/>
                <Offercard image={'/img/bed1.png'} crdhead={'Wilderness Club at Big Ceddar'} combined={'2 Bedroom Combined Lodge'} date={'28 October — 1 November'} price={'$2016 / 6night'}/>
                <Offercard image={'/img/bed2.png'} crdhead={'Wilderness Club at Big Ceddar'} combined={'2 Bedroom Combined Lodge'} date={'28 October — 1 November'} price={'$2016 / 6night'}/>
                    </div>
                    <div className="img-box">
                 <Offercard image={'/img/bed3.png'} crdhead={'Wilderness Club at Big Ceddar'} combined={'2 Bedroom Combined Lodge'} date={'28 October — 1 November'} price={'$2016 / 6night'}/>
                 <Offercard image={'/img/bed4.png'} crdhead={'Wilderness Club at Big Ceddar'} combined={'2 Bedroom Combined Lodge'} date={'28 October — 1 November'} price={'$2016 / 6night'}/>
                 <Offercard image={'/img/room4.png'} crdhead={'Wilderness Club at Big Ceddar'} combined={'2 Bedroom Combined Lodge'} date={'28 October — 1 November'} price={'$2016 / 6night'}/>
                    </div>

                </div>
                <div className="upper-img-glry">
                    <div className="img-box">
                   <Offercard image={'/img/room5.png'} crdhead={'Wilderness Club at Big Ceddar'} combined={'2 Bedroom Combined Lodge'} date={'28 October — 1 November'} price={'$2016 / 6night'}/>
                   <Offercard image={'/img/room6.png'} crdhead={'Wilderness Club at Big Ceddar'} combined={'2 Bedroom Combined Lodge'} date={'28 October — 1 November'} price={'$2016 / 6night'}/>
                   <Offercard image={'/img/room7.png'} crdhead={'Wilderness Club at Big Ceddar'} combined={'2 Bedroom Combined Lodge'} date={'28 October — 1 November'} price={'$2016 / 6night'}/>

                    </div>
                    <div className="img-box">
                   <Offercard image={'/img/room8.png'} crdhead={'Wilderness Club at Big Ceddar'} combined={'2 Bedroom Combined Lodge'} date={'28 October — 1 November'} price={'$2016 / 6night'}/>
                   <Offercard image={'/img/room9.png'} crdhead={'Wilderness Club at Big Ceddar'} combined={'2 Bedroom Combined Lodge'} date={'28 October — 1 November'} price={'$2016 / 6night'}/>
                   <Offercard image={'/img/room10.png'} crdhead={'Wilderness Club at Big Ceddar'} combined={'2 Bedroom Combined Lodge'} date={'28 October — 1 November'} price={'$2016 / 6night'}/>
                    </div>

                </div>



            </div>   
        <div className="view-btn">
             <button> <span>View More</span></button>
              <button class="show">Show on map</button>
        </div>

            
            
        </div>

        <Footer/>
        </>
    )
    
}
