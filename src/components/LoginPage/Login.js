import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import { withFormik } from "formik";
import * as Yup from "yup";
import Field from "./Field";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import * as authActions from "../../store/actions/authActions";

const fields = [
  {
    name: "email",
    elementName: "input",
    type: "email",
    placeholder: "Your email"
  },
  {
    name: "password",
    elementName: "input",
    type: "password",
    placeholder: "Your password"
  }
];

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit">OglasiMK</Link> {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const styles = theme => ({
  "@global": {
    body: {
      backgroundColor: "#81D4FA"
    }
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "white",
    padding: 20

  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
 
});

class Login extends React.Component {
  componentDidMount() {
    if (this.props.auth.token) {
      return <Redirect to="/" />;
    }
  }
  render() {
    const { classes } = this.props;
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Најава
          </Typography>
          <form
            className={classes.form}
            onSubmit={e => {
              e.preventDefault();
              this.props.login(
                this.props.values.email,
                this.props.values.password
              );
            }}
          >
            {fields.map((f, i) => {
              return (
                <div className="col-md-12">
                  <Field
                    key={i}
                    {...f}
                    value={this.props.values[f.name]}
                    name={f.name}
                    onChange={this.props.handleChange}
                    onBlur={this.props.handleBlur}
                    touched={this.props.touched[f.name]}
                    errors={this.props.errors[f.name]}
                  />
                </div>
              );
            })}

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Најави се
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/register" variant="body2">
                  {"Немаш профил? Регистирај се !"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </Paper>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: (email, pass) => {
      dispatch(authActions.login(email, pass));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  withFormik({
    mapPropsToValues: props => ({
      email: "",
      password: ""
    }),
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .email("Погрешен e-mail")
        .required("Внесете го вашиот e-mail!"),
      password: Yup.string().required("Внесете лозинка!")
    }),
    handleSubmit: (values, { setSubmitting }, login) => {
      console.log("Login attempt", values);
      login(values.email, values.password);
    }
  })(withStyles(styles)(Login))
);
