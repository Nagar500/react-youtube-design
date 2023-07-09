import React from 'react'
import './subheader.css'

const SubHeader = ( { sidebarStyle } ) => {
  return (
    <div className='sub-head'
    style={{width: sidebarStyle ? '90%' : '73%',
    left: sidebarStyle ? '95px' : '287px'}}>
   <div className="btn">Music</div>
   <div className="btn">Sports</div>
   <div className="btn">Mixes</div>
   <div className="btn">Sports</div>
   <div className="btn">Games</div>
   <div className="btn">Action movies</div>
   <div className="btn">Pawan kalyan</div>
   <div className="btn">Bro movie</div>
   <div className="btn">News</div>
   <div className="btn">Shorts</div>
   <div className="btn">Comedy videos</div>
   <div className="btn">Tv serials</div>
   <div className="btn">Remix songs</div>
   <div className="btn">90s era</div>
   <div className="btn">Sad songs</div>
   <div className="btn">Romantic gane</div>
   <div className="btn">Letest videos</div>
   <div className="btn">Trending</div>
   <div className="btn">Fashion</div>
    </div>
  )
}

export default SubHeader