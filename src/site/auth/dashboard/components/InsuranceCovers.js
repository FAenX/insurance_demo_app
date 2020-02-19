import React from "react"
import {withRouter} from "react-router-dom"
import {Card} from "@material-ui/core"
import clsx from 'clsx';
import { List, ListItem } from "@material-ui/core"


class InsuranceCovers extends React.Component{
    constructor(props){
        super(props)
        this.state={
            display: true
        }
    }

    render(){
        return(
            <Card className={clsx("insurance-covers", {
                "display-none": !this.state.display,
            })}>
                <div>Insurance Covers</div>
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

export default withRouter(InsuranceCovers)