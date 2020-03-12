import React from "react"
import {Card, ListItem, List, Toolbar} from "@material-ui/core"
import PaymentIcon from '@material-ui/icons/Payment';


const PaymentHistory =props=>{
    return(
        <div  className="transactions">
            <Toolbar className="heading">
                Payment History
                <PaymentIcon />
            </Toolbar>
            <Card variant="outlined" className="payment-history">
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
            </Card>
        </div>
    )
}

export default PaymentHistory