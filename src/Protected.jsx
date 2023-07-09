import React from 'react'
import { useNavigate } from 'react-router-dom';

const Protected = (props) => {
  const { Comp } = props;
  const navigate = useNavigate()
  React.useEffect(()=>{
      let userId = localStorage.getItem('userId')
      if(!userId){
          navigate('/')
      }
  })
  return (
    <div>
      <Comp/>
    </div>
  )
}

export default Protected