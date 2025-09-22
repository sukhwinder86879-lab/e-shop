import './recent.css'
export function Recent() {
    return(
        <>
             <div className="recent-post">
            <h1 className='recent-post-txt'>Recent posts</h1>
            <div className="post-img">
                <div className="post-img-con">
                    <div className="con-img"></div>
                    <div className="post-img-txt">
                        <h2>My trip to Athens</h2>
                        <p>It would seem that in a city where Theseus, Plato and Epicurus once walked, the very idea of the subway is alien to the city, but already...</p>
                    </div>
                </div>
                <div className="post-img-con">
                    <div className="con-img2">

                    </div>
                      <div className="post-img-txt">
                        <h2>Vilnius resorts</h2>
                        <p>I haven't seen any resorts in Vilnius, but there are wonderful people and pubs the very idea of the subway is alien to the city, but already...</p>
                    </div>

                </div>
                <div className="post-img-con">
                      <div className="con-img3">
                        
                    </div>
                      <div className="post-img-txt">
                        <h2>Tips for flying on a plane</h2>
                        <p>If you have a fear of flying, here's a helpful tip: bring your co-pilot so you can take a nap while he steers the plane for you</p>
                    </div>

                </div>
            </div>
        </div>
        </>
    )
    
}