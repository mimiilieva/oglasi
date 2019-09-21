import React from "react";
import Navigation from "./navigation/navigation";
import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import CategoriesStyles from "./categoriesStyle";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import ButtonBase from "@material-ui/core/ButtonBase";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import api from '../utils/api'
import * as userActions from '../store/actions/userActions'
import * as authActions from '../store/actions/authActions'
import {connect} from 'react-redux'


const styles = theme => ({
  title: {
    margin: 30
  },
  category: {
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    padding: 20
  },
  paper: {
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
  },
  oglas:{
    
  }
});
class OglasiList extends React.Component {


  componentDidMount() {
      this.props.getPosts()
      
  }
  
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Navigation />
        <Grid
          container
          justify="flex-start"
          justify="space-evenly"
          direction="column"
        >
          <Grid item>
            <Typography variant="h4" className={classes.title}>
              Последни огласи
            </Typography>
          </Grid>
          <Grid item>
            <Paper className={classes.category} elevation={5}>
              <CategoriesStyles />
            </Paper>
          </Grid>
          {this.props.user.posts.map(post => {
            
            return(
            <Grid  item className={classes.oglas}>
            <Paper className={classes.paper}>
              <Grid container spacing={2}>
                <Grid item>
                  <ButtonBase className={classes.image}>
                  {post.PostImage ?
                        post.PostImage.length > 0 ?
                        <img
                        className={classes.img}
                        alt="complex"
                        src={api.makeFileURL(post.PostImage[0].url, null)}
                      />
                        : null
                    : null}
                    
                   
                   
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
                    <Grid item>
                      <Typography variant="body2">
                        
                      </Typography>
                      <Typography variant="body2" style={{ cursor: "pointer" }}>
                       телефон : +389 {post.phone}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item className={classes.border}>
                    <Typography variant="subtitle1">{post.price} ден.</Typography>
                    <Typography variant="subtitle1"><LocationOnIcon className={classes.location}/> {post.location}</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          )
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
      getPosts:( token) => {
          dispatch(userActions.getPosts(token))
      },
    /*  getPostImage: (postId , token) => {
        dispatch(userActions.getPostImage(postId,token))
      }
      */
      
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(OglasiList));
