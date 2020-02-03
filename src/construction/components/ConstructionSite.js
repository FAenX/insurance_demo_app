import React from "react"
import clsx from "clsx"
import Logo from "../../assets/images/Logo.png"
import {WhatsApp, Facebook, Twitter, Instagram,
    Phone, Email,} from "@material-ui/icons"
import { IconButton, Card, List} from '@material-ui/core';
import AppBar from "@material-ui/core/AppBar"
import {Menu} from "@material-ui/icons"
import { Toolbar} from '@material-ui/core';
import "./ConstructionSite.scss"

class ConstructionSiteContent extends React.Component{
    constructor(props){
        super(props)
        this.state={
            flip: true,
            social:{
                facebook: false,
                twitter: false,
                instagram: false,
                whatsapp: false  
              }
        }
    }
    click=(event)=>{
        event.preventDefault()
        this.setState({flip: !this.state.flip})
      }

    socialEffect=(event)=>{
        event.preventDefault()
        let social = this.state.social
        let key = event.target.id
        
        social[key]=true
        this.setState({social})
    
        
        setTimeout(()=>{
          social[key]=false
          this.setState({social})
        }, 1000)
      }
      

    render(){
        return(
            <div
              className="under-construction">
              <div 
                className={clsx("logo", {
                  "flip": this.state.flip
                })} 
                onClick={this.click}
              >
                  <img alt="" src={Logo} />

              </div>
              <div className="text-content">
                <div id="company-name">TechRafiki</div>
                <div id="company-motto">A friendly name in tech</div>
                <div id="site-info">Website coming soon!</div>
              </div> 
              <div
              
                className="contacts">
                <div className="phone-numbers">
                  <div className="phone-number-header">Call Business Registration Service Customer Care</div>
                  <List id="phone-number">
                    <div className="contact">
                        <IconButton>
                          <Phone />
                        </IconButton>
                        +254 020 222 7461 / +254 020 225 1355 Extension No. 37591
                        </div>
                    <div className="contact">
                      <IconButton><Phone /></IconButton>+254 020 222 7461 /+254 020 225 1355 Extension No. 37110</div>
                    <div className="contact">
                      <IconButton><Email /></IconButton>Email: eo@brs.go.ke</div>
                  </List>
                </div>
                <div className="social-media">
                <Facebook 
                    id="facebook" 
                    className={clsx("social", {
                        "facebook": this.state.social.facebook
                    })} 
                    onClick={this.socialEffect} 
                  />
                  <WhatsApp 
                    id="whatsapp"  
                    onClick={this.socialEffect}
                    className={clsx("social", {
                      "whatsapp": this.state.social.whatsapp
                    })} 
                  />
                  <Twitter 
                    id="twitter"
                    onClick={this.socialEffect}
                    className={clsx("social", {
                          "twitter": this.state.social.twitter
                      })} 
                  />
                  <Instagram
                    id="instagram"  onClick={this.socialEffect}
                    className={clsx("social", {
                        "instagram": this.state.social.instagram
                    })} 
                  />
              
                </div>
              </div>
            </div>
        )
    }
}

class ConstructionSite extends React.Component {
    
    render(){
        const wideScreen = <Card 
                                variant="outlined"
                            >
                                <ConstructionSiteContent />
                            </Card>

        const mobileScreen = <ConstructionSiteContent /> 
                                
                           
        return(
            <div className="under-construction-wrapper">
            {/* //header */}
            <AppBar>
                <Toolbar className="top-nav">
                <div className="top-nav-menu-icon">
                    <IconButton>
                        <Menu/>
                    </IconButton>
                </div>            
                </Toolbar>
            </AppBar>
            {/* //body */}
            <div className="under-construction-wrapper-body">
                <div className="mobile-screen">{mobileScreen}</div>
                <div className="wide-screen">{wideScreen}</div>
            </div>
            </div>
            
        )
    }
}

export default ConstructionSite;