import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';

import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

class DatePicker extends React.Component {

    constructor(props){
        super(props)
        this.state ={
            selectedDate: new Date('2020-01-01T12:00:00')
        }
    }

    handleDateChange = (date) => {
        this.setState({
            selectedDate: date
        })
        this.props.selectedDate(date)
      };

  render(){
        return (
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container justify="space-around">
                <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                label="Date"
                value={this.state.selectedDate}
                onChange={this.handleDateChange}
                KeyboardButtonProps={{
                    'aria-label': 'change date',
                }}
                />
            </Grid>
            </MuiPickersUtilsProvider>
        );
    }
}

export default DatePicker;
