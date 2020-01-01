import React from "react"
import { withRouter } from "react-router-dom"
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import DatePicker from "./DatePicker"
import {Paper} from "@material-ui/core"



class QuoteForm extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            vehicle: {
                email: "",
                cover: "",
                vehicleUse: "",
                vehicleMake: "",
                vehicleModel: "",
                yearOfManufacture: "",
                vehicleValue: "",
                regNo: "",
                coverStartDate: "",
                tonnes: "",
            },
        }
    }

    componentWillMount=()=>{
        this.chosenProduct = this.props.chosenProduct  
        const vehicle = this.state.vehicle

        vehicle["cover"]=this.chosenProduct.alias

        this.setState({
            vehicle,
        })
    }

    componentDidMount=()=>{
        if (this.chosenProduct.alias.startsWith("commercial") ){
            this.vehicleUse = "Commercial";
            
            
        } else if (this.chosenProduct.alias.startsWith("private") ){
            this.vehicleUse = "Private";
           
        }else if (this.chosenProduct.alias.startsWith("forhire") ){
            this.vehicleUse = "For Hire";
           
        }
    }

    validateForm=()=>{
        return this.state.vehicleValue && this.state.regNo && this.chosenProduct.alias
    }

    formOnChange=(event)=>{
        const vehicle = this.state.vehicle
        const name = event.target.name
        const value = event.target.value
        
        vehicle[name]=value

        this.setState({
            vehicle,
        })
    }

    selectedDate=(selectedDate)=>{
        const vehicle = this.state.vehicle

        vehicle["coverStartDate"]=selectedDate

        this.setState({
            vehicle,
        })
    }
   

    render(){  

        return(
            <Paper elevation={5} className="quote-form">
            <div className="quote-form">
                <div className="vehicle-controls">
                <FormControl className="vehicle-controls">
                    <InputLabel>vehicle make</InputLabel>
                    <Select
                        name="vehicleMake"
                        value={this.state.vehicle.vehicleMake}
                        onChange={this.formOnChange}
                    >
                    <MenuItem value="mercedes">Mercedes</MenuItem>
                    <MenuItem value="toyota">Toyota</MenuItem>
                    <MenuItem value="tesla">Tesla</MenuItem>
                    </Select>
                    <FormHelperText>Select your vehicle's manufacturer</FormHelperText>
                </FormControl>
                </div>
                <div className="vehicle-controls">
                <FormControl className="vehicle-controls">
                    <InputLabel>vehicle model</InputLabel>
                    <Select
                        name="vehicleModel"
                        value={this.state.vehicle.vehicleModel}
                        onChange={this.formOnChange}
                    >
                    <MenuItem value="c">C series</MenuItem>
                    </Select>
                    <FormHelperText>Select your vehicle's model</FormHelperText>
                </FormControl>
                </div>
                <div className="vehicle-controls">
                <FormControl className="vehicle-controls">
                    <TextField 
                        label="vehicle Reg NO:"
                        name="regNo"
                        value={this.state.vehicle.regNo}
                        onChange={this.formOnChange} 
                    />
                </FormControl>
                </div>
                <div className="vehicle-controls">
                <FormControl className="vehicle-controls">
                    <InputLabel>Year</InputLabel>
                    <Select
                        name="yearOfManufacture"
                        value={this.state.vehicle.yearOfManufacture}
                        onChange={this.formOnChange}
                    >
                    <MenuItem value="2019">2019</MenuItem>
                    </Select>
                    <FormHelperText>Select your vehicle's year of manufacture</FormHelperText>
                </FormControl>
                </div>
                <div className="vehicle-controls">
                <FormControl className="vehicle-controls">
                    <TextField 
                        label="vehicle value (KSH):"
                        name="vehicleValue"
                        value={this.state.vehicle.vehicleValue}
                        onChange={this.formOnChange} 
                    />
                </FormControl>
                </div>
                <div className="vehicle-controls">
                <FormControl className="vehicle-controls">
                    {/* date picker  */}
                    <DatePicker  selectedDate={this.selectedDate}/>
                    <FormHelperText>When do you want your cover to start?</FormHelperText>
                </FormControl>
                </div>
            </div>
        </Paper>
        )
    }
}

export default withRouter(QuoteForm);