import React from "react"
import VehicleDetails from "./quoteFormComponents/VehicleDetails"
import PersonalDetails from "./quoteFormComponents/PersonalDetails"
import SnackBar from "./SnackBar"
import InsuranceDetails from "./quoteFormComponents/InsuranceDetails"
import "./MotorInsuranceQuoteForm.scss"

class MotorInsuranceQuoteForm extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            //snackbar
            showSnackBar: false,
            //user
            loggedIn: false,
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
                first_name:"",
                last_name:"",
                email: "",
                phone: "",
                location: ""
            },
            res: {
                premium: "",
                status: "",
                message: ""
            }
        }

        this.requestQuotation = this.requestQuotation.bind(this)
    }

    componentDidMount=()=>{
        let user = JSON.parse(sessionStorage.getItem("user"))
        if (
            user !== null&&
            user !== undefined &&
            Object.keys(user).length > 1
            ){
           this.setState({
               user,
               loggedIn: true
           })
        }
    }

    //snackbar
    onCloseSnackBar=()=>{
        this.setState({
            showSnackBar: false
        })
    }

    async requestQuotation (){
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
                res,
                showSnackBar: true,
            })
            
            setTimeout(()=>{
                this.props.history.push("/quotation")
                this.props.closeDrawer()
            }, 1000)
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
        let alert = <SnackBar 
                        status={this.state.res.status}
                        message={this.state.res.message}
                        show={this.state.showSnackBar}
                        onClose={this.onCloseSnackBar}
                    />
        
        
        return(
                    <>
                    {alert}
                    <div className="form">
                    <PersonalDetails 
                        user={this.state.user}
                        userOnChangeListener={this.userOnChangeListener}
                        loggedIn={this.state.loggedIn}
                    />
                    <VehicleDetails 
                        vehicle={this.state.vehicle}
                        vehicleOnChangeListener={this.vehicleOnChangeListener}
                    />
                    <InsuranceDetails 
                        vehicle={this.state.vehicle}
                        insuranceChangeListener={this.insuranceChangeListener}
                        handleSubmit={this.requestQuotation}
                    />
                    </div>
                    </>
                       
             
        )
    }
}

export default MotorInsuranceQuoteForm