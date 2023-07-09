import React from 'react'
import './main.css'
import Videos from '../videos/Videos'
import SideBar from '../sidebar/SideBar'
import ProfilePopUp from '../popup/profile_pop_up/ProfilePopUp'
import NotiPopUp from '../popup/notification_pop_up/NotiPopUp'
import UploadPopUp from '../popup/upload_popup/UploadPopUp'
import SubHeader from '../sub-header/SubHeader'
import VoicePopUp from '../popup/voice_popup/VoicePopUp'

const Main = ( 
  { 
    profileStyle,
     notifinctionStyle,
      uploadStyle,
      sidebarStyle,
      voiceStyle 
  } ) => {
  return (
    <div className='main'>
      <SideBar sidebarStyle={sidebarStyle}/>
      <VoicePopUp voiceStyle={voiceStyle}/>
      <SubHeader sidebarStyle={sidebarStyle}/>
      <Videos sidebarStyle={sidebarStyle}/>
      <ProfilePopUp profileStyle={profileStyle}/>
      <NotiPopUp notifinctionStyle={notifinctionStyle}/>
      <UploadPopUp uploadStyle={uploadStyle}/>
      
    </div>
  )
}

export default Main