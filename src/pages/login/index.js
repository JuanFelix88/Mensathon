import React, { useEffect, useState  } from 'react'
import './style.css'
import logo from '../../assets/logo.svg'
import {Redirect} from 'react-router-dom'
import { login } from '../../api'

const noReferenceURL = ("#")

export default (props) => {
  // email input
  const [email, setEmail] = useState('')

  // password input
  const [password, setPassword] = useState('')

  // login state
  const [loggedIn, setLoggedIn ] = useState(false)

  // on error auth
  const [tokenValid, setTokenvalid] = useState(false)
  
  useEffect(() => {
    document.title = "Mensathon - Login"
    if (localStorage.getItem('app_token') === 'hukjkhkopop57954ww23s') {
      setTokenvalid(true)
      // props.history.push
      window.location.href = `/main`
    }
  }, [])

  function handleChangeEmail ({target}) {
    setEmail(target.value)
  }

  function handleChangePassword ({target}) {
    setPassword(target.value)
  }

  async function handleDoneLogin (e) {
    e.preventDefault()
    const response = await login(email, password)
    if (response.status === 400) return
    const { token } = response.data
    // console.log(response)
    localStorage.setItem('app_token', token)
    setLoggedIn(true)
  }

  return (
    loggedIn // conditional
    ? (
      <Redirect to="main"/>
    ) : tokenValid 
        ? <div className="login-container"></div>
        : (
    <div className="login-container">
      <div className="login-box">
        <div className="login-img">
          <img alt="" src={logo}/>
        </div>
        <form onSubmit={handleDoneLogin}>
          <div className="form-group" style={{color: '#fff'}}>
            <input value={email} onChange={handleChangeEmail} 
            className="form-control"
            placeholder="Enter email"
            style={{borderRadius: 20, marginTop: 10}}
            />
          </div>
          <div className="form-group" style={{color: '#fff'}}>
            <input value={password} onChange={handleChangePassword} 
            type="password" 
            className="form-control"
            style={{borderRadius: 20}}
            placeholder="Password"/>
          </div>
          <a className="link-forgoth-password" href={noReferenceURL}>Esqueci minha senha</a>
          <button type="submit" className="btn btn-primary" style={{marginTop: 10, minHeight: 40}}>
            Entrar
          </button>
          <p className="register-login">
          Não possui uma conta? <a className="link-forgoth-password" href={noReferenceURL}>Registre-se</a>
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