import React, { Component } from 'react'
import {
  withStyles,
} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import SendIcon from '@material-ui/icons/Send';

const axios = require('axios')

const styles = theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
            marginTop: '150px',
        },
    },
    outer: {
        textAlign: "center",
    },
    button: {
        margin: theme.spacing(1),
        fontFamily: "courier",
        fontWeight: "600",
        fontSize: "110%",
    },
});


class FormData extends Component {
    
    render() {
        const { classes } = this.props
        return (
            <div className={classes.outer}>
                <form className={classes.root}>
                    <TextField
                        onChange={this.props.onChange}
                        id="outlined-secondary"
                        label="Search Item"
                        variant="outlined"
                        color="primary"
                        name="item"
                    />
                    <TextField
                        onChange={this.props.onChange}
                        id="outlined-secondary"
                        label="Location"
                        variant="outlined"
                        color="primary"
                        name="country"
                    />
                    <TextField
                        onChange={this.props.onChange}
                        id="outlined-secondary"
                        label="Comparing Year"
                        variant="outlined"
                        color="primary"
                        name="year"
                    />
                </form>
                <Button
                    onClick={this.props.onClick}
                    variant="contained"
                    color="primary"
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

