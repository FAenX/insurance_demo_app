import React from 'react';
import "./DashMenu.scss";
import Profile from "./Profile"
import PaymentHistory from "./PaymentHistory"
import InsuranceCovers from "./InsuranceCovers"




class DashMenu extends React.Component {
  

  
    handleClick=(event)=>{
     
    }

    render(){
        
        return (           
            <div className="dash-menu">
                <Profile />
                <InsuranceCovers />
                <PaymentHistory />
                
            </div>
            
            
            
        );
    }
}

export default DashMenu;