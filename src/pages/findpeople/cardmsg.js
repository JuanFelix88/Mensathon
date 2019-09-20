import React, { useState } from 'react'

/**
 * @param {{userName: string, msg: string}} props
 */
export default (props) => {
  return (
    <div className="card-msg-medium">
      <div className="card-avatar-name">
        <div>
          <img src="https://avatars2.githubusercontent.com/u/49664855?s=460&v=4"/>
        </div>
        <span>{props.userName}</span>
      </div>
      <div className="msg-text">
        <span>{props.msg}</span>
      </div>
    </div>
  )
}