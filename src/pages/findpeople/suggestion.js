import React from 'react'

/**
 * @param {{text: string, func: function}} props
 */
export default (props) => {
  return (
    <div onClick={() => props.func()} className="suggestion-text">
      <span>{props.text}</span>
    </div>
  )
}