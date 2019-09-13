import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'

class Field extends Component {
    render(){
        return (
          <div>
          <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id={this.props.name}
          type={this.props.type}
          placeholder={this.props.placeholder}
          data-validation-required-message="Please enter your name." 
           name={this.props.name}
           onChange={this.props.onChange}
           onBlur={this.props.onBlur}
        />
        <p className="help-block text-danger">
        {(this.props.touched && this.props.errors) &&
            <span>{this.props.errors}</span>
        }
       </p>
       </div>
        )
        
    }
}

export default Field;