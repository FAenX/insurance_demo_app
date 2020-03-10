import React from "react"
import {Paper, Button, FormControl, InputLabel, Select, MenuItem} from "@material-ui/core"
import {filterBySub} from "../../helpers/js/dataManipulation"
import "./Style.scss"


const InsuranceDetails =props=>{
    const error=(value)=>{
        if (value.length < 1){
            return true
        }
        return false
    }
    
    const products=JSON.parse(sessionStorage.getItem("products"))[0].products
    return(
        <Paper variant="elevation" elevation={3} className="quote-form">
            <div className="quote-form-sub-header ">Select Insurance Cover</div>
            <FormControl variant="outlined" className="form-controls">
                    <InputLabel  >
                        Insurance Cover
                    </InputLabel>
                    <Select
                        name="cover" 
                        value={props.vehicle.cover}
                        onChange={props.insuranceChangeListener}
                        labelWidth={120}
                        error={error(props.vehicle.cover)}
                    >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    {filterBySub(products, props.vehicle.vehicleUse).map(i=>{
                            return <MenuItem key={i.alias} value={i.alias}>{i.name} </MenuItem>
                        })} 
                    </Select>
                </FormControl>

                <Button 
                    variant="outlined"
                    className="request-button"
                    color="primary"
                    onClick={props.handleSubmit}
                >
                    Request
                    
                </Button>
                
        </Paper>
    )

}

export default InsuranceDetails