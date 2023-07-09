import React from 'react'
import './sidebar.css'
import HomeIcon from '../../images/home.png'
import SubscriptionIcon from '../../images/subscriprion.png'
import ShortIcon from '../../images/library.png'
import Libary from '../../images/library.png'
import LikeIcon from '../../images/like.png'
import ShowMoreIcon from '../../images/show-more.png'

const SideBar = ( { sidebarStyle } ) => {
    return (
        <div className='sidebar' 
        style={{width:sidebarStyle ? '5%' : '15%',
        overflow:sidebarStyle ? 'hidden' : 'auto'}}>
            <div className="menu menu-home">
                <p><img src={HomeIcon} /></p>
                <p>Home</p>
            </div>
            <div className="menu">
                <p><img src={ShortIcon} /></p>
                <p>Shorts</p>
            </div>
            <div className="menu">
                <p><img src={SubscriptionIcon} /></p>
                <p>Subscriptions</p>
            </div>
            <div className="lines"></div>
            <div className="menu">
                <p><img src={Libary} /></p>
                <p>Library</p>
            </div>
            <div className="menu">
                <p><img src={SubscriptionIcon} /></p>
                <p>History</p>
            </div>
            <div className="menu">
                <p><img src={SubscriptionIcon} /></p>
                <p>Your Videos</p>
            </div>
            <div className="menu">
                <p><img src={SubscriptionIcon} /></p>
                <p>Watch later</p>
            </div>
            <div className="menu">
                <p><img src={LikeIcon} /></p>
                <p>Liked videos</p>
            </div>
            <div className="menu">
                <p><img src={ShowMoreIcon} /></p>
                <p>Show more</p>
            </div>
            <div className="lines"></div>
            <div className="menu">
                <p style={{ fontSize: '15px',
            display:sidebarStyle ? 'none' : 'block' }}>Subscriptions</p>
            </div>
            <div className="menu">
                <p><img src={ShowMoreIcon} /></p>
                <p>Music</p>
            </div>
            <div className="menu">
                <p><img src={ShowMoreIcon} /></p>
                <p>Sports</p>
            </div>
            <div className="menu">
                <p><img src={ShowMoreIcon} /></p>
                <p>Gamming</p>
            </div>
            <div className="menu">
                <p><img src={ShowMoreIcon} /></p>
                <p>Movies</p>
            </div>
            <div className="lines"></div>
            <div className="menu">
                <p style={{ fontSize: '15px',
             display:sidebarStyle ? 'none' : 'block' }}>Explore</p>
            </div>
            <div className="menu">
                <p><img src={ShowMoreIcon} /></p>
                <p>Trending</p>
            </div>
            <div className="menu">
                <p><img src={ShowMoreIcon} /></p>
                <p>Shopping</p>
            </div>
            <div className="menu">
                <p><img src={ShowMoreIcon} /></p>
                <p>Music</p>
            </div>
            <div className="menu">
                <p><img src={ShowMoreIcon} /></p>
                <p>Movies</p>
            </div>
            <div className="menu">
                <p><img src={ShowMoreIcon} /></p>
                <p>Live</p>
            </div>
            <div className="menu">
                <p><img src={ShowMoreIcon} /></p>
                <p>Gaming</p>
            </div>
            <div className="menu">
                <p><img src={ShowMoreIcon} /></p>
                <p>News</p>
            </div>
            <div className="menu">
                <p><img src={ShowMoreIcon} /></p>
                <p>Sports</p>
            </div>
            <div className="menu">
                <p><img src={ShowMoreIcon} /></p>
                <p>Learning</p>
            </div>
            <div className="menu">
                <p><img src={ShowMoreIcon} /></p>
                <p>Fashion & Beauty</p>
            </div>
            <div className="lines"></div>
            <div className="menu">
                <p style={{ fontSize: '15px' }}>More From MeTube</p>
            </div>
            <div className="menu">
                <p><img src={ShowMoreIcon} /></p>
                <p>MeTube Premium</p>
            </div>
            <div className="menu">
                <p><img src={ShowMoreIcon} /></p>
                <p>MeTube Studio</p>
            </div>
            <div className="menu">
                <p><img src={ShowMoreIcon} /></p>
                <p>MeTube Music</p>
            </div>
            <div className="menu">
                <p><img src={ShowMoreIcon} /></p>
                <p>MeTube Kids</p>
            </div>
            <div className="lines"></div>
            <div className="menu">
                <p><img src={ShowMoreIcon} /></p>
                <p>Settings</p>
            </div>
            <div className="menu">
                <p><img src={ShowMoreIcon} /></p>
                <p>Report history</p>
            </div>
            <div className="menu">
                <p><img src={ShowMoreIcon} /></p>
                <p>Help</p>
            </div>
            <div className="menu">
                <p><img src={ShowMoreIcon} /></p>
                <p>Send Feedback</p>
            </div>
            <div className="lines"></div>
            <div className="menu footer">
                <div className='about'>
                <div>About Press Copyright</div>
                <div>Contact us Creators</div>
                <div>Advertise Developers</div>
                </div>
                <div className='about'>
                <div>Terms Privacy Policy & Safty</div>
                <div>How MeTube works</div>
                <div>Test new features</div>
                </div>
                
                <div className='about foot'>@2023 Google LLC</div>
            </div>
        </div>
    )
}

export default SideBar