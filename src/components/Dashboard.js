import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Link from '@material-ui/core/Link';
import PropTypes from 'prop-types';
import {
    withStyles,
} from '@material-ui/core/styles';


const styles = theme => ({
    menuButton: {
        position: 'absolute',
        right: 10,
        top: 5,
        fontFamily: 'Roboto, sans-serif',
        fontSize: "80%",
        color: "#545352"
    }
});

export class Dashboard extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             anchorEl: null
        }
    }

    handleClick = (event) => {
        this.setState({
            anchorEl: event.currentTarget
        })
    }

    handleClose = () => {
        this.setState({
            anchorEl: null
        })
    }
    render() {
        const { classes } = this.props
        return (
            <div className={classes.root}>
                <Button aria-controls="simple-menu" aria-haspopup="true" onClick={this.handleClick} className={classes.menuButton} >
                    References
                </Button>
                <Menu
                    id="simple-menu"
                    anchorEl={this.state.anchorEl}
                    keepMounted
                    open={Boolean(this.state.anchorEl)}
                    onClose={this.handleClose}
                    className={classes.menu}
                >
                    <MenuItem onClick={this.handleClose}><Link href="https://www.fox4news.com/news/texas-ag-accuses-dominant-egg-supplier-in-texas-of-price-gouging-during-covid-19-pandemic">Incident 1</Link></MenuItem>
                    <MenuItem onClick={this.handleClose}><Link href="https://bringmethenews.com/minnesota-news/st-paul-company-hiked-prices-of-sanitation-products-food-during-pandemic">Incident 2</Link></MenuItem>
                </Menu>
            </div>
        )
    }
}


Dashboard.propTypes = {
    classes: PropTypes.object.isRequired
};
  
export default withStyles(styles)(Dashboard);

