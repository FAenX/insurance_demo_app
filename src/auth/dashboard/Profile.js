import React from "react"
import {Card } from "react-bootstrap"


class Profile extends React.Component {

    constructor(props){
        super(props)
        this.state={
            profile: {},
        }
    }
    
    componentDidMount = () =>{
        const accessToken = sessionStorage.getItem("access")
        const refresh = sessionStorage.getItem("refresh")

        //////////////////////
        const refreshToken = fetch("/api/v1/users/token/refresh/", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                    },
                body: JSON.stringify({refresh: refresh})
            })
        
            
        const getUserData = fetch("/api/v1/users/profile/", {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`
                    },
            })
       
        getUserData.then(res=>{
            res.json()
            .then(data=>{              
                
                if (data.code === "token_not_valid"){
                    refreshToken.then(res=>{
                        if (res.status === 200){
                            res.json().then(data=>{
                               localStorage.setItem("access", data.access)
                               this.componentDidMount()
                            })
                        }else{
                            //tell the dashboard that the user is logged out
                        }
                    
                    
                    }).catch(err=>console.log(err));
                }else{
                    this.setState({
                        profile: data,
                    })
                }
            }).catch(err=>console.log(err));
        }).catch(err=>console.log(err));

    }

    render(){
        return(
            <div className="profile">
                <Card>
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