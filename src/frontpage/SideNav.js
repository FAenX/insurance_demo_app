import React from "react"



class SideNav extends React.Component {
    constructor(props){
        super(props)
        this.state={
            style: {
                display: "none"
            }

        }
    }

    handleClose = () => {
        this.props.close();
    }

    render(){
        let style;
       
        if (this.props.open===true){            
            style = {display: "block"}           
        }else if (this.props.open===false){
            style = this.state.style
        }

        return(
            <div className="sidenav" style={style}>
                <div className="closebtn" onClick={this.handleClose}>&times;</div>
                <div className="nav-items">                    
                    <p className="nav-item">Home</p>
                    <p className="nav-item">Insurance covers</p>
                    <p className="nav-item">Claim</p>
                    <p className="nav-item">Who are we?</p>
                    <p className="nav-item">Log in</p>  
                    <p className="nav-item">Sign up</p>                    
                </div>
               
            </div>   
        )
    }
}

export default SideNav;