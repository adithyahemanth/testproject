import React from 'react';
import {Link} from 'react-router-dom'
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import './SideDrawer.css'

const drawerWidth = 210;
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  Tabs:{
color:'white'
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    
    }),
    backgroundColor:'black',
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      
      duration: theme.transitions.duration.enteringScreen,
    }),
    
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    backgroundColor:'black',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
},
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
    backgroundColor:'black',
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function MiniDrawer(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [value,setvalue]=React.useState(0)
  const handleDrawerOpen = () => {
    setOpen(true);
  };
const onClickthird = (index) => {
setvalue(index)
}
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
       >
        <Toolbar>
          {/*<IconButton
            color='inherit'
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
                 <MenuIcon/>
          </IconButton>*/}
          <Typography>
          <div class="tab">
          <Link to='/third'> <button className={value==1 ?"active" :"tablinks"} onClick={()=>onClickthird(1)} >thirds</button></Link>
          <Link to='/fifth'> <button className={value==2?"active":"tablinks"} onClick={()=>onClickthird(2)}>fifths</button></Link>
          <Link to='/magic'><button className={value==3?"active":"tablinks"} onClick={()=>onClickthird(3)}>magic</button></Link>
        </div>

      </Typography>
        </Toolbar>
     </AppBar>
     { /*<Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
    {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon style={{color: 'black'}}/>}
          </IconButton>
        </div>
        <Divider />
        <List>
          
        </List>
        <Divider />
      </Drawer>*/}
      </div>
      )
      }
