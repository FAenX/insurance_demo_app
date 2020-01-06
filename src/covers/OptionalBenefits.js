import React from "react"
import {ListItem, Paper, Select, InputLabel, FormControl} from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';


class OptionalBenefits extends React.Component {
    constructor(props){
        super(props)
        this.state={
            courtesyCarOption:"",
        }
    }
    handleSelect=()=>{

    }

    render(){
        const options = ["AA Membership/road rescue", "Political violence", "excess protector", "Forced ATM withdrawal"]

        return(<Paper className="q-content" variant="outlined" id="optional-benefits">
                <div className="q-content-sub" variant="outlined">
                    <p>Optional Benefits </p>
                    <p>(Any optional benefit selected means additional premium)</p>                
                </div>
                <hr className="divider"></hr>  
                 {/*ooptional benefits */}
                 <div className="optional-benefits-listitems">
            <List >
            {options.map(value => {
            const labelId = `checkbox-list-label-${value}`;

            return(
               
                <ListItem key={value} dense  button  onClick={this.handleSelect}>
                <ListItemIcon>
                <Checkbox
                    checked={false}
                    tabIndex=""
                    disableRipple
                />
                </ListItemIcon>
                <ListItemText 
                    id={labelId} 
                    primary={value}
                />
                </ListItem>
            
                )})}
            
            <ListItem dense buttononClick={this.handleSelect} >
                <ListItemIcon>
                <Checkbox
                    edge="start"
                    checked={false}
                    tabIndex=""
                    disableRipple
                />
                </ListItemIcon>
                <ListItemText 
                    primary="Select Courtesy Car Option"
                />
                </ListItem>
                {/* courtesy car option */}
            <FormControl  className="">
                <InputLabel>
                Select Courtesy Car Option
                </InputLabel>
                <Select
                native
                name={this.state.courtesyCarOption}
                onChange={this.handleSelect}
                >
                <option value="" />
                <option value={10}>10 Days use with KSH 3000/-</option>
                <option value={10}>10 Days use with KSH 3000/-</option>
                <option value={10}>10 Days use with KSH 3000/-</option>
                </Select>
            </FormControl>
            </List>
            </div>
        </Paper>
        )
    }
}

export default OptionalBenefits;