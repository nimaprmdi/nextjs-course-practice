import React from "react";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton, Button, Typography, Toolbar, Box, AppBar } from "@mui/material";

const Header = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        News
                    </Typography>

                    <Link href="/">
                        <Button color="inherit" variant="contained">
                            Home
                        </Button>
                    </Link>

                    <Link href="/events">
                        <Button color="inherit" variant="contained" sx={{ ml: 2 }}>
                            Events
                        </Button>
                    </Link>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Header;
