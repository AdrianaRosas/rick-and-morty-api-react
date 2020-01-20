import React from 'react';
import {withStyles} from '@material-ui/core/styles'
import {AppBar, Toolbar, Typography} from '@material-ui/core';



function AppNav(props){
   const { classes } = props;

    return (
        <AppBar className={classes.NavColor} position="static">
            <Toolbar variant="h1" component="p">
               <Typography>
                 Rick and Morty Characters
               </Typography>
            </Toolbar>
        </AppBar>
    )
}
export default withStyles({
    NavColor:{
        backgroundColor: '#EF5350'
    }
})(AppNav);