import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import Navigation from "./navigation/navigation";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { connect } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import NavigationPost from "./navigation/NavigationPost";
import CategoriesStyles from "./categoriesStyle";
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
  category: {
    textAlign: "center",
    padding: theme.spacing.unit * 2
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
              <NavigationPost />
            </div>
          </Grid>
        </Grid>
      </Paper>
      <Grid item md={12} className={classes.category}>
        <Typography variant="h5">Огласи по категории</Typography>
      </Grid>
      <CategoriesStyles />
    </React.Fragment>
  );
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
)(LandingPage);
