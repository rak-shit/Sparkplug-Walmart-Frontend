import React, { Component } from 'react'
import {
  withStyles,
} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import PropTypes from 'prop-types';
import SendIcon from '@material-ui/icons/Send';

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
                        id="outlined-secondary"
                        label="Search Item"
                        variant="outlined"
                        color="primary"
                    />
                    <TextField
                        id="outlined-secondary"
                        label="Location"
                        variant="outlined"
                        color="primary"
                    />
                    <TextField
                        id="outlined-secondary"
                        label="Comparing Year"
                        variant="outlined"
                        color="primary"
                    />
                </form>
                <Button
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

