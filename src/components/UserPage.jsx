import React, { useState } from 'react'
import axios from 'axios'

const UserPage = (props) => {
  const [userData, setUserData] = useState([])
  
  axios.get('/userLogs', {
    params: {
      user: props.user
    }
  })
  .then(({data}) => {
    setUserData(data)
  })

  return (
    <div>
      {userData.toString()}
    </div>
  )
}

export default (props) => {
  return <UserPage user={'postman'}/>
}