import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import MenuIcon from '@mui/icons-material/Menu';
const Navbar = () => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'dropdown-popover' : undefined;

    return (
        <div className=''>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" sx={{ backgroundColor: 'white', color: 'black' }}>
                    <Toolbar className='flex justify-between items-center'>
                        <div className='flex justify-center items-center gap-3'>
                            <h3 className='md:hidden lg:hidden' onClick={handleClick}><MenuIcon /></h3>
                            <h3 className='text-2xl font-serif font-bold'>BlogXYZ</h3>
                        </div>
                        <div className="hidden md:flex justify-center items-center gap-4">
                           <Link to='/'>Home</Link>
                           <Link to='/'>Feature</Link>
                           <Link to='/'>Authors</Link>
                         
                        </div>
                        <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
            </Box>

            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
              <div className="p-4 flex flex-col">
    <Link to='/'>Home</Link>
    <Link to='/'>Feature</Link>
    <Link to='/'>Authors</Link>
</div>

            </Popover>
        </div>
    );
};

export default Navbar;
