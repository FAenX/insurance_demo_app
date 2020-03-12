import React, { useState, useEffect, useCallback } from "react"
import {Card, Toolbar } from "@material-ui/core"
import Backdrop from "../../../../components/BackDrop"
import {List, ListItem} from "@material-ui/core"
import SignInAlert from "../../../../components/SignInAlert"
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';

const Profile =props=> {
    const [fetched, setFetched]=useState(false)
    const [backdrop, setBackdrop]=useState(false)
    const [user, setUser]=useState({})
    const [tokens, setTokens]=useState({})

    const refreshToken=async()=>{
        const request_refresh = fetch("/api/v1/users/token/refresh/", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
                },
            body: JSON.stringify({refresh: this.tokens.refresh})
        }).then(res=>res.json()).catch(err=>err)
        const response_refresh = await request_refresh.then(res=>{
            setBackdrop(true)
        return res
        }).catch(err=>{
           setBackdrop(false)
        return err
        },[tokens])

        //rewrite tokens to session
        const newTokens = tokens
        
        const value = response_refresh.access
        newTokens["access"]=value
        sessionStorage.setItem("tokens", JSON.stringify(newTokens))
        ////
        console.log(response_refresh) 
       
    }
    
    useEffect(()=>{
        const tokens = JSON.parse(sessionStorage.getItem("tokens"))
        console.log(tokens)
        const user = JSON.parse(sessionStorage.getItem("user"))
        console.log(user)
        if (
            user == null || 
            user === undefined ||
            Object.keys(user).length < 1)
            {
            setFetched(false)
            // fetchUser()
        }else{
            setTokens(tokens)
            setFetched(true)
            setUser(user)
        }
        
    }, [])
    
    const profile =args=>{
        if (
            tokens == null || 
            tokens === undefined ||
            Object.keys(tokens).length < 1){
            return <SignInAlert />
        }
        else if (
            user == null || 
            user === undefined ||
            Object.keys(user).length < 1){
            return <SignInAlert />

        }

        else if (fetched){
            return  <Card variant="outlined" className="user-details">
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
    }

    return(
        <div className="profile">
            <Backdrop open={backdrop}/>
                <Toolbar className="heading">
                    Profile
                    <VerifiedUserIcon />
                </Toolbar>
            
            {profile()}
            
        </div>
    )
    
}

export default Profile;