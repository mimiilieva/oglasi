import React from "react";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import AccountCircleRoundedIcon from "@material-ui/icons/AccountCircleRounded";
import { Link } from "react-router-dom";
import {withStyles} from '@material-ui/styles'
import { Typography } from "@material-ui/core";

const styles = theme => ({
  icon: {
    color : 'white',
    '&:hover': {
    color : 'pink'
  }
}
  })

class NavigationUser extends React.Component {
  render() {
    const {classes} = this.props
    return (
      <div>
        {this.props.auth.token ? (
          <Typography className={classes.icon} component={Link}
          to="/profile">
              <AccountCircleRoundedIcon
           />
          </Typography>
         
         
        ) : (
          <Button
            component={Link}
            to="/login"
            variant="contained"
            color="secondary"
          >
            Најави се
          </Button>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(NavigationUser));
