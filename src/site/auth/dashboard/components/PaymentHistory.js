import React from "react"
import {withRouter} from "react-router-dom"
import {Card, ListItem, List, Toolbar} from "@material-ui/core"
import clsx from 'clsx';
import PaymentIcon from '@material-ui/icons/Payment';


class PaymentHistory extends React.Component{
    constructor(props){
        super(props)
        this.state={
            display: true
        }
    }

    render(){
        return(
            <Card variant="outlined" className={clsx("payment-history", {
                "display-none": !this.state.display,
            })}>
                <Toolbar className="heading">
                    Payment History
                    <PaymentIcon />
                </Toolbar>
                <div className="content">
                    <List>
                    <ListItem>Text</ListItem>
                    <hr className="divider" />
                    <ListItem>text</ListItem>
                    <hr className="divider" />
                    <ListItem>text</ListItem>
                    <hr className="divider" />
                    <ListItem>text</ListItem>
                    <hr className="divider" />
                    </List>
                </div>
                
                
                           
            </Card>
        )
    }
}

export default withRouter(PaymentHistory)