import React from "react"
import {Paper, FormControl, InputLabel, Select, MenuItem} from "@material-ui/core"
import {filterBySub} from "../helpers/js/dataManipulation"


class InsuranceDetails extends React.Component{
    constructor(props){
        super(props)
        this.state={

        }
    }

    render(){
        
        const products=JSON.parse(sessionStorage.getItem("products"))[0].products
        return(
            <Paper variant="elevation" elevation={3} className="swipeable-quote-form-form">
                <div className="swipeable-quote-form-content">
                <div className="swipeable-quote-form-sub-header sliding-effect">Select Insurance Cover</div>
                <FormControl variant="outlined" className="form-controls sliding-effect">
                        <InputLabel  >
                            Insurance Cover
                        </InputLabel>
                        <Select
                            name="cover" 
                            value={this.props.vehicle.cover}
                            onChange={this.props.insuranceChangeListener}
                            labelWidth={120}
                        >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        {filterBySub(products, this.props.vehicle.vehicleUse).map(i=>{
                                return <MenuItem key={i.alias} value={i.alias}>{i.name} </MenuItem>
                            })} 
                        </Select>
                    </FormControl>
                    
                    </div>
                    
            </Paper>
        )
    }
}

export default InsuranceDetails