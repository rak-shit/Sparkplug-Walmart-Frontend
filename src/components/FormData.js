import React, { Component } from 'react'
import {
  withStyles,
} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import SendIcon from '@material-ui/icons/Send';
import Lottie from 'react-lottie';
import InputLabel from '@material-ui/core/InputLabel';
import animationData from '../lotties/18143-discord-nearby-animation.json';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import yearData from '../data/yearData';
import countryData from '../data/countryData';
import itemData from '../data/itemData';


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
                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel htmlFor="outlined-age-native-simple">Select Item</InputLabel>
                        <Select
                            native
                            onChange={this.props.onChange}
                            label="Select Item"
                            inputProps={{
                                name: 'item',
                                id: 'outlined-age-native-simple',
                            }}
                            className={classes.text}
                        >
                            <option aria-label="None" value="" />
                            {itemData.items.map(item => {
                                return (
                                    <option value={item}>{item}</option>
                                )
                            })}
                        </Select>
                    </FormControl>
                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel htmlFor="outlined-age-native-simple">Location</InputLabel>
                        <Select
                            native
                            onChange={this.props.onChange}
                            label="Location"
                            inputProps={{
                                name: 'country',
                                id: 'outlined-age-native-simple',
                            }}
                            className={classes.text}
                        >
                            <option aria-label="None" value="" />
                            {countryData.country.map(country => {
                                return (
                                    <option value={country}>{country}</option>
                                )
                            })}
                        </Select>
                    </FormControl>
                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel htmlFor="outlined-age-native-simple">Comparing Year</InputLabel>
                        <Select
                            native
                            onChange={this.props.onChange}
                            label="Comparing Year"
                            inputProps={{
                                name: 'year',
                                id: 'outlined-age-native-simple',
                            }}
                            className={classes.text}
                        >
                            <option aria-label="None" value="" />
                            {yearData.year.map(year => {
                                return (
                                    <option value={year}>{year}</option>
                                )
                            })}
                        </Select>
                    </FormControl>
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

