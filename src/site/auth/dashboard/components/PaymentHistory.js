import React from "react"
import {withRouter} from "react-router-dom"
import {Card, ListItem, List} from "@material-ui/core"
import clsx from 'clsx';


class PaymentHistory extends React.Component{
    constructor(props){
        super(props)
        this.state={
            display: true
        }
    }

    render(){
        return(
            <Card className={clsx("payment-history", {
                "display-none": !this.state.display,
            })}>
                <div>Payment History</div>
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