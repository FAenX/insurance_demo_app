import React from 'react';
import { Card, Alert } from "react-bootstrap"
import LoaderButton from "../LoaderButton"
import {withRouter} from "react-router-dom"


class Covers extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            isLoading:false,
            products:null,
            chosenProduct: null
           
        }
    }
    
    componentDidMount = () => {
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

    // handle redirect after response
    handleRedirect =()=>{
        this.props.history.push('/rates')
        
    }

    render(){
       
        let dataAlert;
        let covers; 
        let mainDescription;
        let bullets;
        let bull;
        let coverScope;
        
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


        if (this.state.products == null){
            dataAlert = <Alert variant="warning">Sorry no insurance products found</Alert>
        } else {
            covers = <div>
                    {this.state.products.map(i => {
                    return <div className="covers" key={i.id}> 
                            <Card >
                            <Card.Body className="cover-scope" id={i.alias}>
                                <Card.Title>{i.name}</Card.Title>
                                
                                    {description(i.description)}
                                    <div><Card.Text>{mainDescription}:</Card.Text></div>
                                    {bull.map(i=>{
                                        return <div key={i} >
                                                <ul>
                                                <li>{i}</li>
                                                </ul>
                                                </div>
                                    })} 
                                    {coverScope}
                                    
                                                                    

                                    
                                
                                <LoaderButton variant="primary" type="submit" name={i.name} 
                                            value={i.alias} isLoading={this.state.isLoading}  
                                            onClick={this.onSubmitHandler}>
                                    Get quote
                                </LoaderButton>
                            </Card.Body>
                            </Card>
                        </div>
                         })}
                    </div>    
        }

        return(
           <div>
               {dataAlert}
               {covers}


           </div>
        )
            
    }
}

export default withRouter(Covers);