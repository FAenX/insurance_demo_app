import React from 'react';
import { Form, Alert } from "react-bootstrap"
import LoaderButton from "./LoaderButton"

class Rates extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            email: "",
            carValue: "",
            cover: "",
            regNo: "",
            responseData: "",
            isLoading:false
        }
    }
    
    componentDidMount = () => {
        this.setState({
           cover: "privatethirdpartyonly",
           carValue: 100000,
           regNo: "KBK 200"
       })
    }


    onSubmitHandler = (event) => {
        this.setState({isLoading:true})
        event.preventDefault();
        const data = {value: this.state.carValue, cover: this.state.cover};

        const url = "api/v1/quotes/quote/";
        const response = fetch(url, {
            method: 'POST',  
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
              },
            body: JSON.stringify(data),

        }).then(
            (res)=> res
        ).catch(
            (err) => err
        );

        response.then((res)=>{
            res.json().then((res) =>{
            
            if (res.status === "success"){
                this.setState({
                    responseData: res.data
                })
                const data = {premium: res.data, registration: this.state.regNo, value: this.state.carValue, cover: this.state.cover }
                this.props.handleRequest(data)
                setTimeout(() => this.handleRedirectOnResponse(), 3000)

            } else if (res.status === "error"){
                this.setState({
                    responseData: res.error
                })
                this.setState({isLoading:false})
            }else {
                console.log(res)
                this.setState({isLoading:false})
            }
        }).catch(err=>{
            this.setState({
                responseData: res.status,
            })
            this.setState({isLoading:false})
        })
        }).catch((err)=>{
            console.log(`err: ${err}`)
            this.setState({isLoading:false})
        });

    }

    onValueChangeHandler = (event) => {
        event.preventDefault()
        console.log(event.target.value)
        this.setState({
            carValue: event.target.value
        })
    }

    onEmailChangeHandler = (event) => {
        event.preventDefault()
        console.log(event.target.value)
        this.setState({
            email: event.target.value
        })
    }

    onProductChangeHandler = (event) => {
        event.preventDefault()
        this.setState({
            cover: event.target.value
        })
       
    }

    onRegChangeHandler = (event) => {
        event.preventDefault()
        this.setState({
            regNo: event.target.value
        })
       
    }

    handleRedirectOnResponse =()=>{
        this.props.history.push('/quotation')
        
    }

    validateForm=()=>{
        return this.state.carValue && this.state.regNo && this.state.cover
    }
    render(){

        let tones;
        let quoteAlert;
        
        if (this.state.cover.startsWith("commercial") ){
            tones = <div className="quote-form">
                    
                    <Form.Label>Load size</Form.Label>
                    <Form.Control as="select">
                        <option>3 tones</option>
                    </Form.Control>
                    </div>
            
        } 

        if (this.state.responseData && this.state.responseData !== "something went wrong" && this.state.responseData !== "Working on it" && this.state.responseData !== 404){
            quoteAlert = <Alert variant="success"> Successfull. Redirecting to quotation</Alert>
        } else if (this.state.responseData && this.state.responseData === "something went wrong"){
            quoteAlert = <Alert variant="danger"> Error</Alert>
        } else if (this.state.responseData && this.state.responseData === "Working on it"){
            quoteAlert = <Alert variant="warning">Sorry the feature is not available yet</Alert>
        } else if (this.state.responseData && this.state.responseData === 404){
            quoteAlert = <Alert variant="danger">{ this.state.responseData }</Alert>
        }

        return(
            <div className="form">
                <div>{quoteAlert}</div>
            <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" onChange= {this.onEmailChangeHandler} />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Select Motor insurance product</Form.Label>
                <Form.Control as="select" onChange={this.onProductChangeHandler}>
                    <option value="privatethirdpartyonly">Private third party only</option>
                    <option value="privatethirdpartyfireandtheft">Private third party fire and theft</option>
                    <option value="privatecomprehensive">Private Comprehensive</option>
                    <option value="commercialthirdpartyonly">Commercial Third party only</option>
                    <option value="commercialthirdpartyfireandtheft">Commercial third party fire and theft</option>
                    <option value="commercialcomprehensive">Commercial comprehensive</option>
                    <option value="">For hire Third party only</option>
                    <option value="">For hire Third party fire and theft</option>
                    <option value="">For hire Comprehensive</option>
                </Form.Control>
                <Form.Label>Vehicle registration</Form.Label>
                <Form.Control size="lg" type="text" placeholder= {this.state.regNo} />
                <Form.Label>Vehicle value</Form.Label>
                <Form.Control onChange= {this.onValueChangeHandler} size="lg" type="text" placeholder={this.state.carValue} />
                {tones}
            </Form.Group>
            </Form>
            
                
                <LoaderButton variant="primary" type="submit" isLoading={this.state.isLoading} disabled={!this.validateForm()} onClick={this.onSubmitHandler}>
                        Submit
                </LoaderButton>
            
            
            </div>
        )
    }
}

export default Rates;