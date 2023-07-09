import React from 'react'
import './navbar.css'
import Cack from '../../images/cack.webp'
import SearchIcon from '../../images/search.png'
import VoiceSearch from '../../images/voice-search.png'
import UploadIcon from '../../images/upload.png'
import NotificationIcon from '../../images/notification.png'
import ProfilePic from '../../images/jack.png'

const Navbar = (
  {
    toggleStyleProfile,
    toggleStyleNotiFication,
    toggleStyleUpload,
    toggleSideBar,
    toggleVoice,
  }
) => {
  return (
    <div className='navbar'>

      <div className="left-nav">
        <p onClick={toggleSideBar}>&#9776;</p>
        <img src={Cack} className='logo' />
        <span className='logo-name'>MeTube</span>
      </div>

      <div className="mid-nav">
        <div className='input-icon'>
          <input type="text" placeholder='Search' />
          <div className='icon'>
            <img src={SearchIcon} />
          </div>
        </div>
        <div className='voice'>
          <img src={VoiceSearch} onClick={toggleVoice}/>
        </div>
      </div>
      <div className="right-nav">
        <img src={UploadIcon} className='upload-icon'
          onClick={toggleStyleUpload} />
        <img src={NotificationIcon} className='noti-icon'
          onClick={toggleStyleNotiFication} />
        <img src={ProfilePic} className='profile-icon'
          onClick={toggleStyleProfile} />
      </div>
    </div>
  )
}

export default Navbar