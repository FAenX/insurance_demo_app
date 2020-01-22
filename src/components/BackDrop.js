import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';


class SimpleBackdrop extends React.Component{
    render(){
        return (
            <div>
            <Backdrop className={"backdrop"} open={this.props.open}>
                <CircularProgress color="inherit" />
            </Backdrop>
            </div>
        );
    }

    
}

export default SimpleBackdrop;
