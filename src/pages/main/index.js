import React, { useState, useEffect } from 'react'
import './style.css'
import CardUser from './carduser'
import CardMore from './cardmore'
import CardTeam from './cardteam'
import Suggestion from './suggestion'
import CardMSG from './cardmsg'
import { validateToken, getAvailableUsers } from '../../api'

const searchsCommons = [
  "Connect Users",
  "My account",
  "Others teams",
  "DMC",
  "About us"
]

export default () => {
  // input searcher
  const [search, setSearch] = useState('')
  const [searchFocus, setSearchFocus] = useState(false)
  const [suggestions, setSuggestions] = useState([])

  // msgs
  const [msg, setMsg] = useState(
    [{userName: "Juan Felix", msg: 'Good Morning guys!'}]
  )

  // input msg
  const [inputMsg, setInputMsg] = useState('')

  // scroll chat
  const [scrollAmount, setScrollAmount] = useState(0)

  // users available
  const [availableUsers, setAvailableUsers] = useState([])

  const [loadingPage, setLoadingPage] = useState(true)

  function handleChangeMsg ({target}) {
    setInputMsg(target.value)
  }

  function handleSendMsg () {
    if (inputMsg === '') return
    setMsg([...msg, {userName: "Juan Felix", msg: inputMsg}])
    setInputMsg('')
    setTimeout( focusInNewMsg , 100)
  }

  function handleChangeSearcherText (value) {
    setSearch(
      value
    )
  }

  function handleInterationOnFocusSearcher ({target}) {
    handleChangeSearcherText(target.value)
    if (target.value === '') return handleInterationOffFocusSearcher()
    refreshSuggestions(target.value)
    setSearchFocus(true)
  }

  function handleInterationOffFocusSearcher () {
    setSearchFocus(false)
  }
  
  function handleGetKeyPressEvent (e) {
    if (e.which === 13 && e.ctrlKey) handleSendMsg()
  }

  function focusInNewMsg () {
    const chat = document.getElementById('chat-msg')
    const scrollHeight = chat.scrollHeight - chat.offsetHeight + 1
    if (scrollHeight <= 1) return
    chat.scrollBy({top: scrollHeight, behavior: "smooth"})
  }

  function handleOnScrollChat (e) {
    // console.log(e)
    // console.log(e.target.scrollTop)
    // console.log(e.target.scrollTop, e.target.offsetHeight)
    // console.log(e.target.scrollHeight - e.target.offsetHeight + 1)
    // console.log(`${e.target.offsetHeight / ((e.target.offsetHeight - e.target.scrollTop) / 100)}%`)
  }

  async function refreshSuggestions (textInput) {
    const regularExpression = textInput !== ''
      ? new RegExp(textInput.replace(/[\[\/\.\\()$^*+-]/g, ''), 'ig')
      : /[.]/g
    setSuggestions(searchsCommons.filter(item => {
      return regularExpression.test(item)
    }))
  }

  async function validateSession () {
    try {
      const response = await validateToken()
      if (response.status !== 200) return window.location.href = `/login`
      setLoadingPage(false)
    } catch (error) {
      window.location.href = `/login`
    }
  }

  async function handleGetAvailableUsers () {
    const { data } = await getAvailableUsers()
    setAvailableUsers(data)
  }

  useEffect(() => {
    validateSession()
    handleGetAvailableUsers()
    document.title = "Team - Mensathon"
  }, [])

  return (
    <div className="container-manager-user">
      { loadingPage ? <h4 style={{color: 'white', margin: 'auto auto'}}>Loading...</h4>
        : <>
          <header>
            {/* <img src={logo}/> */}
            <h1 className="team-name">Mensathon</h1>
            <div className="searcher-control">
              <input type="text" 
              value={search}
              placeholder="Press enter to search..." 
              className="searcher-app"
              onChange={handleInterationOnFocusSearcher}
              onBlur={handleInterationOffFocusSearcher}
              />
              <div className={`searcher-suggestion${!searchFocus ? '-disabled' : ''}`}>
                {
                  !searchFocus 
                    ? null /* none items */
                    : suggestions.length !== 0 /* request suggestions */
                      ? suggestions.map(text => <Suggestion text={text} func={() => handleChangeSearcherText(text)}/>)
                      : <>
                          <div className="suggestion-text-loading">
                            <span>Unfortunately, nothing can be found</span>
                          </div>
                        </>
                }
              </div>
            </div>
        </header>
        <div className="container-layout-down">
          <div className="menu-left">
            <div className="container-avatar">
              <div className="container-img">
                <div className="img-circle-1">
                  <div className="img-circle">
                    <img src="https://avatars2.githubusercontent.com/u/49664855?s=460&v=4"/>
                  </div>
                </div>
              </div>
            </div>
            <div className="container-dev-info">
              <span>Juan Felix</span>
              <span>Front-end</span>
            </div>
            <button className="button-jailson" style={{margin: '10px auto', minHeight: 40}}>
              <h5>Invite</h5>
            </button>
            <div className="container-team">
              <span>Team</span>
            </div>
            <div className="container-users">
              <CardUser name="Jailson" role="Product Owner" leader={true}/>
              <CardUser name="Victor" role="Front-end"/>
              <CardUser name="Cosme" role="Front-end"/>
              <CardUser name="Luis" role="DevOps"/>
            </div>
          </div>
          <div className="container-workspace">
            <div className="container-chat" onScroll={handleOnScrollChat}>
              <div className="container-msg" id="chat-msg">
                {
                  msg
                    .map(({userName, msg}) => {
                      return <CardMSG userName={userName} msg={msg}/>
                    })
                }
              </div>
              <footer className="container-input-msg">
                <div>
                  <textarea onKeyPress={handleGetKeyPressEvent} placeholder="Type some thing..." value={inputMsg} onChange={handleChangeMsg}>
                  </textarea>
                  <div>
                    <button onClick={handleSendMsg}>Send</button>
                  </div>
                </div>
              </footer>
            </div>
          </div>
          <div className="menu-right">
            <div className="menu-left-title">
              <span>Users available</span>
            </div>
            <div className="container-users" style={{maxHeight: 270}}>
              {
                availableUsers.map(({ nickName, job }) => (
                  <CardUser name={nickName} role={job}/>
                ))
              }
              {/* <CardUser name="Ana" role="Front-end"/>
              <CardUser name="Jéssica" role="Business"/>
              <CardUser name="Luis" role="DevOps"/>
              <CardUser name="Luis" role="DevOps"/>
              <CardUser name="Ana" role="Front-end"/>
              <CardUser name="Jéssica" role="Business"/>
              <CardUser name="Luis" role="DevOps"/>
              <CardUser name="Luis" role="DevOps"/>
              <CardUser name="Ana" role="Front-end"/>
              <CardUser name="Jéssica" role="Business"/>
              <CardUser name="Luis" role="DevOps"/>
              <CardUser name="Luis" role="DevOps"/>
              <CardUser name="Ana" role="Front-end"/>
              <CardUser name="Jéssica" role="Business"/>
              <CardUser name="Luis" role="DevOps"/>
              <CardUser name="Luis" role="DevOps"/>
              <CardUser name="Ana" role="Front-end"/>
              <CardUser name="Jéssica" role="Business"/>
              <CardUser name="Luis" role="DevOps"/>
              <CardUser name="Luis" role="DevOps"/>
              <CardUser name="Ana" role="Front-end"/>
              <CardUser name="Jéssica" role="Business"/>
              <CardUser name="Luis" role="DevOps"/>
              <CardUser name="Luis" role="DevOps"/> */}
              <CardMore/>
            </div>
            <div className="menu-left-title">
              <span>Others teams</span>
            </div>
            <div className="container-teams" style={{maxHeight: 270}}>
              <CardTeam name="Knife Party"/>
              <CardTeam name="Souls"/>
              <CardTeam name="Willians"/>
              <CardTeam name="Frontens"/>
              <CardTeam name="Knife Party"/>
              <CardTeam name="Souls"/>
              <CardTeam name="Willians"/>
              <CardTeam name="Frontens"/>
              <CardTeam name="Knife Party"/>
              <CardTeam name="Souls"/>
              <CardTeam name="Willians"/>
              <CardTeam name="Frontens"/>
            </div>
          </div>
        </div>
        </>
      }
    </div>
  )
}