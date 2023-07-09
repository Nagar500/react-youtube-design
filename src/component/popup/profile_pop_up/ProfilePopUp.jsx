import React from 'react'
import './profilepopup.css'
import HomeIcon from '../../../images/home.png'
import ProfilePic from '../../../images/jack.png'

const ProfilePopUp = ( { profileStyle } ) => {
    
  return (
    <div className='profile-popup' 
    style={{display:profileStyle ? 'block' : 'none'}}>
      <div className="profile-head">
        <img src={ProfilePic}/>
        <div className="div">
          <div className="user-name">Nagar Jangid</div>
          <div className="user-email">@nagarjangid9762</div>
          <div className="user-manage">Manage your Google Account</div>
        </div>
      </div>
      <div className="pro-line"></div>
      {/* <div className='profile-tail'> */}
      <div className="profile-links">
        <img src={HomeIcon} />
        <p>Your Channel</p>
      </div>
      <div className="profile-links">
        <img src={HomeIcon} />
        <p>MeTube Studio</p>
      </div>
      <div className="profile-links">
        <img src={HomeIcon} />
        <p>Switch account</p>
      </div>
      <div className="profile-links">
        <img src={HomeIcon} />
        <p>Sign out</p>
      </div>
      <div className="pro-line"></div>
      <div className="profile-links">
        <img src={HomeIcon} />
        <p>Purchase and memberships</p>
      </div>
      <div className="profile-links">
        <img src={HomeIcon} />
        <p>Your data in MeTube</p>
      </div>
      <div className="pro-line"></div>
      <div className="profile-links">
        <img src={HomeIcon} />
        <p>Appearence Device theme</p>
      </div>
      <div className="profile-links">
        <img src={HomeIcon} />
        <p>Language English</p>
      </div>
      <div className="profile-links">
        <img src={HomeIcon} />
        <p>Restricted Mode off</p>
      </div>
      <div className="profile-links">
        <img src={HomeIcon} />
        <p>Location India</p>
      </div>
      <div className="profile-links">
        <img src={HomeIcon} />
        <p>Keyboard shortcuts</p>
      </div>
      <div className="pro-line"></div>
      <div className="profile-links">
        <img src={HomeIcon} />
        <p>Settings</p>
      </div>
      <div className="pro-line"></div>
      <div className="profile-links">
        <img src={HomeIcon} />
        <p>Help</p>
      </div>
      <div className="profile-links">
        <img src={HomeIcon} />
        <p>Send feedback</p>
      </div>
      {/* </div> */}
      

    </div>
  )
}

export default ProfilePopUp