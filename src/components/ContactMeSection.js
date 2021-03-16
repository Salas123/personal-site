import React from 'react';
import './ContactMeSection.css';
import {Button, Container, Grid, TextField} from "@material-ui/core";
// import {makeStyles} from "@material-ui/styles";

// const useStyles = makeStyles((theme) => ({
//     root: {
//         '& > *': {
//             margin: theme.spacing(1),
//             width: '25ch',
//         },
//     },
// }));

const ContactMeSection = () =>{

    // const classes = useStyles();


    return(
        <div className='contact-container' id="ContactMeSection">
            <Container className="contact-me-form-container"  fixed>
                    <Grid
                        container
                        direction="column"
                        justify="center"
                        alignItems="stretch">
                        <h1 className='contact-me-header'>CONTACT ME</h1>
                        <div className="contact-me-underline"/>
                        <div className='contact-me-text-container'>
                            <p>
                                I am always looking for new and interesting projects to collaborate on. For any inquiries or to view my resume
                                please email me at my email below and I'll get back to you!
                            </p>
                        </div>
                        <form noValidate autoComplete="on">
                            <TextField className="textfield-component" id="standard-basic" label="Your Full Name Here" color="secondary" margin="normal" variant="filled" InputProps={{className:"textfield__body"}} InputLabelProps={{className: "textfield__label"}}/>
                            <TextField className="textfield-component" id="standard-basic" label="Your Email Here"  color="secondary" margin="normal" variant="filled" InputProps={{className:"textfield__body"}} InputLabelProps={{className: "textfield__label"}}/>
                        </form>
                        <form noValidate autoComplete="off">
                            <TextField
                                className="textfield-component"
                                id="outlined-multiline-static"
                                label="Message"
                                color="secondary"
                                multiline
                                rows={4}
                                defaultValue="Type Message Here..."
                                variant="outlined"
                                margin="normal"
                                InputProps={{className:"textfield-message-body"}} InputLabelProps={{className: "textfield__label"}}
                            />
                        </form>
                        <Button className="submit-button" variant="outlined" color="secondary">Submit</Button>
                    </Grid>
            </Container>
        </div>
    );
}

export default ContactMeSection;