import React from "react"
import {Card } from "@material-ui/core"
import Avatar from '@material-ui/core/Avatar';
import Backdrop from "../../components/BackDrop"
import {List, ListItem} from "@material-ui/core"



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
        const user = JSON.parse(sessionStorage.getItem("user"))
        let userDetails;
        if (user !== null ){
            userDetails = <Card variant="elevated" className="user-details">
                                    <List>
                                    <ListItem>{user.first_name}</ListItem>
                                    <hr className="divider" />
                                    <ListItem>{user.last_name}</ListItem>
                                    <hr className="divider" />
                                    <ListItem>{user.email}</ListItem>
                                    <hr className="divider" />
                                    <ListItem>{user.phone_number}</ListItem>
                                    </List>
                                    
                                </Card>
        }else{
            userDetails = <Card variant="elevated" className="user-details">
                                    <List>
                                    <ListItem>Login</ListItem>
                                    
                                    </List>
                                    
                                </Card>
        }

        
        
        return(
            <div className="profile">
                <Backdrop open={this.state.backdrop}/>
                <Avatar className="avatar"/>
                {userDetails}
                
            </div>
        )
    }
}

export default Profile;