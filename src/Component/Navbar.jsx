import React, { useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { styled, alpha } from '@mui/material/styles';
import "../Asset/Css/Style.css"
import { Link, useNavigate } from 'react-router-dom';
import pic from "../Asset/images/user.jpg"
import { CartContext } from '../Store/CartContext';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
const pages = ['Home', 'Shop', 'Contact','Admin'];
const settings = ['Profile', 'Cart', 'Logout'];
const Navbar = () => {
    const navigate = useNavigate()
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '30%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    }));
    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                width: '12ch',
                '&:focus': {
                    width: '20ch'
                },
            },
        },
    }));
    function logout() {
        localStorage.clear()
        navigate("/login")
    }
    var { qty } = useContext(CartContext)
    return (
        <>
            <AppBar className='background sticky-top'>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>

                        <Typography
                            variant="h6"
                            noWrap
                            component={Link}
                            style={{ color: "white", textDecoration: "none" }}
                            to="/"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            RightToFashion
                        </Typography>


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
                                {pages.map((page) => (
                                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                                        <Typography

                                            component={Link}
                                            style={{ color: "black", textDecoration: "none" }}
                                            to={page === "Home" ? "/" : page === "Shop" ? "/shop/All/All/All" : `/${page}`}

                                            textAlign="center">{page}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>

                        <Typography
                            variant="h5"
                            noWrap
                            component={Link}
                            style={{ color: "white", textDecoration: "none" }}
                            to="/"
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,

                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            RightToFashion
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {pages.map((page) => (
                                <Button

                                    key={page}
                                    component={Link}
                                    style={{ color: "white", textDecoration: "none" }}
                                    to={page === "Home" ? "/" : page === "Shop" ? "/shop/All/All/All" : `/${page}`}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    {page}
                                </Button>
                            ))}
                        </Box>
                        <Search style={{ marginRight: "10px" }}>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>
                        {
                            localStorage.getItem("login") ?
                                <Box sx={{ flexGrow: 0 }}>
                                    <Tooltip title="Open settings">
                                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                            <Avatar alt="User" src={pic} />
                                        </IconButton>
                                    </Tooltip>
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
                                        {settings.map((setting) => (
                                            <MenuItem key={setting} onClick={handleCloseUserMenu}>

                                                <Button
                                                 
                                                    style={{ color: "black", textDecoration: "none" }}
                                                    onClick={() => {
                                                        if (setting === "Logout")
                                                            logout()
                                                        else
                                                            navigate(`/${setting}`)
                                                    }}>{
                                                        setting === "Cart" ? <div>
                                                            <ShoppingBagIcon></ShoppingBagIcon>Cart
                                                        </div>:setting
                                                    }
                                                    
                                                </Button>
                                            </MenuItem>
                                        ))}
                                    </Menu>
                                </Box>
                                : <Link to="/Login" color="inherit" className='text-decoration-none text-light'>Login</Link>
                        }
                    </Toolbar>
                </Container>
            </AppBar>
            <br />
            <br />
            <br />

        </>
    );
};
export default Navbar;
