import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper'
import {withStyles} from '@material-ui/core/styles'
import {withFormik} from 'formik';
import * as Yup from 'yup';
import Field from './Field'
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux'
import * as authActions from '../../store/actions/authActions'

const fields = [
    {name : 'first_name' , elementName : 'input' , type : 'text' , placeholder : 'Име '},
    {name : 'last_name' , elementName : 'input' , type : 'text' , placeholder : 'Презиме'},
    {name : 'location' , elementName : 'input' , type : 'text' , placeholder : 'Град'},
    {name : 'phone_number' , elementName : 'input' , type : 'text' , placeholder : 'Телефон'},
    {name : 'email' , elementName : 'input' , type : 'email' , placeholder : 'е-маил'},
    {name : 'password' , elementName : 'input' , type : 'password' , placeholder : 'Лозинка'},
    {name : 'password2' , elementName : 'input' , type : 'password' , placeholder : 'Потврди лозинка'},
]

function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" >
          OglasiMK
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
  
  const styles = theme => ({
    '@global': {
      body: {
        backgroundColor: "#F8BBD0",
      },
    },
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: 20
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
        height: '50%',
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  });
  
  class Register extends React.Component {
  
        componentDidMount(){
          if(this.props.auth.token) {
           return <Redirect to="/"/>
          }
        }
    render(){
      const {classes} = this.props
      return (
        <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Регистрација
          </Typography>
          <form className={classes.form} onSubmit={e => {
            e.preventDefault();
            this.props.register(this.props.values.first_name ,this.props.values.last_name, 
                this.props.values.location ,this.props.values.phone_number,
                  this.props.values.email , this.props.values.password)
          }}>
            {fields.map((f , i) => {
              return (
              <div className="col-md-12">
                <Field
                key={i}
                {...f}
                value={this.props.values[f.name]}
                name={f.name}
                onChange={this.props.handleChange}
                onBlur={this.props.handleBlur}
                touched={(this.props.touched[f.name])}
                errors={this.props.errors[f.name]}
                  />
                  </div>
                  )
                })}
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Регистирај се
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/login" variant="body2">
                  {"Ако веќе имате профил , Најави се !"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </Paper>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
      )
  }
  }

const mapStateToProps = state => {
    return {
        auth : state.auth
    }
}
const mapDispatchToProps = dispatch => {
    return {
        register : (first_name , last_name , location ,phone_number ,email , pass) =>{
            dispatch(authActions.register(first_name , last_name ,location,phone_number , email , pass))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withFormik({
    mapPropsToValues : () => ({
        first_name : '',
        last_name :  '',
        email : '',
        location : '',
        phone_number : '',
        password : '',
        password2 : ''
    }),
    validationSchema : Yup.object().shape({
        first_name : Yup.string().required("Внесте го вашето име"),
        last_name : Yup.string().required("Внесте го вашето презиме"),
        email : Yup.string().email('е-маил е невалиден').required('Внесте во вашиот маил'),
        password : Yup.string().min(5,'Лозинкат мора да биде повеќе од 5 карактери').required('Внесете ја вашата лозинка'),
        password2 : Yup.string().required('Потврдете ја вашата лозинка').test('pass-match', 'Лозинките не се исти', function(value){
            const {password} = this.parent;
            return password === value;
        })
    }),
    handleSubmit : (values , {setSubmitting} , login) =>{
        login(values.email , values.password)
    }
})(withStyles(styles)(Register)));