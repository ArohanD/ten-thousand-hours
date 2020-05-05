import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './LogPage.css'

const LogPage = (props) => {
  const [log, setLog] = useState({})

  useEffect(() => {
    axios.get('/singleLog', {
      params: {
        id: 2
      }
    })
      .then(({ data }) => {
        setLog(data)
      })
  }, [])

  return (
    <div id={'log_container'}>
      <p className="log_text_default">
        {`${log.user} is tracking the skill ${log.log_name}. They have `}
      </p>
      <p className="log_text_hours">
        {`${log.remaining}`}
      </p>
      <p className="log_text_default">
        {`hours remaining.`}
      </p>
      <p className="log_text_default">
        {`Tracking since ${log.created_at}`}
      </p>
    </div>
  )
}

export default (props) => {
  const urlParams = new URLSearchParams(window.location.search);
  const log_id = urlParams.get('log_id')
  return <LogPage log_id={log_id} />
} 