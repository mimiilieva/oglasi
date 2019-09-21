import React from "react";
import Navigation from "../navigation/navigation";
import {browserHistory} from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { withStyles } from "@material-ui/core";
import {connect} from 'react-redux'
import { withRouter } from "react-router";
import {Redirect} from 'react-router-dom'
import {
  Grid,
  Avatar,
  Typography,
  Button,
  Paper,
  Divider
} from "@material-ui/core";
import LocalPhoneIcon from "@material-ui/icons/LocalPhone";
import EmailIcon from "@material-ui/icons/Email";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { Link } from "react-router-dom";
import ButtonBase from "@material-ui/core/ButtonBase";
import * as userActions from '../../store/actions/userActions'
import * as authActions from '../../store/actions/authActions'
import AddIcon from "@material-ui/icons/Add";


const styles = theme => ({

  userInfo: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "left",
    padding: 20
  },
  shortUser: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 20
  },
  avatar: {
    width: 100,
    height: 100,
    display: "flex",
    background : 'pink'
  },
  tbold: {
    fontWeight: "bold",
    margin: theme.spacing.unit * 1
  },
  paper: {
    margin: theme.spacing.unit * 2,
    width: 500
  },
  phone: {
    color: "green",
    fontWeight: "bold"
  },
  mail: {
    color: "#e91e63",
    fontWeight: "bold"
  },
  location: {
    color: "blue",
    fontWeight: "bold"
  },
  button: {
    fontWeight: "bold",
    marginTop: theme.spacing.unit * 2,
    marginLeft : theme.spacing.unit *3
  },
  oglasiPaper: {
    padding: theme.spacing(2),
    margin: theme.spacing.unit * 3,
    
  },
  image: {
    width: 500,
    height: "auto"
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%"
  },
  titleOglas: {
    fontWeight: "bold"
  },
  location: {
    color: "blue",
    fontWeight: "bold"
},
  border: {
    borderLeft: "1px solid gray",
    margin: theme.spacing.unit*1,
    padding: 10
  }
});

class Profile extends React.Component {

    componentDidMount(){
      this.props.getUser(this.props.auth.user.userId , this.props.auth.token)
      this.props.getPosts(this.props.auth.token)
    }

   
    handleClick = (e) =>{
        e.preventDefault();
        this.props.logout(this.props.auth.token)
        localStorage.clear()
        window.location.reload()
        
    }
    deletePost = (postId) =>(e) => {
        this.props.deletePost(postId , this.props.auth.token)
        window.location.reload()
    }

  render(){
  const {classes} = this.props
  return (
    <div>
      <Navigation />
      <Grid className={classes.userInfo}>
        <Paper className={classes.paper}>
          <Grid className={classes.userInfo}>
            <Grid className={classes.shortUser}>
              <Avatar
                alt="Remy Sharp"
                src={
                  "https://img.icons8.com/cotton/2x/gender-neutral-user--v1.png"
                }
                className={classes.avatar}
              ></Avatar>
              <Typography variant="h5" className={classes.tbold}>
                {this.props.user.currentUser.first_name + ' '+ this.props.user.currentUser.last_name }
              </Typography>
            </Grid>

            <Grid item md={8} sm={2} xs={6}>
              <Typography className={classes.tbold}>
                <LocalPhoneIcon className={classes.phone} /> {'0'+this.props.user.currentUser.phone_number}
              </Typography>
            </Grid>
            <Grid item md={8} sm={2} xs={6}>
              <Typography className={classes.tbold}>
                <EmailIcon className={classes.mail} /> {this.props.user.currentUser.email}
              </Typography>
            </Grid>
            <Grid item md={8} sm={2} xs={6}>
              <Typography className={classes.tbold}>
                <LocationOnIcon className={classes.location} /> {this.props.user.currentUser.location}
              </Typography>
            </Grid>
            <Grid container flexdirection="row">
            <Grid item>
              <Button
               
                variant="contained"
                color="primary"
                className={classes.button}
              >
                Измени профил
              </Button>
            </Grid>
            <Grid item>
              <Button
               onClick={this.handleClick}
                variant="contained"
                color="secondary"
                className={classes.button}
              >
                Одјави се
              </Button>
            </Grid>
            </Grid>
          </Grid>
        </Paper>
        <Button component={Link} to="/addpost" size="large" variant="contained" color="inherit" className={classes.paper}>
                Внеси оглас
                <AddIcon />
              </Button>
        {this.props.user.posts.map((post , i) => {
          if(this.props.auth.user.userId === post.userId){
           return(
            <Paper className={classes.oglasiPaper} key={post.id}>
            <Grid container spacing={2}>
              <Grid item>
                <ButtonBase className={classes.image}>
                  <img
                    className={classes.img}
                    alt="complex"
                    src=""
                  />
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs >
                    <Typography variant="h5" className={classes.titleOglas}>{post.title}</Typography>
                    <div dangerouslySetInnerHTML={{__html: post.description}}></div>
                    <Typography variant="body2" color="textSecondary">
                      {post.createdAt}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item className={classes.border}>
                  <Typography variant="subtitle1"> {post.price} ден.</Typography>
                  <Typography variant="subtitle1"><LocationOnIcon className={classes.location}/> {post.location}</Typography>
                  <Grid item>
                   <Button
                  
                  variant="contained"
                  color="default"
                  className={classes.button}
                  onClick = {this.deletePost(post.id)}
                >
                  Избриши оглас
                </Button>
                 </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
           )
          }
        })}
        
      </Grid>
    </div>
  );
 }
}

const mapStateToProps = state => {
  return {
    auth : state.auth,
    user : state.user
  }
}
const mapDispatchToProps = dispatch => {
  return {
      getUser : (userId , token) => {
        dispatch(userActions.getUser(userId,token))
      },
      logout : (token) => {
        dispatch(authActions.logout(token))
      },
      getPosts:( token) => {
        dispatch(userActions.getPosts(token))
    },
    deletePost:(postId,token) => {
      dispatch(userActions.deletePost(postId,token))
    }

  }
}
export default (connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Profile)))