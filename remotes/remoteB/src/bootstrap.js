import React from 'react'
import App from './app'

function RemoteB(props) {
    console.log("remote b props ->",{...props});
  return (
    <div><App /></div>
  )
}

export default RemoteB