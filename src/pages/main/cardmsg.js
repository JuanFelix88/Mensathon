import React from 'react'

/**
 * @param {{userName: string, msg: string}} props
 */
export default (props) => {
  /** @returns {[]} */
  function createArray (text) {
    return text.split(/\n/)
  }
  
  return (
    <div className="card-msg-medium">
      <div className="card-avatar-name">
        <div>
          <img alt="" src={`https://avatars2.githubusercontent.com/u/49664855?s=460&v=4`}/>
        </div>
        <span>{props.userName}</span>
      </div>
      <div className="msg-text">
        {/* <span>{props.msg}</span> */}
        {
          createArray(props.msg).map((text, i) => <span key={i}>{text}</span>)
        }
      </div>
    </div>
  )
}