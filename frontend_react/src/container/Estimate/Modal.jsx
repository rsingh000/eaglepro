import React from 'react'
import { images } from '../../constants';
import './Modal.scss';
import { useFormik} from 'formik';
import * as Yup from 'yup';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import { css } from 'glamor';
import "react-toastify/dist/ReactToastify.css";
import { makeStyles } from "@material-ui/core/styles";
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import MessageIcon from '@material-ui/icons/Message';
import { TextField, Button, InputAdornment } from '@material-ui/core';

const Modal = () => {

    let toastId = null;
   
    const useStyles = makeStyles({
        textField: {
          marginBottom: '0px',
        },
        label: {
          '&$focused': {
            borderColor: '#40515b'
          },
        },
        focused: {},
        outlinedInput: {
          '&$focused $notchedOutline': {
            border: '1px solid #40515b'
          },
        },
        notchedOutline: {
            border: '1px solid #40515b',
        },
      });

    function sendEmail(values) {
        emailjs.send('service_71e46s5', 'template_tgq5qx9', values, 'JqPz60WSOk1MtsOpM')
            .then((result) => {
              if (!toast.isActive(toastId)) {
                toastId = toast("Thank You, Message sent!", {
                  toastEstimate: css({
                    background: "rgba(53, 135, 191, 1) !important",
                    color: "white !important",
                  }),
                enter: 'zoomIn',
                exit: 'zoomOut',
                appendPosition: false,
                collapse: true,
                collapseDuration: 300,
                position: toast.POSITION.BOTTOM_RIGHT
                });
              } else {
                console.log("Toast already active");
              }
            })
      }

    const formik = useFormik({
        initialValues:{name: '', phone: '', email:'', message:''},
        validationSchema: Yup.object({
            name: Yup.string()
            .required('Sorry, the name is required'),
            phone:Yup.number()
            .required('Sorry this is required')
            .typeError('You must specify a number!'),
            email:Yup.string()
            .required('Sorry, the email is required')
            .email('This is not a valid email'),
            message:Yup.string()
            .required('Sorry, you need to type something')
            .max(500,'Sorry, the message is too long')
        }),
        onSubmit: (values,{resetForm})=>{
            console.log("Sucess Submit button");
            sendEmail(values)

            resetForm();
        }
      })

      const classes = useStyles();

      const errorHelper = (formik, values) => ({
        error: formik.errors[values] && formik.touched[values] ? true:false,
        helperText: formik.errors[values] && formik.touched[values] ? formik.errors[values] : null
      });
    

  return (
    <div className="modal">
        <video src={images.estimateBg} id="estimateBg" poster={images.estimatePoster} autoPlay muted loop>        </video>
        <div className="mainframe">
            <div className="topLeft">
                <img src={images.logo} alt="" className="estimate-logo"></img>
                <div className="name-title">
                    <div className="estimate-name">EAGLE PRO PAINTING</div>
                    <div className="estimate-tag">A Fresh Coat For a Fresh Start</div>
                </div>
            </div>
            <div className="center-modal">
                <div className="images-estimate">
                    <img src={images.about1} alt="" className='about-1'/>
                    <div className="img-axis">
                        <img src={images.about2} alt="" className='about-2'/>
                        <img src={images.about3} alt="" className='about-3'/>
                        <img src={images.about4} alt="" className='about-4'/>

                    </div>
                </div>
                <form className="estimate-form" onSubmit={formik.handleSubmit}>
                    <div className="title-form">
                        Get A <span className="word-estimate">FREE</span> Estimate
                    </div>

                    <div className="nameBox" style={{  borderRadius: '5px',padding:'1rem 2rem', width: "100%", display: 'flex', flexDirection: "column", gap: "1rem"}}>
                        <TextField
                            style={{width:'100%'}}
                            name="name"
                            label="Enter your name"
                            variant="outlined"
                            InputLabelProps={{
                                classes: {
                                    root: classes.label,
                                    focused: classes.focused,
                                },
                                style: {color: '#40515b'}
                                }}
                           InputProps={{
                                classes: {
                                    root: classes.outlinedInput,
                                    focused: classes.focused,
                                    notchedOutline: classes.notchedOutline,
                                },
                                style: { color: '#40515b', backdropFilter: 'blur(5px)' },
                                endAdornment: (
                                    <InputAdornment position="start">
                                        <PermIdentityIcon style={{fill: "#40515b"}}/>
                                    </InputAdornment>
                                )
                            }}
                            {...formik.getFieldProps('name')}
                            {...errorHelper(formik,'name')}
                        />
                        <TextField
                            style={{width:'100%'}}
                            name="phone"
                            label="Enter your phone #"
                            variant="outlined"
                            InputLabelProps={{
                            classes: {
                                root: classes.label,
                                focused: classes.focused,
                                },
                                style: {color: '#40515b'}
                            }}
                            InputProps={{
                                classes: {
                                    root: classes.outlinedInput,
                                    focused: classes.focused,
                                    notchedOutline: classes.notchedOutline,
                                },
                                style: { color: '#40515b', backdropFilter: 'blur(5px)' },
                                endAdornment: (
                                    <InputAdornment position="start">
                                        <PhoneIcon style={{fill: "#40515b"}}/>
                                    </InputAdornment>
                                )
                            }}
                            {...formik.getFieldProps('phone')}
                            {...errorHelper(formik,'phone')}
                        />
                            
                            <TextField
                                style={{width:'100%'}}
                                name="email"
                                label="Enter your email"
                                variant="outlined"
                                InputLabelProps={{
                                classes: {
                                    root: classes.label,
                                    focused: classes.focused,
                                },
                                style: {color: '#40515b'}
                                }}
                                InputProps={{
                                classes: {
                                    root: classes.outlinedInput,
                                    focused: classes.focused,
                                    notchedOutline: classes.notchedOutline,
                                },
                                style: { color: '#40515b', backdropFilter: 'blur(5px)' },
                                endAdornment: (
                                    <InputAdornment position="start">
                                        <EmailIcon style={{fill: "#40515b"}}/>
                                    </InputAdornment>
                                )
                                }}
                                {...formik.getFieldProps('email')}
                                {...errorHelper(formik,'email')}
                            />
                            <TextField
                                style={{width:'100%'}}
                                multiline
                                rows={4}
                                name="message"
                                label="Enter your message"
                                variant="outlined"
                                InputLabelProps={{
                                classes: {
                                    root: classes.label,
                                    focused: classes.focused,
                                },
                                style: {color: '#40515b'}
                                }}
                                InputProps={{
                                classes: {
                                    root: classes.outlinedInput,
                                    focused: classes.focused,
                                    notchedOutline: classes.notchedOutline,
                                },
                                style: { color: '#40515b', backdropFilter: 'blur(5px)' },
                                endAdornment: (
                                    <InputAdornment position="start">
                                        <MessageIcon style={{fill: "#40515b"}}/>
                                    </InputAdornment>
                                )
                                }}
                                {...formik.getFieldProps('message')}
                                {...errorHelper(formik,'message')}
                            />
                        </div>
                            <button className="estimateBtn" type="submit">
                                <div className="free-estimate lexend-semi-bold-white-14px">
                                Free Estimate
                                </div>
                                <img className="evaarrow-fill" src={images.btnArrow} alt="eva:arrow-ios-forward-fill" />
                            </button>
                    </form>
            </div>
        </div>
    </div>
  )
}

export default Modal