import React from "react";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import AccountCircleRoundedIcon from "@material-ui/icons/AccountCircleRounded";
import { Link } from "react-router-dom";

class NavigationUser extends React.Component {
  render() {
    return (
      <div>
        {this.props.auth.token ? (
          <AccountCircleRoundedIcon />
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
)(NavigationUser);
