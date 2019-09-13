import React from 'react'
import { connect } from 'react-redux'
import Login from './../LoginPage/Login'
import AddPost from './../user-profile/AddPost'
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import { Link } from 'react-router-dom';


class NavigationPost extends React.Component{
    render(){
        return(
                <div>
                    {this.props.auth.token ?
              <Button component={Link} to="/addpost" size="large" variant="contained" color="secondary">
                Внеси оглас
                <AddIcon />
              </Button>
              :
              <Button component={Link} to="/login" size="large" variant="contained" color="secondary">
                Внеси оглас
                <AddIcon />
              </Button>
              }

                </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        auth : state.auth
    }
}

const mapDispatchToProps = dispatch => {
    return {}
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NavigationPost)