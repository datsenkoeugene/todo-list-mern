import React from 'react'

const Alert = ({ text, alertStyle }) => {
  return <div className={`alert alert-${alertStyle} my-2`}>{text}</div>
}

export default Alert
