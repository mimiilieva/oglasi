import React from "react";
import Navigation from "./navigation/navigation";
import { withStyles } from "@material-ui/core/styles";
import LocalPhoneIcon from "@material-ui/icons/LocalPhone";
import EmailIcon from "@material-ui/icons/Email";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import {
  Grid,
  Avatar,
  Typography,
  Button,
  Paper,
  Divider
} from "@material-ui/core";

const styles = theme => ({
  root: {
    height: "200px"
  },
  image: {
    backgroundImage:
      "url(https://www.uckg.org/wp-content/uploads/2015/03/get-touch.png)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center"
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "left"
  },
  tbold: {
    fontWeight: "bold",
    margin: theme.spacing.unit * 1
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
  insta: {
    fontWeight: "bold",
    color: "orange"
  },
  tweet: {
    fontWeight: "bold",
    color: "purple"
  }
});
class ContactPage extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Navigation />
        <Grid container className={classes.root}>
          <Grid item xs={false} sm={4} md={7} className={classes.image}></Grid>
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            square
          >
            <Grid container className={classes.paper}>
              <Grid>
                <Typography variant="h5" className={classes.tbold}>
                  "Огласи МК"
                </Typography>
              </Grid>

              <Grid item md={8} sm={2} xs={6}>
                <Typography className={classes.tbold}>
                  <LocalPhoneIcon className={classes.phone} /> +389 72 312 405
                </Typography>
              </Grid>
              <Grid item md={8} sm={2} xs={6}>
                <Typography className={classes.tbold}>
                  <EmailIcon className={classes.mail} /> oglasi@hotmail.com
                </Typography>
              </Grid>
              <Grid item md={8} sm={2} xs={6}>
                <Typography className={classes.tbold}>
                  <LocationOnIcon className={classes.location} /> "11-ти
                  Октомври" бр.12 Струмица, Република Македонија
                </Typography>
              </Grid>
              <Grid item md={8} sm={2} xs={6}>
                <FacebookIcon className={classes.location} fontSize="large" />
                <InstagramIcon className={classes.insta} fontSize="large" />
                <TwitterIcon className={classes.tweet} fontSize="large" />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(ContactPage);
