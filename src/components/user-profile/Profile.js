import React from "react";
import Navigation from "../navigation/navigation";
import { makeStyles } from "@material-ui/core";
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


const useStyles = makeStyles(theme => ({
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
    display: "flex"
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
    marginTop: theme.spacing.unit * 2
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
}));

export default function Profile() {
  const classes = useStyles();
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
                  "data:image/png;base64,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"
                }
                className={classes.avatar}
              ></Avatar>
              <Typography variant="h5" className={classes.tbold}>
                Мирјана Илиева
              </Typography>
            </Grid>

            <Grid item md={8} sm={2} xs={6}>
              <Typography className={classes.tbold}>
                <LocalPhoneIcon className={classes.phone} /> +389 72 312 405
              </Typography>
            </Grid>
            <Grid item md={8} sm={2} xs={6}>
              <Typography className={classes.tbold}>
                <EmailIcon className={classes.mail} /> ilieva@hotmail.com
              </Typography>
            </Grid>
            <Grid item md={8} sm={2} xs={6}>
              <Typography className={classes.tbold}>
                <LocationOnIcon className={classes.location} /> Струмица,
                Македонија
              </Typography>
            </Grid>
            <Grid item>
              <Button
                component={Link}
                to=""
                variant="contained"
                color="primary"
                className={classes.button}
              >
                Измени профил
              </Button>
            </Grid>
          </Grid>
        </Paper>
        <Paper className={classes.oglasiPaper}>
              <Grid container spacing={2}>
                <Grid item>
                  <ButtonBase className={classes.image}>
                    <img
                      className={classes.img}
                      alt="complex"
                      src="https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    />
                  </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs >
                      <Typography variant="h5" className={classes.titleOglas}>Наслов на оглас</Typography>
                      <Typography variant="h6"> Опис на огласоОпис на огласоОпис на огласоОпис на огласоОпис на огласоОпис на огласоОпис на огласоОпис на огласоОпис на огласо .....</Typography>
                      <Typography variant="body2" color="textSecondary">
                        04.04.2013
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="body2">
                        Име на тај шо го ставил
                      </Typography>
                      <Typography variant="body2" style={{ cursor: "pointer" }}>
                        +389 72 312 408
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item className={classes.border}>
                    <Typography variant="subtitle1"> 25 $</Typography>
                    <Typography variant="subtitle1"><LocationOnIcon className={classes.location}/> Strumica</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
      </Grid>
    </div>
  );
}
