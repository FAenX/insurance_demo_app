import React from "react"
import {withRouter} from "react-router-dom"
import {Paper, Button, ListItem} from "@material-ui/core"
import Jubilee from "../assets/images/jubilee.png"
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

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
            this.createData('windscreen damage', 50000), 
            this.createData('windscreen damage', 50000), 
            this.createData('windscreen damage', 50000), 
            this.createData('windscreen damage', 50000), 
            this.createData('windscreen damage', 50000), 
            this.createData('windscreen damage', 50000),          
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
        return(<div>
            <Paper variant="outlined" className="q-content" id="insurance-details">   
            <ListItem button>Cover: <b>Cover Name</b></ListItem> 
            <hr className="divider"></hr> 
            <ListItem button>Cover to start from: <b>date</b></ListItem>
            <hr className="divider"></hr>
            <ListItem button>Premium KSH: <b>{this.props.premium}</b></ListItem>
            <hr className="divider"></hr>                                                    
            </Paper>
           
                <Benefits />
            
            </div>
        )
    }
}
class Provider extends React.Component {

    render(){
        return(<div>
            <Paper variant="outlined" className="flex-col q-content" id="provider-details">
                <div className="q-content-sub">(+15yrs Special) Jubilee Motor Private Comprehensive Cover</div>
                <hr className="divider"></hr>
                <img alt="" src={Jubilee} /> 
                <hr className="divider"></hr>
                <Button>KSH: {this.props.premium}</Button>
                <Button id="buy-button" variant="contained">Buy</Button>
                <Button variant="outlined">view details</Button>

            </Paper>
            <ProviderRates premium={this.props.premium}/>
        </div>
            
            
        )
    }
}

export default withRouter(Provider)