import React from "react"
import { withRouter } from "react-router-dom"
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import DatePicker from "../helpers/DatePicker"
import {Paper} from "@material-ui/core"
import {filterBySub, filterByAlias} from "../helpers/js/dataManipulation"



class QuoteForm extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            vehicle: {
                email: "example.email.com",
                cover: "privatethirdonly",
                vehicleUse: "private",
                vehicleMake: "none",
                vehicleModel: "none",
                yearOfManufacture: "1990",
                vehicleValue: "100000",
                regNo: "kbk 100",
                coverStartDate: "today",
                tonnes: "",
            },
        }
    }

        

    UNSAFE_componentWillMount=()=>{
        this.chosenProduct = this.props.chosenProduct
        this.products = JSON.parse(sessionStorage.getItem("products"))
       
        if (this.chosenProduct==null){

           //
          
        }else{

            if (this.chosenProduct.alias.startsWith("commercial") ){
                this.vehicleUse = "commercial";
                
                
            } else if (this.chosenProduct.alias.startsWith("private") ){
                this.vehicleUse = "private";
               
            }else if (this.chosenProduct.alias.startsWith("forhire") ){
                this.vehicleUse = "forhire";
               
            }
            const vehicle = this.state.vehicle

            vehicle["cover"]=this.chosenProduct.alias
            vehicle["vehicleUse"] = this.vehicleUse

            this.setState({
                vehicle,
            })
        }
    }

    formOnChange=(event)=>{
        const vehicle = this.state.vehicle
        const name = event.target.name
        const value = event.target.value
        
        vehicle[name]=value

        this.setState({
            vehicle,
        })
        this.props.vehicleChangeListener(this.state.vehicle)
        this.props.productChangeListener(
            filterByAlias(this.products, this.state.vehicle.cover)
        )

        
    }

    selectedDate=(selectedDate)=>{
        const vehicle = this.state.vehicle

        vehicle["coverStartDate"]=selectedDate

        this.setState({
            vehicle,
        })
    }
    


    render(){
        let tonnes;

        if(this.state.vehicle.vehicleUse.startsWith("commercial")){
            tonnes=<div className="vehicle-controls"> 
                <FormControl className="vehicle-controls">
                    <InputLabel>vehicle load capacity</InputLabel>
                    <Select
                        name="tonnes"
                        value={this.state.vehicle.tonnes}
                        onChange={this.formOnChange}
                    >
                    <MenuItem value="3">3 tonnes and less</MenuItem>
                    <MenuItem value="38">3-8 tonnes</MenuItem>
                    <MenuItem value="810">8 to 10 tonnes</MenuItem>
                    </Select>
                    <FormHelperText>
                        Ho many tonnes does your vehicle carry?
                    </FormHelperText>
                </FormControl>
                </div>
        }
        

           
       
    
        return(
            <Paper elevation={5} className="quote-form-wrapper">
            <div className="quote-form">
                    <div className="vehicle-controls"> 
                    <FormControl className="vehicle-controls">
                        <InputLabel>vehicle use</InputLabel>
                        <Select
                            name="vehicleUse"
                            value={this.state.vehicle.vehicleUse}
                            onChange={this.formOnChange}
                        >
                        <MenuItem value="private">Private</MenuItem>
                        <MenuItem value="commercial">Commercial</MenuItem>
                        <MenuItem value="forhire">For Hire</MenuItem>
                        </Select>
                        <FormHelperText>
                            Select vehicle use
                        </FormHelperText>
                    </FormControl>
                    </div>
                    {tonnes}
                    <div className="vehicle-controls"> 
                    <FormControl className="vehicle-controls">
                    <InputLabel>Insurance Cover</InputLabel>
                        <Select                         
                            name="cover"                        
                            onChange={this.formOnChange}
                            value={this.state.vehicle.cover}                        
                        >
                            
                            {filterBySub(this.products, this.state.vehicle.vehicleUse).map(i=>{
                                return <MenuItem key={i.alias} value={i.alias}>{i.name} </MenuItem>
                            })} 
                        </Select>
                        
                        <FormHelperText>
                            Select insurance cover for your vehicle
                        </FormHelperText>
                    </FormControl>
                </div> 
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