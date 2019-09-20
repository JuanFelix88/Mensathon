import React from 'react'

/**
 * @param {{name: string, role: string, leader?: boolean}} props 
 */
export default (props) => {
  let leader;
  if (!props.leader) { leader = false }
  else { leader = true }
  return (
    <div className="card-user-small" data-leader={leader}>
      <span>{props.name}</span>
      <span>{props.role}</span>
    </div>
  )
}