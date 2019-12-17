import React from 'react';
import { Card, Alert } from "react-bootstrap"
import LoaderButton from "./LoaderButton"
import {withRouter} from "react-router-dom"

class Covers extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            isLoading:false,
            products:null,
           
        }
    }
    
    componentDidMount = () => {
        fetch("api/v1/products/", {
           method: "GET" 
        }).then((res)=>{
            if(res.status === 200){
                res.json().then((data)=>{
                    console.log(data[1].products)
                    this.setState({
                        products: data[1].products
                    });
                }).catch((error)=>{
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
        console.log(event.target.name)
        console.log(event.target.id)

        this.setState({
            isLoading: true
        })

        this.props.chosenProduct(
                {
                chosenProductName: event.target.name,
                chosenProductAlias: event.target.id
            }
        )

       
        setTimeout(()=>{this.handleRedirect()}, 1000)


    }

    // handle redirect after response
    handleRedirect =()=>{
        this.props.history.push('/rates')
        
    }

    render(){
       
        let dataAlert;
        let covers;
        

        if (this.state.products == null){
            dataAlert = <Alert variant="warning">Sorry no insurance products found</Alert>
        } else {
            covers = this.state.products.map(i => {
            return <div className="covers" key={i.alias} > 
                    <Card >
                    <Card.Body>
                        <Card.Title>{i.name}</Card.Title>
                        <Card.Text>
                            {i.description}
                        </Card.Text>
                        <LoaderButton variant="primary" type="submit" name={i.name} 
                                    id={i.alias} isLoading={this.state.isLoading}  
                                    onClick={this.onSubmitHandler}>
                            Get quote
                        </LoaderButton>
                    </Card.Body>
                    </Card>
                    </div>
            })
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