import React, { useEffect, useState  } from 'react'
import './style.css'
import { Redirect } from 'react-router-dom'
const jLog = require('./info.json')

export default () => {
  const [loading, setLoading] = useState(true)
  const [linkToMenu, setLinkToMenu] = useState(false)

  useEffect(() => {
    console.log(jLog)
    setTimeout(() => {
      setLoading(false)
    }, 2500);
  })

  function isDateOrNotTransformInBRL (text = '') {
    if (text.split('-').length !== 3) {return text}
    else {
      return text
        .split('-')
        .reverse()
        .join('/')
    }
  }

  function handleDoneForm () {
    setLinkToMenu(true)
  }

  return (
    linkToMenu ? <Redirect to="/main" />
    :
    <div className="background-container">
      <div className="box-container">
        <div className="title-container">
          {
            loading 
            ?<div style={{width: 'auto'}}>
              <div className="loading-spa" style={{width: 240, height: 25, marginTop: 5}}></div>
            </div>
            : <h3>Event information</h3>
          }
        </div>
        <div className="event-info">
        {
          loading ? 
          <div style={{width: '100%'}}>
            <div className="loading-spa" style={{width: 220, height: 15, marginTop: 20}}></div>
            <div className="loading-spa" style={{width: 210, height: 15, marginTop: 20}}></div>
            <div className="loading-spa" style={{width: 280, height: 15, marginTop: 20}}></div>
            <div className="loading-spa" style={{width: 270, height: 15, marginTop: 20}}></div>
            <div className="loading-spa" style={{width: 160, height: 15, marginTop: 20}}></div>
            <div className="loading-spa" style={{width: 240, height: 15, marginTop: 20}}></div>
            <div className="loading-spa" style={{width: 220, height: 15, marginTop: 20}}></div>
            <div className="loading-spa" style={{width: 205, height: 15, marginTop: 20}}></div>
            <div className="loading-spa" style={{width: 160, height: 15, marginTop: 20}}></div>
            <div className="loading-spa" style={{width: 240, height: 15, marginTop: 20}}></div>
            <div className="loading-spa" style={{width: 290, height: 15, marginTop: 20}}></div>
          </div>
          : jLog.map(({title, value}) => ( 
            <p className="info-map">
              <span>{title}</span>: <span>{isDateOrNotTransformInBRL(value)}</span>
            </p>
            ))
        }
        </div>
        <div className="buttons-container-info-event">
          {
            loading ? /* projeta um load */
            <div style={{display: 'flex', flexDirection: 'row-reverse'}}>
              <div className="loading-spa" style={{width: 140, height: 40, margin: '0 5px'}}></div>
              <div className="loading-spa" style={{width: 140, height: 40, margin: '0 5px'}}></div>
            </div> : 
            <>
            <button type="submit" onClick={handleDoneForm} className="btn btn-secondary" style={{width: 140}}>
              Retornar
            </button>
            {/* <button  className="btn btn-secondary" style={{width: 140}}>
              Cancelar
            </button> */}
            </>
          }
        </div>

      </div>
    </div>
  )
}