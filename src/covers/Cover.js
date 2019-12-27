import React from 'react';
import { Alert } from "react-bootstrap"
import Paper from "@material-ui/core/Paper"
import {withRouter} from "react-router-dom"
import Button from "@material-ui/core/Button"
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

class Cover extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            subCategory: "",
            isLoading:false,
            products:null,
            chosenProduct: null
           
        }
    }

    componentWillUnmount =()=>{
        this.setState({
            subCategory: "",
            isLoading:false,
            products:null,
            chosenProduct: null
           
        })
    }

    componentDidMount =()=> {
        fetch("api/v1/products/", {
            method: "GET" 
         }).then((res)=>{
             if(res.status === 200){
                 res.json().then((data)=>{
                     console.log(data[0])
                     this.setState({
                         products: data[0].products
                     });
                 }).catch((error)=>{
                     console.log(error)
                     console.log(res)
                 })
             } else {
                 console.log(res)
             }
             console.log(res.status)
         }).catch((err)=>{
             console.log(err)
         })
    }

    // handle submit
    onSubmitHandler = (event) => {
        event.preventDefault();
        console.log(event.target.name)
        console.log(event.target.value)
        

        this.setState({
            isLoading: true,
            chosenProduct: {
                chosenProductName: event.target.name,
                chosenProductAlias: event.target.value
            }
        })
        console.log(this.state.chosenProduct)
        setTimeout(()=>{this.props.chosenProduct(this.state.chosenProduct)}, 1000)

       
        setTimeout(()=>{this.handleRedirect()}, 1000)


    }
    
    render(){

        let bullets;
        let bull; 
        let mainDescription; 
        let title;
        let subCategories; 
        let sub;

        const description = (text)=>{
            const splitText = text.split(':')
            mainDescription = splitText[0]
            bullets = splitText[1]
            
            if (bullets !== undefined){
                bull = bullets.split('.').filter((value, index, array)=>{
                    return value !== ""
                })
            } else {
                bull = []
            }
            console.log(bull)

        }

        try {
            sub = this.props.chosenSub.chosenSub;
            subCategories = this.props.subCategories;


            if (sub === "private"){
                title = "Private Vehicles"
            }else if( sub === "commercial"){
                title="Commercial vehicles"
            } else if (sub === "forhire"){
                title = "Vehicles For Hire"
            }
            
        } catch (error) {
            
            title = <Alert variant="danger">Sorry</Alert>

        }


        
        

        
        
        


        return(
            <div className="cover-wrapper">
                <div className="coversub-cover">
                
                <div >                    
                    <div className="coversub-header-text">
                        <div >
                            <h1>{title}</h1>
                            <h2></h2>
                        </div>                        
                        <div><Button variant="contained" color="secondary">Get started</Button></div>
                    </div>
                    
                </div>            
        </div>
                
                <div></div>
            </div>
        )
    }

}

export default withRouter(Cover);