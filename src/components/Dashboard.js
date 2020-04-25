import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import {
  fade,
  ThemeProvider,
  createMuiTheme,
} from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import { green } from '@material-ui/core/colors';


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
  });

class Dashboard extends Component {
    render() {
        const { classes } = this.props
        return (
            <div>
                <AppBar position="static">
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
