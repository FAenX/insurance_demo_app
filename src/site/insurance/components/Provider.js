import React from "react"
import {Paper, Button, ListItem, Divider} from "@material-ui/core"
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
                <Divider />
                <ListItem button>Cover to start from: <b>date</b></ListItem>
                <Divider />
                <ListItem button>Premium KSH: <b>{props.premium}</b></ListItem>
                <Divider />                                     
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
        display: "flex",
        flexFlow: "column",
        width: "300px", 
        height: "300px",
        margin: ".5em",
        textAlign: "center"
    }

    const providerImage={
        width: "200px", 
        height: "100px",
        margin: ".15em"
    }

    
    return(<div  id="provider-details">
            <Paper style={providerStyle} variant="outlined" className="provider">
                <div className="">
                    <div>{props.jp}</div> 
                    <div>{props.chosenProduct.name}</div>
                </div>
                <img alt="" src={props.image} style={providerImage}/>                 
                <Button 
                    id="premium-button"
                    variant="outlined"
                >
                    KSH: {props.premium}
                </Button>
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