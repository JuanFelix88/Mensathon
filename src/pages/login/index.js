import React, { useEffect, useState  } from 'react'
import './style.css'
import logo from '../../assets/logo.svg'
import {Redirect} from 'react-router-dom'

export default () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loggedIn, setLoggedIn ] = useState(false)
  const [tokenValid, setTokenvalid] = useState(false)
  
  useEffect(() => {
    if (localStorage.getItem('app_token') === 'hukjkhkopop57954ww23s') {
      setTokenvalid(true)
      window.location.href = "http://localhost:3000/main"
    }
  }, [])

  function handleChangeEmail ({target}) {
    setEmail(target.value)
  }

  function handleChangePassword ({target}) {
    setPassword(target.value)
  }

  function handleDoneLogin () {
    localStorage.setItem('app_token', 'hukjkhkopop57954ww23s')
    setLoggedIn(true)
  }

  return (
    loggedIn ? (
      <Redirect to="main"/>
    ) : tokenValid 
        ? <div className="login-container"></div>
        : (
    <div className="login-container">
      <div className="login-box">
        <div className="login-img">
          <img src={logo}/>
        </div>
        <form onSubmit={handleDoneLogin}>
          <div className="form-group" style={{color: '#fff'}}>
            {/* <label>Email</label> */}
            <input value={email} onChange={handleChangeEmail} className="form-control"
            placeholder="Enter email"
            style={{borderRadius: 20, marginTop: 10}}
            />
          </div>

          <div className="form-group" style={{color: '#fff'}}>
            {/* <label>Password</label> */}
            <input value={password} onChange={handleChangePassword} type="password" 
            className="form-control"
            style={{borderRadius: 20}}
            placeholder="Password"/>
          </div>
          <a className="link-forgoth-password" href="#">Esqueci minha senha</a>
          <button type="submit" className="btn btn-primary" style={{marginTop: 10, minHeight: 40}}>
            Entrar
          </button>
          <p className="register-login">
          Não possui uma conta? <a className="link-forgoth-password" href="#">Registre-se</a>
          </p>
        </form>
        <div className="license-container"> 
          <p>Mensathon versão 1.0.1</p>
          <p>Mensathon 2019 © Todos os direitos reservados</p>
        </div>
      </div>
    </div>
    )
  )
}