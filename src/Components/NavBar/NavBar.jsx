import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import CartWidget from '../CartWidget/CartWidget';
import s from '../NavBar/NavBar.module.css'
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar className= {s.colorNavBar} position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link to='/'><img src="https://i.ibb.co/d4gM0Nh/Logotipo-bear.png" alt="logo" width='120px' className= {s.logoImagen} /></Link>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
            <ul className={s.colorLink}><Link to='/category/remeras' className= {s.linkNavbar}>Remeras</Link></ul>
            <ul className={s.colorLink}><Link to='/category/totebags' className= {s.linkNavbar}>Totebags</Link></ul>
            <ul className={s.colorLink}><Link to='/category/combos' className= {s.linkNavbar}>Combos</Link></ul>
            
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}><Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: '#533814', display: 'block' }}>
              <Link to='/category/remeras' className= {s.linkNavbar}>Remeras</Link>
              <Link to='/category/totebags' className= {s.linkNavbar}>Totebags</Link>
              <Link to='/category/combos' className= {s.linkNavbar}>Combos</Link>
              </Button>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
            <Link to='/category/remeras' className= {s.linkNavbar}>Remeras</Link>
            <Link to='/category/totebags' className= {s.linkNavbar}>Totebags</Link>
            <Link to='/category/combos' className= {s.linkNavbar}>Combos</Link>
              ))
            </Menu>
            <CartWidget/>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;


