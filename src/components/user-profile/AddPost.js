import React from 'react'
import Navigation from '../navigation/navigation'
import * as userActions from '../../store/actions/userActions'
import * as authActions from '../../store/actions/authActions'
import {connect} from 'react-redux'
import Paper from '@material-ui/core/Paper'
import FormControl from '@material-ui/core/FormControl'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import FormHelperText from '@material-ui/core/FormHelperText'
import {withFormik, Form} from 'formik';
import * as Yup from 'yup';
import {withStyles} from '@material-ui/core/styles'
import { classes } from 'istanbul-lib-coverage'
import {FormikTextField,FormikSelectField} from 'formik-material-fields'
import Button from '@material-ui/core/Button'
import SaveIcon from '@material-ui/icons/Save'
import {withRouter} from 'react-router-dom'
import ImageIcon from '@material-ui/icons/Image'
import api from '../../utils/api'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { Typography } from '@material-ui/core'
import { fontSize } from '@material-ui/system'
import Divider from '@material-ui/core/Divider'


    /* global $ */
    const styles = theme => ({
        container : {
            margin : theme.spacing.unit * 4,
            display : 'flex',
            flexDirection : 'row wrap',
            width : '100%',
        },
        formControl : {
            margin : theme.spacing.unit
        },
        paper:{
            margin: 'auto',
            padding : '20px'
        },
        save : {
            marginBottom : theme.spacing.unit*3
        },
    
        postImage : {
            width : 200,
            height : 'auto',
        },
        title : {
            margin : 'auto',
            textAlign : 'center',
            fontSize : '25px'
        },
        field : {
            paddingBottom : theme.spacing.unit*2,
            display : 'block',
            
        },
        buttons: {
            marginBottom : theme.spacing.unit * 2
        }
    })


class AddPost extends React.Component{

        
        modules = {
            toolbar: [
                ['bold', 'italic', 'underline', 'strike'],
                [{'header': 1}, {'header': 2}],
                [{'list': 'ordered'}, {'list': 'bullet'}],
                [{'indent': '-1'}, {'indent': '+1'}],
                [{'size': ['small', 'medium', 'large', 'huge']}],
                [{'color': []}, {'background': []}],
                ['image'],
                ['clean']

            ]
        }

        formats = [
            'header',
            'bold', 'italic', 'underline', 'strike', 'blockquote', 'script',
            'list', 'bullet', 'indent',
            'link', 'image', 'color', 'code-block'
        ]

        uploadImage = (e) => {
            const data = new FormData(); // append the file(picture) to const data from formData and send it with post method
            data.append('file',e.target.files[0] , new Date().getTime().toString() + e.target.files[0].name)
            this.props.uploadImage(data , this.props.auth.token , this.props.user.post.id , this.props.auth.user.userId)
        }



        render(){
            const {classes} = this.props
            return(
                <div>
                    <Navigation/>
                <div>  
                    <Typography variant="h6" className={classes.title}>Внесете детали за вашиот оглас</Typography>
                    <Form className={classes.container}>
                        <Paper className={classes.paper}>
                            <FormikTextField
                            className={classes.field}
                            name="title"
                            label="Наслов"
                            margin="normal"
                            
                            />

                            
                             <ReactQuill
                             className={classes.field}
                             values={this.props.values.description}
                             modules={this.modules}
                             formats={this.formats}
                             placeholder="Опис"
                             onChange = { val => this.props.setFieldValue('description', val)}
                             />
                            
                             <FormikSelectField
                             className={classes.field}
                             name="category"
                             label="Категорија"
                             margin="normal"
                             options={[
                                 {label :'Автомобили' , value : 'Автомобили'},
                                 {label : 'Електроника', value : 'Електроника' },
                                 {label : 'Живеалишта',value : 'Живеалишта' },
                                 {label : 'Услуги',value : 'Услуги' }
                            
                             ]}
                             fullWidth
                            
                        />
                        <FormikTextField
                        className={classes.field}
                            name="location"
                            label="Локација"
                            margin="normal"
                            
                            />
                        <FormikTextField
                        className={classes.field}
                            name="price"
                            label="Цена"
                            margin="normal"
                            
                            />
                              <div className={classes.save}>
                            </div>
                            {this.props.user.post.PostImage ? 
                                this.props.user.post.PostImage.length > 0 ? 
                                <img src={api.makeFileURL(this.props.user.post.PostImage[0].url, this.props.auth.token)} className={classes.postImage}/>
                                : null
                                : null }

                         <div >
                            <Button
                            className={classes.buttons}
                            variant="contained"
                            color="primary"
                            onClick = {e => {
                                $('.MyFile').trigger('click');
                            }}
                            >
                            <ImageIcon/>
                            Прикачи слика
                            </Button>
                            <input type="file" style={{ display : 'none'}} className="MyFile" onChange={this.uploadImage}/>
                        </div>
                        <Button 
                        variant="contained" 
                        color="secondary"
                        onClick = {e => {
                            this.props.handleSubmit()
                        }}
                        >
                            <SaveIcon/>Зачувај</Button>
                        </Paper>
                    </Form>
                </div>
                </div>
            )
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
        addPost:(post , token) => {
            dispatch(userActions.addPost(post,token))
        },
        uploadImage : (data ,token , postId , userId ) => {
            dispatch(userActions.uploadImage(data ,token , postId , userId))
        }

    }
}

    export default (connect(
        mapStateToProps,
        mapDispatchToProps 
    ) (withFormik   ({
        mapPropsToValues : (props) => ({
            title : props.user.post.title || '',
            description : props.user.post.description,
            location : props.user.post.location || '',
            price : props.user.post.price || 'Цена по договор',
            category : props.user.post.category || '',
            userId : props.auth.user.userId
        }),
        validationSchema : Yup.object().shape({
            title : Yup.string().required("Задолжително поле"),
        }),
        handleSubmit : (values , {setSubmitting , resetForm, props} ) => {
                console.log("Saving" , props.addPost)
                props.addPost(values,props.auth.token)
              
        }
    })(withStyles(styles)(AddPost))));