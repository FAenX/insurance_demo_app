import React from "react"
import {withRouter} from "react-router-dom"
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


class Benefits extends React.Component {

    constructor(props){
        super(props)
        this.state={

        }
    }
    
    createData=(benefit, limit)=>{
        return { benefit, limit};
      }

    render(){
        const rows = [
            this.createData('windscreen damage', 50000), 
            this.createData('Headlights damage', 50000),       
          ];
        return(
                <TableContainer className="table-container" component={Paper}>
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
}

class ProviderRates extends React.Component {

    render(){
        return(<div 
                    className={clsx("",{
                        "display-none": false,
                        "provider-rates": true
                    })}
                >
                <Paper variant="outlined" className="q-content" id="insurance-details">   
                <ListItem button>Cover: <b>{this.props.chosenProduct.name}</b></ListItem> 
                <hr className="divider"></hr> 
                <ListItem button>Cover to start from: <b>date</b></ListItem>
                <hr className="divider"></hr>
                <ListItem button>Premium KSH: <b>{this.props.premium}</b></ListItem>
                <hr className="divider"></hr>                                                    
                </Paper>
           
                
                {/* <OptionalBenefits 
                    premium={this.props.premium}
                />    */}
            
                </div>
        )
    }
}
class Provider extends React.Component {
    constructor(props){
        super(props)
        this.state={
            showDetails: false
        }
    }
    showDetails=(event)=>{
        event.preventDefault()
        this.setState({showDetails: !this.state.showDetails})
    }

    render(){
        return(<div  id="provider-details">
            <Paper variant="outlined" className="provider">
                <div className="q-content-sub">
                    {this.props.jp} {this.props.chosenProduct.name}
                </div>
                <hr className="divider"></hr>
                <img alt="" src={this.props.image} />                 
                <Button 
                    id="premium-button"
                    variant="outlined"
                >
                    KSH: {this.props.premium}
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
                    onClick={this.showDetails}
                >
                    view details
                </Button>

            </Paper>
            
            <ProviderRates 
                premium={this.props.premium} 
                show={this.state.showDetails}
                chosenProduct={this.props.chosenProduct}
            />
            <Benefits />
                  
        </div>
            
            
        )
    }
}

export default withRouter(Provider)