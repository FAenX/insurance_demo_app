import React from "react"
import {Paper, Button, ListItem} from "@material-ui/core"
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import clsx from "clsx"
import OptionalBenefits from "./OptionalBenefits"
import "./Provider.scss"


const Benefits =props=> {
    const createData=(benefit, limit)=>{
        return { benefit, limit};
      }
    const rows = [
        createData('windscreen damage', 50000), 
        createData('Headlights damage', 50000),       
    ];
    return(
            <TableContainer className={clsx("table-container", {"display-none": true})} component={Paper}>
                <Table className="">
                    <TableHead>
                    <TableRow>
                        <TableCell>Benefits</TableCell>
                        <TableCell align="right">Limits</TableCell>                            
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.map(row => (
                        <TableRow key={row.benefit}>
                        <TableCell component="th" scope="row">
                            {row.benefit}
                        </TableCell>
                        <TableCell align="right">{row.limit}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                </TableContainer>
    )
}

const ProviderRates =props=> {
    return(<div className={clsx("provider-rates",{
                    "display-none": true,
                })}
            >
            <Paper variant="outlined" className="q-content" id="insurance-details">   
            <ListItem button>Cover: <b>{props.chosenProduct.name}</b></ListItem> 
            <hr className="divider"></hr> 
            <ListItem button>Cover to start from: <b>date</b></ListItem>
            <hr className="divider"></hr>
            <ListItem button>Premium KSH: <b>{props.premium}</b></ListItem>
            <hr className="divider"></hr>                                                    
            </Paper>
        
            
            <OptionalBenefits 
                premium={props.premium}
            />   
        
            </div>
    )
}

const Provider =props=> {
    
    const showDetails=(event)=>{
        event.preventDefault()
        
    }

    const providerStyle={
        width: "300px", 
        height: "300px",
        margin: ".5em"
    }

    
    return(<div  id="provider-details">
        <Paper style={providerStyle} variant="outlined" className="provider">
            <div className="q-content-sub">
                {props.jp} {props.chosenProduct.name}
            </div>
            <hr className="divider"></hr>
            <img alt="" src={props.image} />                 
            <Button 
                id="premium-button"
                variant="outlined"
            >
                KSH: {props.premium}
            </Button>
            <hr className="divider"></hr>
            <Button 
                id="buy-button" 
                variant="contained"
            >
                Buy
            </Button>                
            <Button 
                id="details-button" 
                variant="outlined"
                // onClick={this.showDetails}
            >
                view details
            </Button>

        </Paper>
        
        <ProviderRates 
            premium={props.premium} 
            // show={this.state.showDetails}
            chosenProduct={props.chosenProduct}
        />
        <Benefits />
                
    </div>
        
        
    )
}

export default Provider