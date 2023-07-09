import React from 'react'
import './videos.css'

const Videos = ( { sidebarStyle } ) => {
    return (
        // long videos
        <div className='videos' 
        style={{width: sidebarStyle ? '90%' : '73%',
        marginRight:sidebarStyle ? '3%' : '6%'}}>
            <div className="video-container" 
            style={{width:sidebarStyle ? '24%' : '32%'}}>
                <div className="video"></div>
                <div className="video-info"></div>
            </div>
            <div className="video-container"
            style={{width:sidebarStyle ? '24%' : '32%'}}>
                <div className="video"></div>
                <div className="video-info"></div>
            </div>
            <div className="video-container"
            style={{width:sidebarStyle ? '24%' : '32%'}}>
                <div className="video"></div>
                <div className="video-info"></div>
            </div>
            <div className="video-container"
            style={{width:sidebarStyle ? '24%' : '32%'}}>
                <div className="video"></div>
                <div className="video-info"></div>
            </div>
            <div className="video-container"
            style={{width:sidebarStyle ? '24%' : '32%'}}>
                <div className="video"></div>
                <div className="video-info"></div>
            </div>
            <div className="video-container"
            style={{width:sidebarStyle ? '24%' : '32%'}}>
                <div className="video"></div>
                <div className="video-info"></div>
            </div>
          
            <div className="line"></div>
            {/* short videos  */}
           <div className='short-name'>Shorts</div>
            <div className="short-video-container"
            style={{width:sidebarStyle ? '15.6%' : '18.6%'}}>
                <div className="short-video"></div>
                <div className="short-video-info"></div>
            </div>
            <div className="short-video-container"
            style={{width:sidebarStyle ? '15.6%' : '18.6%'}}>
                <div className="short-video"></div>
                <div className="short-video-info"></div>
            </div>
            <div className="short-video-container"
            style={{width:sidebarStyle ? '15.6%' : '18.6%'}}>
                <div className="short-video"></div>
                <div className="short-video-info"></div>
            </div>
            <div className="short-video-container"
            style={{width:sidebarStyle ? '15.6%' : '18.6%'}}>
                <div className="short-video"></div>
                <div className="short-video-info"></div>
            </div>
            <div className="short-video-container"
            style={{width:sidebarStyle ? '15.6%' : '18.6%'}}>
                <div className="short-video"></div>
                <div className="short-video-info"></div>
            </div>
            {
                sidebarStyle ? 
                <div className="short-video-container"
                style={{width:sidebarStyle ? '15.6%' : '18.6%'}}>
                <div className="short-video"></div>
                <div className="short-video-info"></div>
            </div> : null
            }
             
            <div className="line"></div>
            <div className="video-container"
            style={{width:sidebarStyle ? '24%' : '32%'}}>
                <div className="video"></div>
                <div className="video-info"></div>
            </div>
            <div className="video-container"
            style={{width:sidebarStyle ? '24%' : '32%'}}>
                <div className="video"></div>
                <div className="video-info"></div>
            </div>
            <div className="video-container"
            style={{width:sidebarStyle ? '24%' : '32%'}}>
                <div className="video"></div>
                <div className="video-info"></div>
            </div>
            <div className="video-container"
            style={{width:sidebarStyle ? '24%' : '32%'}}>
                <div className="video"></div>
                <div className="video-info"></div>
            </div>
            <div className="video-container"
            style={{width:sidebarStyle ? '24%' : '32%'}}>
                <div className="video"></div>
                <div className="video-info"></div>
            </div>
            <div className="video-container"
            style={{width:sidebarStyle ? '24%' : '32%'}}>
                <div className="video"></div>
                <div className="video-info"></div>
            </div>
        </div>

    )
}

export default Videos