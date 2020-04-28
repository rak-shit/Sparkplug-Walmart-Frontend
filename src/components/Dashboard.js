import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import PropTypes from 'prop-types';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Link from '@material-ui/core/Link';
import thunder from '../svgs/observation.png'

const styles = theme => ({
    root: {
      flexGrow: 1,      
    },
    title: {
      flexGrow: 1,
      fontWeight: "700",
      fontSize: "150%",
      fontFamily: "Rubik, sans-serif",
    },
    navbar: {
        boxShadow: "5px 5px 8px #888888",
        width: "100%"
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    button: {
        fontFamily: "Rubik, sans-serif",
        fontSize: "100%",
        overflowX: "hidden"
    }
});

class Dashboard extends Component {
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

    handleClose = (event) => {
        this.setState({
            anchorEl: null
        })
    }
    
    render() {
        const { classes } = this.props
        return (
            <div className={classes.root}>
                <AppBar position="static" className={classes.navbar} >
                    <Toolbar variant="dense">
                        <Typography variant="h6" className={classes.title}>
                            <IconButton>
                                <img src={thunder} height="50" width="50" />
                            </IconButton>
                            Sparkplug-Walmart
                        </Typography>
                        <Button className={classes.button} color="inherit" aria-controls="simple-menu" aria-haspopup="true" onClick={this.handleClick}><b>References</b></Button>
                        <Menu
                            id="simple-menu"
                            anchorEl={this.state.anchorEl}
                            keepMounted
                            open={Boolean(this.state.anchorEl)}
                            onClose={this.handleClose}
                        >
                            <MenuItem onClick={this.handleClose}><Link href="https://www.fox4news.com/news/texas-ag-accuses-dominant-egg-supplier-in-texas-of-price-gouging-during-covid-19-pandemic">Incident 1</Link></MenuItem>
                            <MenuItem onClick={this.handleClose}><Link href="https://bringmethenews.com/minnesota-news/st-paul-company-hiked-prices-of-sanitation-products-food-during-pandemic">Incident 2</Link></MenuItem>
                       </Menu>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

Dashboard.propTypes = {
    classes: PropTypes.object.isRequired
};
  
export default withStyles(styles)(Dashboard);
