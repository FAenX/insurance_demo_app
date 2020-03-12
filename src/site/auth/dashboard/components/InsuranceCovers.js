import React from "react"
import {Card, Toolbar} from "@material-ui/core"
import { List, ListItem } from "@material-ui/core"
import EmojiTransportationIcon from '@material-ui/icons/EmojiTransportation';


const InsuranceCovers =props=>{
   
    return(
        <div className="purchases">
            <Toolbar className="heading">
                Insurance Covers
                <EmojiTransportationIcon />
            </Toolbar>
            <Card className="insurance-covers" variant="outlined" >
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

export default InsuranceCovers