import React from "react"
import {withRouter} from "react-router-dom"
import {Paper, Button, ListItem} from "@material-ui/core"
import Jubilee from "../assets/images/jubilee.png"


class ProviderRates extends React.Component {

    render(){
        return(
            <Paper variant="outlined" className="q-content" id="insurance-details">   
            <ListItem button>Cover: <b>Cover Name</b></ListItem> 
            <hr className="divider"></hr> 
            <ListItem button>Cover to start from: <b>date</b></ListItem>
            <hr className="divider"></hr>
            <ListItem button>Premium KSH: <b>premium</b></ListItem>
            <hr className="divider"></hr>                                        
            </Paper>
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