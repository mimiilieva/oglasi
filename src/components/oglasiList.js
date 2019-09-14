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
  }
});
class OglasiList extends React.Component {
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
          <Grid item>
            <Paper className={classes.paper}>
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
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(OglasiList);
