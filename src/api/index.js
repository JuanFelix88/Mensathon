import api from 'axios'

// api.defaults.headers.common = {'Authorization': `bearer ${getTokenSession()}`}

function getTokenSession () {
  return `bearer ${localStorage.getItem('app_token')}`
}

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

export async function validateToken () {

  const response = await api.post(
    `${process.env.REACT_APP_URL_BACKEND}/auth/authtoken`, 
    {},
    {
      headers: {
        'authorization': getTokenSession()
      }
    }
  )

  return response
}

export async function getAvailableUsers () {
  const response = await api.get(
    `${process.env.REACT_APP_URL_BACKEND}/users/available`, 
    {
      headers: {
        'authorization': getTokenSession()
      }
    }
  )
  return response.data
}

export async function getAvailableTeams () {
  const response = await api.get(
    `${process.env.REACT_APP_URL_BACKEND}/teams/available`, 
    {
      headers: {
        'authorization': getTokenSession()
      }
    }
  )
  return response.data
}