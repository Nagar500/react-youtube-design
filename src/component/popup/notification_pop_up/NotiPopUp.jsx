import React from 'react'
import './notipopup.css'
import HomeIcon from '../../../images/home.png'
import NotiIcon from '../../../images/notification.png'

const NotiPopUp = ( { notifinctionStyle } ) => {
  return (
    <div className='noti-popup'
    style={{display:notifinctionStyle ? 'block' : 'none'}}>
      <div className="noti-head">
        <p>Notification</p>
        <img src={HomeIcon}/>
      </div>
      <div className="noti-line"></div>
      <div className="noti-body">
        <div>
        <img src={NotiIcon} />
        <p>Your notification live here</p>
        <div>Subscribe to your favorite channel to get</div>
        <div>notified about their latest videos</div>
        </div>
      </div>
    </div>
  )
}

export default NotiPopUp