import * as React from 'react';
 import Box from '@material-ui/core/Box';
import Drawer from'@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
 import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
 import ListItem from '@material-ui/core/ListItem';
 import ListItemIcon from '@material-ui/core/ListItemIcon';
 import ListItemText from '@material-ui/core/ListItemText';
 //import HomeIcon from '@mui/icons-material/Home';

//import carwashlogo from '../../assets/images/carwashlogo.png';


// import LogoutIcon from '@mui/icons-material/Logout';
// import EngineeringIcon from '@mui/icons-material/Engineering';
import {   Link } from "react-router-dom";


const drawerWidth = 240;

function MiniDrawer(props) {
    
    const itemList = [
        {
            text: "HOME",
            // icon: <HomeIcon />,
            path: '/'
           
        },
        // {
        //     text: "CARS",
        //     icon: <TimeToLeaveIcon />,
        //     path: '/admin_home/cars'
            
        // },
        // {
        //     text: "SERVICES",
        //     icon: <LocalCarWashIcon />,
        //      path: '/admin_home/services'
           
        // },
        {
            text: "CROPS",
            // icon: <EngineeringIcon />,
             path: '/crops1'
            
        },
        {
            text: "FARMERS",
            // icon: <BookmarkAddedIcon />,
             path: '/farmer'
            
        },
        {
            text: "LOGOUT",
            // icon: <LogoutIcon />,
             path: '/'
        }
            
    ];

    return (
          <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
                        <img /*src={carwashlogo}*/ alt="carwash" height={40} style={{ marginRight: '16px' }} />
                        <Typography variant='h5' display={'inline'}>Welcome, Faremr</Typography>
                    </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
                <List>
                    {itemList.map((item, index) => {
                        return (
                            <ListItem button key={item.text} >
                                 <Link to={item.path}>
                                {item.icon && <ListItemIcon>{item.icon}</ListItemIcon>}</Link>
                                    <ListItemText primary={item.text} />
                                    
                            </ListItem>
                        );
                    })}

                </List>

            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
               
            </Box>
        </Box>
    );
}

export default MiniDrawer;