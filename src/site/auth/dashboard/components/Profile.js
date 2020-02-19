import React from "react"
import {Card, Toolbar } from "@material-ui/core"
import Avatar from '@material-ui/core/Avatar';
import Backdrop from "../../../../components/BackDrop"
import {List, ListItem} from "@material-ui/core"
import SignInAlert from "../../../../components/SignInAlert"
import clsx from "clsx";
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';



class Profile extends React.Component {

    constructor(props){
        super(props)
        this.state={
            display: true,
            fetched: false,
            backdrop: false,
            profile: {},
        }
        this.fetchUser=this.fetchUser.bind(this)
        this.refreshToken = this.refreshToken.bind(this)
    }
    
    componentDidMount = () =>{
        this.tokens = JSON.parse(sessionStorage.getItem("tokens"))
        console.log(this.tokens)
        this.user = JSON.parse(sessionStorage.getItem("user"))
        console.log(this.user)
        if (
            this.user == null || 
            this.user === undefined ||
            Object.keys(this.user).length < 1)
            {
            this.setState({
                fetched: false
            })
            this.fetchUser()
        }else{
            this.setState({
                fetched: true
            })
        }
        
    }
    async refreshToken(){
       
        const request_refresh = fetch("/api/v1/users/token/refresh/", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
                },
            body: JSON.stringify({refresh: this.tokens.refresh})

        }).then(res=>res.json()).catch(err=>err)
        const response_refresh = await request_refresh.then(res=>{
            this.setState({
                backdrop:false,
            })
        return res
        }).catch(err=>{
            this.setState({
                backdrop:false,
            })
        return err
        })

        //rewrite tokens to session
        const tokens = this.tokens
        
        const value = response_refresh.access
        tokens["access"]=value
        sessionStorage.setItem("tokens", JSON.stringify(tokens))
        ////
        console.log(response_refresh) 
        this.fetchUser()
        
    }

    async fetchUser(){
        
        if(this.tokens !== null){
            this.setState({
                backdrop:true,
            })
            const request = fetch("/api/v1/users/profile/", {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${this.tokens.access}`
                    },
            }).then(res=>res.json()).catch(err=>err)
    
            const response = await request.then(res=>{
                this.setState({
                    backdrop:false,
                })
                if (res.code !== "token_not_valid"){
                    sessionStorage.setItem("user", JSON.stringify(res))
                    this.setState({
                        fetched: true
                    })
                }else{
                    this.refreshToken()
                }
                
                //return res
            }).catch(err=>{
                return err
            })
            console.log(response)
        }
        
    }

    render(){
        //const tokens = JSON.parse(sessionStorage.getItem("tokens"))
        const user = JSON.parse(sessionStorage.getItem("user"))
        let userDetails;
        if (
            this.tokens == null || 
            this.tokens === undefined ||
            Object.keys(this.tokens).length < 1){
            userDetails = <SignInAlert />

        }
        if (
            this.user == null || 
            this.user === undefined ||
            Object.keys(this.user).length < 1){
            userDetails = <SignInAlert />

        }

        if (this.state.fetched){
            userDetails = <Card variant="outlined" className="user-details">
                                <List>
                                <ListItem>{user.first_name} {user.last_name}</ListItem>
                                <hr className="divider" />
                                <ListItem>{user.email}</ListItem>
                                <hr className="divider" />
                                <ListItem>Text</ListItem>
                                <hr className="divider" />
                                <ListItem>Text</ListItem>
                                <hr className="divider" />
                                </List>
                            </Card>
        }

        return(
            <div className={clsx("profile",{
                "display-none": !this.state.display,
            })}>
                <Backdrop open={this.state.backdrop}/>
                
                
                    <Toolbar className="heading">
                        Profile
                        <VerifiedUserIcon />
                    </Toolbar>
                
                {userDetails}
                
            </div>
        )
    }
}

export default Profile;