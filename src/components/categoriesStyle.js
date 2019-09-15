import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Link from "@material-ui/core/Link";
import HomeTwoToneIcon from '@material-ui/icons/HomeTwoTone';
import DirectionsCarTwoToneIcon from '@material-ui/icons/DirectionsCarTwoTone';
import LaptopMacTwoToneIcon from '@material-ui/icons/LaptopMacTwoTone';
import EmojiSymbolsTwoToneIcon from '@material-ui/icons/EmojiSymbolsTwoTone';
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
    paper: {
        padding: "20px",
        border: "3px solid #e91e63",
        color: "#e91e63",
        width: "150px",
        textAlign: "center",
        margin: "auto"
      },
      icon: {
        fontSize: "50px"
      }})
class CategoriesStyles extends React.Component {
    render() {
        const { classes } = this.props;
        return (
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
                  <HomeTwoToneIcon
                    color="secondary"
                    className={classes.icon}
                  ></HomeTwoToneIcon>
                </Grid>
                <Grid item>
                  <Typography noWrap>Живеалишта</Typography>
                </Grid>
              </Grid>
            </Paper>
          </Link>
        </Grid>
        <Grid item>
          <Paper className={classes.paper}>
            <Grid continer>
              <Grid item>
                <DirectionsCarTwoToneIcon
                  color="secondary"
                  className={classes.icon}
                ></DirectionsCarTwoToneIcon>
              </Grid>
              <Grid item>
                <Typography noWrap>Автомобили</Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item>
          <Paper className={classes.paper}>
            <Grid continer>
              <Grid item>
                <LaptopMacTwoToneIcon
                  color="secondary"
                  className={classes.icon}
                ></LaptopMacTwoToneIcon>
              </Grid>
              <Grid item>
                <Typography noWrap>Електроника</Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item>
          <Paper className={classes.paper}>
            <Grid continer>
              <Grid item>
                <EmojiSymbolsTwoToneIcon
                  color="secondary"
                  className={classes.icon}
                ></EmojiSymbolsTwoToneIcon>
              </Grid>
              <Grid item>
                <Typography noWrap>Услуги</Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        </Grid>
        )
    }
}

export default (withStyles(styles)(CategoriesStyles))