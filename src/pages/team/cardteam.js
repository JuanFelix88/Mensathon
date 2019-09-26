import React from 'react'

/**
 * @param {{name: string}} props 
 */
export default (props) => {
  return (
    <div className="card-team-small">
      <span>{props.name}</span>
    </div>
  )
}