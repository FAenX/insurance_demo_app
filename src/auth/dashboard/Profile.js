import React from "react"
import {Card } from "@material-ui/core"
import Avatar from '@material-ui/core/Avatar';
import Backdrop from "../../components/BackDrop"



class Profile extends React.Component {

    constructor(props){
        super(props)
        this.state={
            backdrop: false,
            profile: {},
        }
        this.fetchUser=this.fetchUser.bind(this)
    }
    
    componentDidMount = () =>{
        this.tokens = JSON.parse(sessionStorage.getItem("tokens"))
        this.user = JSON.parse(sessionStorage.getItem("user"))
        if (
            this.user !== null && 
            this.user !== undefined && 
            this.user.length > 1)
            {
            this.fetchUser()
        }
        
    }

    async fetchUser(){
        this.setState({
            backdrop:true,
        })
         
        const request_refresh = fetch("/api/v1/users/token/refresh/", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
                },
            body: JSON.stringify({refresh: this.tokens.refresh})
        }).then(res=>res.json()).catch(err=>err)


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
            }
            return res
        }).catch(err=>{
            this.setState({
                backdrop:false,
            })
            return err
        })

        console.log(response)



        // const response_refresh = await request_refresh.then(res=>{
        //     this.setState({
        //         backdrop:false,
        //     })
        //    return res
        // }).catch(err=>{
        //     this.setState({
        //         backdrop:false,
        //     })
        //    return err
        // })

        // const tokens = this.tokens
        // const value = response_refresh.access
        // tokens["access"]=value
        // sessionStorage.setItem("tokens", JSON.stringify(tokens))
    }

    render(){
        return(
            <div className="profile">
                <Backdrop open={this.state.backdrop}/>
                <Avatar className="avatar"/>
                <Card variant="outlined" className="user-details">
                    <p>{this.state.profile.first_name}</p>
                    <p>{this.state.profile.last_name}</p>
                    <p>{this.state.profile.email}</p>
                    <p>{this.state.profile.phone_number}</p>
                </Card>
            </div>
        )
    }
}

export default Profile;