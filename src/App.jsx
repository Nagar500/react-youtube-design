import React from 'react'
import './App.css'
import Navbar from './component/nav/Navbar'
import Main from './component/main/Main'

const App = () => {
  const [profileStyle, setIsProfileStyle] = React.useState(false)
  const [notifinctionStyle, setNotificationStyle] = React.useState(false)
  const [uploadStyle, setUploadStyle] = React.useState(false)
  const [sidebarStyle, setSideBarStyle] = React.useState(false)
  const [voiceStyle, setVoiceStyle] = React.useState(false)

  const toggleStyleProfile = ()=>{
    if(!profileStyle){
      setNotificationStyle(false)
      setUploadStyle(false)
      setIsProfileStyle(true)
    }else{
      setIsProfileStyle(false)
    }
  }

  const toggleStyleNotiFication = ()=>{
    if(!notifinctionStyle){
      setUploadStyle(false)
      setIsProfileStyle(false)
      setNotificationStyle(true)
    }else{
      setNotificationStyle(false)
      
    }
  }

  const toggleStyleUpload = ()=>{
    if(!uploadStyle){
      setNotificationStyle(false)
      setIsProfileStyle(false)
      setUploadStyle(true)
    }else{
      setUploadStyle(false)
      
    }
  }

  const toggleSideBar = ()=>{
    if(!sidebarStyle){
      setSideBarStyle(true)
    }else{
      setSideBarStyle(false)
    }
  }

  const toggleVoice = ()=>{
    if(!voiceStyle){
      setVoiceStyle(true)
    }
  }
  return (
    <>
    <Navbar 
    toggleStyleProfile={toggleStyleProfile}
    toggleStyleNotiFication={toggleStyleNotiFication}
    toggleStyleUpload={toggleStyleUpload}
    toggleSideBar={toggleSideBar}
    toggleVoice={toggleVoice}/>
    <Main 
    profileStyle={profileStyle}
    notifinctionStyle={notifinctionStyle}
    uploadStyle={uploadStyle}
    sidebarStyle={sidebarStyle}
    voiceStyle={voiceStyle}/>
    </>
  )
}

export default App