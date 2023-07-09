import React from 'react'
import './voicepopup.css'
import VoiceIcon from '../../../images/voice-search.png'

const VoicePopUp = ( { voiceStyle } ) => {

    const toogleCloseVoice = ()=>{
       document.getElementById('voice-popup').style.display = 'none'
       window.location.reload()
    }
  return (
    <div className='voice-popup' id='voice-popup'
    style={{display: voiceStyle ? 'block' : ''}}>
        <div className="close">
            <div className="close-btn" onClick={toogleCloseVoice}>X</div>
        </div>
        <div className="text">Listening...</div>
        <div className="voice-icon">
            <div className="voice-img">
            <img src={VoiceIcon} />
            </div>
        </div>
    </div>
  )
}

export default VoicePopUp