import React, { useEffect, useState } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import LightModeIcon from '@mui/icons-material/LightMode';
import List from '@mui/material/List';
import ListIcon from '@mui/icons-material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'; // Import the icon

const drawerWidth = 240;
const navItems = [['About', 'about'], ['Skills', 'skills'], ['Experience', 'experience'], ['Projects', 'projects'], ['Contact', 'contact']];

function Navigation({parentToChild, modeChange}: any) {

  const {mode} = parentToChild;

  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("navigation");
      if (navbar) {
        const scrolled = window.scrollY > navbar.clientHeight;
        setScrolled(scrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (section: string) => {
    console.log(section)
    const expertiseElement = document.getElementById(section);
    if (expertiseElement) {
      expertiseElement.scrollIntoView({ behavior: 'smooth' });
      console.log('Scrolling to:', expertiseElement);  // Debugging: Ensure the element is found
    } else {
      console.error(`Element with id "${section}" not found`);  // Debugging: Log error if element is not found
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const drawer = (
    <Box className="navigation-bar-responsive" onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <p className="mobile-menu-top"><ListIcon/>Menu</p>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item[0]} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }} onClick={() => scrollToSection(item[1])}>
              <ListItemText primary={item[0]} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" id="navigation" className={`navbar-fixed-top${scrolled ? ' scrolled' : ''}`}>
        <Toolbar className='navigation-bar'>
        <Button
            onClick={() => scrollToSection('main')}
            sx={{ color: mode === 'dark' ? '#fff' : '#000', textTransform: 'none' }}
          >
            <Typography
              variant="h6"
              noWrap
              component="div"
            >
              Sijia Han
            </Typography>
          </Button>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ flexGrow: 1 }} />
          {mode === 'dark' ? (
            <LightModeIcon onClick={() => modeChange()}/>
          ) : (
            <DarkModeIcon onClick={() => modeChange()}/>
          )}
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item[0]} onClick={() => scrollToSection(item[1])} sx={{ color: '#fff' }}>
                {item[0]}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      {/* Scroll to Top Button */}

    {scrolled && (
      <Button
        onClick={scrollToTop}
        sx={{
          position: 'fixed',
          bottom: 24,
          right: 24,
          backgroundColor: 'transparent',
          color: mode === 'dark' ? '#fff' : '#000',
          borderRadius: '50%',
          width: 60,
          height: 60,
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
          transition: 'all 0.3s ease',
          '&:hover': {
            backgroundColor: mode === 'dark' ? '#ff5722' : '#1976d2', // Vibrant colors for hover
            color: '#fff',
            transform: 'translateY(-8px) scale(1.1)',
            boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.3)',
          },
          '&:active': {
            transform: 'translateY(-4px) scale(1)',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
          },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1300, // Ensure it is above other content
        }}
        aria-label="scroll to top"
      >
        <ArrowUpwardIcon sx={{ fontSize: 30 }} />
      </Button>
    )}
    </Box>
  );
}

export default Navigation;