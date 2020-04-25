import React, { useState, useEffect } from 'react'
import axios from 'axios'

const UserPage = (props) => {
  const [userData, setUserData] = useState([])
  
  useEffect(() => {
    axios.get('/userLogs', {
      params: {
        user: props.user
      }
    })
    .then(({data}) => {
      console.log(data)
      setUserData(data)
    })
  }, [])

  return (
    <div>
      <div id="log_container">
        {userData.map((log, index) => <Log log={log} key={index} />)}
      </div>
    </div>
  )
}

const Log = (props) => {
  return (
    <div>
      {`${props.log.log_name} + ${props.log.remaining} + ${props.log.created_at}`}
    </div>
  )
} 

export default (props) => {
  return <UserPage user={'postman'}/>
}