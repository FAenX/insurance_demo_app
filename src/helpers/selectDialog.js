import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import {FormControl, FormHelperText} from '@material-ui/core';
import Select from '@material-ui/core/Select';
import {filterBySub, filterByAlias} from "../helpers/js/dataManipulation"

export default class SelectDialog extends React.Component {
  
  constructor(props){
    super(props)
    this.state = {
      products: null,
      vehicleUse: "",
      cover: "",
      product: ""
    }
  }
  componentDidMount=()=>{
    this.products = JSON.parse(sessionStorage.getItem("products"))
    this.setState({
      products: this.products,
    })

  }

  handlevehicleUseSelect = event => {
   this.setState({
     vehicleUse: event.target.value
   })
  };

  handleCoverSelect = event => {  
    
    
    const product = filterByAlias(this.products, event.target.value)
    this.props.productChangeListener(product)
    this.setState({
      cover: event.target.value,
      product,
    })
    //sessionStorage.setItem("chosen_product", JSON.stringify(product))
   
  };

  handleClose=()=>{
    this.props.closeChooseDialog()
  }

  

  render(){

    return (
      <div>
        <Dialog 
          disableBackdropClick 
          disableEscapeKeyDown 
          open={this.props.showChooseDialog} 
          onClose={this.handleClose}
          >
          <DialogTitle>Select Product</DialogTitle>
          <DialogContent>          
            <div className="vehicle-controls"> 
            <FormControl className="vehicle-controls">
                  <InputLabel>vehicle use</InputLabel>
                  <Select
                      name="vehicleUse"
                      value= {this.state.vehicleUse}
                      onChange={this.handlevehicleUseSelect}
                  >
                  <MenuItem value="private">Private</MenuItem>
                  <MenuItem value="commercial">Commercial</MenuItem>
                  <MenuItem value="forhire">For Hire</MenuItem>
                  </Select>
                  <FormHelperText>
                      Select vehicle use
                  </FormHelperText>
              </FormControl>
              </div>
              <div className="vehicle-controls"> 
                  <FormControl className="vehicle-controls">
                  <InputLabel >Insurance Cover</InputLabel>
                      <Select 
                          native
                          name={this.state.cover}                       
                          onChange={this.handleCoverSelect}
                          
                      >
                          <option value="" />
                          {filterBySub(this.products, this.state.vehicleUse).map(i=>{
                            return <option key={i.alias} value={i.alias}>{i.name}</option>
                          })}   
                      </Select>
                      
                      <FormHelperText>
                          Select insurance cover for your vehicle
                      </FormHelperText>
                  </FormControl>
              </div>        
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Ok
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
