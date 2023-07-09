import React from 'react'
import './uploadpopup.css'
import HomeIcon from '../../../images/home.png'

const UploadPopUp = ( { uploadStyle } ) => {
  return (
    <div className='upload-popup'
    style={{display:uploadStyle ? 'block' : 'none'}}>
      <div className="upload-menu">
        <img src={HomeIcon}/>
        <p>Upload video</p>
      </div>
      <div className="upload-menu">
        <img src={HomeIcon}/>
        <p>Go live</p>
      </div>
      <div className="upload-menu">
        <img src={HomeIcon}/>
        <p>Create post</p>
      </div>
    </div>
  )
}

export default UploadPopUp