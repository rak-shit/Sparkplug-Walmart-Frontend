import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
      fontWeight: "700",
      fontFamily: "courier",
      fontSize: "150%",
    },
    navbar: {
        boxShadow: "5px 5px 8px #888888",
    }
});

class Dashboard extends Component {
    render() {
        const { classes } = this.props
        return (
            <div className={classes.root}>
                <AppBar position="static" className={classes.navbar} >
                    <Toolbar>
                        <Typography variant="h6" className={classes.title}>
                            Sparkplug-Walmart
                        </Typography>
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
