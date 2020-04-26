import React, { useState, useEffect } from 'react'
import axios from 'axios'

const LogPage = (props) => {
  const [log, setLog] = useState({})

  useEffect(() => {
    axios.get('/singleLog', {
      params: {
        id: 2
      }
    })
    .then(({data}) => {
      setLog(data)
    })
  }, [])

  return (
    <div>
      {`${log.user} ${log.log_name} ${log.remaining} ${log.created_at}`}
    </div>
  )
}

export default (props) => {
  return <LogPage log_id={2} />
} 