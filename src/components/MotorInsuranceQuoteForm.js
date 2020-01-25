import React from "react"
import {withRouter} from "react-router-dom"
import Drawer from '@material-ui/core/SwipeableDrawer';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import {Button, AppBar, Backdrop} from "@material-ui/core"
import VehicleDetails from "./VehicleDetails"
import PersonalDetails from "./PersonalDetails"
import Card from "@material-ui/core/Card"
import SnackBar from "./SnackBar"
import InsuranceDetails from "./InsuranceDetails"




class MotorInsuranceQuoteForm extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            //snackbar
            showSnackBar: false,
            BackDrop: false,

            vehicle: {
                
                cover: "privatethirdpartyonly",
                vehicleUse: "private",
                vehicleMake: "Tesla",
                vehicleModel: "Model Y",
                yearOfManufacture: "2020",
                vehicleValue: "1400000",
                regNo: "kbk 100",
                coverStartDate: "today",
                tonnes: "",
            },
            user: {
                first_name:"First name Last name",
                last_name:"First name Last name",
                email: "email@example.com",
                phone: "0712 345 678",
                location: "Nairobi"
            },
            res: {
                premium: ""
            }
        }

        this.requestQuotation = this.requestQuotation.bind(this)
    }

    async requestQuotation (){
        this.setState({
            BackDrop: true,
        })

        const url = "api/v1/quotes/quote/";
        const request =fetch(url, {
            method: 'POST',  
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
              },
            body: JSON.stringify(this.state.vehicle),
        }).then(
            (res)=> res.json()
        ).catch(
            (err) => err
        );        
        
        const response = await request
        
        if(response.status==="success"){
            let res = this.state.res
            res["premium"]=response.data
            res["status"]="success"
            res["message"]="Request was sucessfull"
            
            this.setState({
                showSnackBar: true,
                BackDrop: false,
                res,
            })
            setTimeout(()=>{this.props.history.push("/quotation")}, 3000)
            sessionStorage.setItem("temp_user", JSON.stringify(this.state.user))
            sessionStorage.setItem("vehicle", JSON.stringify(this.state.vehicle))
            sessionStorage.setItem("response", JSON.stringify(this.state.res))
            
        }else if(response.status==="error"){
            let res = this.state.res
            res["premium"]=response.data
            res["status"]="error"
            res["message"]=`error ${response.error}`
            this.setState({
                res,
                showSnackBar: true,
                BackDrop: false,
            })
        }else{
            let res = this.state.res
            res["premium"]=response.data
            res["status"]="error"
            res["message"]=`error ${response.error}`
            this.setState({
                res,
                showSnackBar: true,
                BackDrop: true,
            })
        }
    }

    vehicleOnChangeListener=(event)=>{
        const vehicle = this.state.vehicle
        let name = event.target.id
        if (name === undefined){
            name = event.target.name
        }
        const value = event.target.value
        
        vehicle[name]=value

        this.setState({
            vehicle,
        })
        
    }

    insuranceChangeListener=(event)=>{
        const vehicle = this.state.vehicle
        let name = event.target.name
        const value = event.target.value
        
        vehicle[name]=value

        this.setState({
            vehicle,
        })
    }

    userOnChangeListener=(event)=>{
        const user = this.state.user
        const name = event.target.id
        const value = event.target.value
        
        user[name]=value

        this.setState({
            user,
        })
        
    }


   
    render(){
        return(
            <Drawer 
                open={this.props.open}
                onClose={this.props.toggleDrawer(false)}
                onOpen={this.props.toggleDrawer(true)}
            >
                <div  
                    className="swipeable-quote-form" 
                >
                    <AppBar className="close-btn-wrapper" 
                        onClick={this.props.toggleDrawer(false)}
                    >
                        <div className="close-btn">
                            <MenuOpenIcon color="primary" />
                        </div>
                        <div className="sliding-effect appbar-title">Request Quotation</div>
                    </AppBar>
                    <div className="form">
                    <PersonalDetails 
                        user={this.state.user}
                        userOnChangeListener={this.userOnChangeListener}
                    />
                    <VehicleDetails 
                        vehicle={this.state.vehicle}
                        vehicleOnChangeListener={this.vehicleOnChangeListener}
                    />
                    <InsuranceDetails 
                        vehicle={this.state.vehicle}
                        insuranceChangeListener={this.insuranceChangeListener}
                    />

                    <Card variant="outlined" className="request-button">
                        <Button 
                            variant="contained" 
                            color="primary"
                            onClick={this.requestQuotation}
                        >
                            Request
                            
                        </Button>
                    </Card>
                    </div>
                       
                </div>
                <Backdrop open={this.state.BackDrop}/>
                <SnackBar 
                    status={this.state.res.status} 
                    message={this.state.res.message} 
                    show={this.state.showSnackBar}
                />
               
            </Drawer>
        )
    }
}

export default withRouter(MotorInsuranceQuoteForm)