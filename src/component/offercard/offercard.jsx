import './offercard.css'
export function Offercard({image,crdhead,combined,date,price}) {
    return(
        <>
        <div className="card-con">
            <div className="card-img">
               <img src="" alt="" srcset={image}/>

            </div>
            <div className="card-txt">
                <li>{crdhead}</li>
                <li className='facility'>{combined}</li>
                <li className='facility'>{date}</li>
                <span className='room-price'>{price}</span>
            </div>
        </div>
        </>
    )
    
}