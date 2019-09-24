import api from 'axios'

export async function login (email = '', passord = '') {
  const headers = {
    'Content-Type': 'application/json'
  }
  
  const response = await api.post(
    `${process.env.REACT_APP_URL_BACKEND}/auth/authenticate`, 
    {
      email: email,
      password: passord
    },
    {
      headers: headers
    }
  )

  return response
}

export async function validateToken (token = '') {
  const headers = {
    'authorization': `bearer ${token}`
  }

  const response = await api.post(
    `${process.env.REACT_APP_URL_BACKEND}/auth/authtoken`, 
    {},
    {
      headers: headers
    }
  )

  return response
}
