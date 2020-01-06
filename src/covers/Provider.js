import React from "react"
import {withRouter} from "react-router-dom"
import {Paper, Card, Button, ListItem} from "@material-ui/core"
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
    
    createData=(name, calories)=>{
        return { name, calories};
      }

    render(){
        const rows = [
            this.createData('Frozen yoghurt', 159),
            this.createData('Ice cream sandwich', 237),
            this.createData('Eclair', 262, 16.0,),
            this.createData('Cupcake', 305, 3.7),
            this.createData('Gingerbread', 356),
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
                            <TableRow key={row.name}>
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.calories}</TableCell>
                            <TableCell align="right">{row.fat}</TableCell>
                            
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
            <ListItem button>Premium KSH: <b>premium</b></ListItem>
            <hr className="divider"></hr>                                                    
            </Paper>
           
                <Benefits />
            
            </div>
        )
    }
}
class Providers extends React.Component {

    render(){
        return(<div>
            <Paper variant="outlined" className="flex-col q-content" id="provider-details">
                <div className="q-content-sub">(+15yrs Special) Jubilee Motor Private Comprehensive Cover</div>
                <hr className="divider"></hr>
                <img alt="" src={Jubilee} /> 
                <hr className="divider"></hr>
                <Button>KSH: premium</Button>
                <Button variant="contained">view details</Button>

            </Paper>
            <ProviderRates />
        </div>
            
            
        )
    }
}

export default withRouter(Providers)