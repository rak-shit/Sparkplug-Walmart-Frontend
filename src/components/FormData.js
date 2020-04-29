import React, { Component } from 'react'
import {
  withStyles,
} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import SendIcon from '@material-ui/icons/Send';
import thunder from '../svgs/observation.png'
import Lottie from 'react-lottie'
import animationData from '../lotties/18143-discord-nearby-animation.json';

const axios = require('axios')

const styles = theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
            marginTop: '15px'
        },
    },
    outer: {
        textAlign: "center",
    },
    button: {
        marginTop: '20px',
        fontFamily: 'Roboto, sans-serif',
        fontWeight: "600",
        fontSize: "80%",
        borderRadius: "5px",
        color: "#5c5b59",
        background: "#f0eeeb"
    },
    logo: {
        marginTop: '200px'
    },
    text: {
        boxShadow: "2px 2px 2px 2px #d6d4d2",
        borderRadius: "5px"
    }
});


class FormData extends Component {
    
    render() {
        const { classes } = this.props
        const defaultOptions = {
            animationData: animationData
        }
        return (
            <div className={classes.outer}>
                <Lottie options={defaultOptions}
                    height={150}
                    width={150}
                    className={classes.logo}
                    style={{marginTop: "140px"}}
                />
                <form className={classes.root}>
                    <TextField
                        onChange={this.props.onChange}
                        id="outlined-secondary"
                        label="Search Item"
                        variant="outlined"
                        color="primary"
                        name="item"
                        className={classes.text}
                    />
                    <TextField
                        onChange={this.props.onChange}
                        id="outlined-secondary"
                        label="Location"
                        variant="outlined"
                        color="primary"
                        name="country"
                        className={classes.text}
                    />
                    <TextField
                        onChange={this.props.onChange}
                        id="outlined-secondary"
                        label="Comparing Year"
                        variant="outlined"
                        color="primary"
                        name="year"
                        className={classes.text}
                    />
                </form>
                <Button
                    onClick={this.props.onClick}
                    variant="contained"
                    className={classes.button}
                    endIcon={<SendIcon />}
                >
                    Submit
                </Button>
            </div>
        )
    }
}

FormData.propTypes = {
    classes: PropTypes.object.isRequired
};
  
export default withStyles(styles)(FormData);

