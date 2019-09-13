import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import Navigation from "./navigation/navigation";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import Link from "@material-ui/core/Link";
import HomeTwoToneIcon from '@material-ui/icons/HomeTwoTone';
import DirectionsCarTwoToneIcon from '@material-ui/icons/DirectionsCarTwoTone';
import LaptopMacTwoToneIcon from '@material-ui/icons/LaptopMacTwoTone';
import EmojiSymbolsTwoToneIcon from '@material-ui/icons/EmojiSymbolsTwoTone';
import { connect } from "react-redux";
import {Link as RouterLink} from 'react-router-dom';
import NavigationPost from './navigation/NavigationPost'

const useStyles = makeStyles(theme => ({
  mainFeaturedPost: {
    position: "relative",
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage:
      "url(https://cdn.shopify.com/s/files/1/2006/5615/articles/TechniMobili-Blog-5RulesForBuying_1024x1024.jpg?v=1510251949)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,.3)"
  },
  mainFeaturedPostContent: {
    position: "relative",
    padding: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(6),
      paddingRight: 0
    }
  },
  paper: {
    padding: "20px",
    border: "3px solid #e91e63",
    color: "#e91e63",
    width: "100px"
  },
  icon: {
      fontSize: "50px"
  }
}));

function LandingPage() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Navigation />
      <Paper className={classes.mainFeaturedPost}>
        {/* Increase the priority of the hero background image */}
        {
          <img
            style={{ display: "none" }}
            src="https://source.unsplash.com/user/erondu"
            alt="background"
          />
        }
        <div className={classes.overlay} />
        <Grid container>
          <Grid item md={6}>
            <div className={classes.mainFeaturedPostContent}>
              <Typography
                component="h1"
                variant="h3"
                color="inherit"
                gutterBottom
              >
                Најдоброто место за вашите огласи
              </Typography>
              <Typography variant="h5" color="inherit" paragraph>
                Multiple lines of text that form the lede, informing new readers
                quickly and efficiently about what&apos;s most interesting in
                this post&apos;s contents.
              </Typography>
              <NavigationPost/>
            </div>
          </Grid>
        </Grid>
      </Paper>
      <Grid
        container
        alignItems="center"
        justify="space-evenly"
        direction="row"
      >
        <Grid item>
          <Link>
            <Paper className={classes.paper}>
              <Grid continer>
                <Grid item>
                  <HomeTwoToneIcon color="secondary" className={classes.icon}></HomeTwoToneIcon>
                </Grid>
                <Grid item>
                  <Typography>Живеалишта</Typography>
                </Grid>
              </Grid>
            </Paper>
          </Link>
        </Grid>
        <Grid item>
          <Paper className={classes.paper}>
          <Grid continer>
                <Grid item>
                  <DirectionsCarTwoToneIcon color="secondary" className={classes.icon}></DirectionsCarTwoToneIcon>
                </Grid>
                <Grid item>
                  <Typography>Автомобили</Typography>
                </Grid>
              </Grid>
          </Paper>
        </Grid>
        <Grid item>
          <Paper className={classes.paper}>
          <Grid continer>
                <Grid item>
                  <LaptopMacTwoToneIcon color="secondary" className={classes.icon}></LaptopMacTwoToneIcon>
                </Grid>
                <Grid item>
                  <Typography>Електроника</Typography>
                </Grid>
              </Grid>
          </Paper>
        </Grid>
        <Grid item>
          <Paper className={classes.paper}>
          <Grid continer>
                <Grid item>
                  <EmojiSymbolsTwoToneIcon color="secondary" className={classes.icon}></EmojiSymbolsTwoToneIcon>
                </Grid>
                <Grid item>
                  <Typography>Услуги</Typography>
                </Grid>
              </Grid>
          </Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
const mapStateToProps = state =>{
    return {
      auth : state.auth
    }
}
const mapDispatchToProps = dispatch =>{
  return {

  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LandingPage)
