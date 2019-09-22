import React, {useState, useEffect} from 'react'
import './style.css'

const colorLoad = '#eef6f7cd'

export default (props) => {
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1950);
  })

  function handleRouteChangeRegulations () {
    props.history.push('regulations')
  }

  return (
    loading ? (
      <div className="background-container">
        <div className="box-menu-main">
          <div className="container-img">
            <div className="img-circle-1">
              <div style={{backgroundColor: colorLoad, display: 'flex', borderRadius: 60, opacity: .98}}>
                <div className="loading-spa-hight" style={{width: 145, height: 145, borderRadius: 30, opacity: .98}}></div>
              </div>
            </div>
          </div>
          <div className="title">
            <div style={{width: 145, height: 30 , 
            margin: '0 auto', backgroundColor: colorLoad, display: 'flex', 
            borderRadius: 25,
            marginTop: 10, opacity: .98
            }}>
              <div className="loading-spa-hight" style={{width: '100%', height: '100%', borderRadius: 25, opacity: .98}}></div>
            </div>
          </div>
          <div className="title">
            <div style={{width: 160, height: 25, 
            margin: '0 auto', backgroundColor: colorLoad, display: 'flex', 
            borderRadius: 25,
            marginTop: 15
            }}>
              <div className="loading-spa-hight" style={{width: '100%', height: '100%', borderRadius: 25, opacity: .98}}></div>
            </div>
          </div>
          <div className="title">
            <div style={{width: 190, height: 20, 
            margin: '0 auto', backgroundColor: colorLoad, display: 'flex', 
            borderRadius: 25,
            marginTop: 15
            }}>
              <div className="loading-spa-hight" style={{width: '100%', height: '100%', borderRadius: 25, opacity: .98}}></div>
            </div>
          </div>
          <div className="title">
            <div style={{width: 150, height: 35, 
            margin: '0 auto', backgroundColor: colorLoad, display: 'flex', 
            borderRadius: 25,
            marginTop: 25
            }}>
              <div className="loading-spa-hight" style={{width: '100%', height: '100%', borderRadius: 25, opacity: .98}}></div>
            </div>
          </div>
          <div className="title">
            <div style={{width: 160, height: 35, 
            margin: '0 auto', backgroundColor: colorLoad, display: 'flex', 
            borderRadius: 25,
            marginTop: 10, opacity: .98
            }}>
              <div className="loading-spa-hight" style={{width: '100%', height: '100%', borderRadius: 25}}></div>
            </div>
          </div>
          <div className="title">
            <div style={{width: 130, height: 20, 
            margin: '0 auto', backgroundColor: colorLoad, display: 'flex', 
            borderRadius: 25,
            marginTop: 45, opacity: .98
            }}>
              <div className="loading-spa-hight" style={{width: '100%', height: '100%', borderRadius: 25}}></div>
            </div>
          </div>


        </div>
      </div>
    ):
    <div className="background-container">
      <div className="box-menu-main">
        <div className="container-img">
          <div className="img-circle-1">
            <div className="img-circle">
              <img src="https://avatars2.githubusercontent.com/u/49664855?s=460&v=4"/>
            </div>
          </div>
        </div>
        <div className="title">
          <h2>Juan Felix</h2>
          <div className="business-title">
            <img src="https://cdn.discordapp.com/attachments/620815054345994262/623370112241500171/bot-hack.png"/>
            <span>Front-end</span>
          </div>
          <h5>Welcome to hackathon 2019!</h5>
          <h5>Organized for Shawee</h5>
        </div>
        <div className="container-buttons">
          <button type="submit" className="button-jailson" style={{marginTop: 10, minHeight: 40}}>
            <h5>Team</h5>
          </button>
          <button type="submit" className="button-jailson" style={{marginTop: 10, minHeight: 40}}>
            <h5>Search</h5>
          </button>
        </div>
        <div id="regulations">
          <a style={{cursor: 'pointer'}} onClick={handleRouteChangeRegulations}>Regulations</a>
        </div>
        <div className="license-container" style={{marginTop: 15}}> 
          <p>Mensathon versão 1.0.1</p>
          <p>Mensathon 2019 © Todos os direitos reservados</p>
        </div>

      </div>
    </div>
  )
}