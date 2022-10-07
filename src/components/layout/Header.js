import React from 'react';

// mui
import { AppBar, Container, Toolbar, Typography } from '@mui/material';

// mui icons
import BookIcon from '@mui/icons-material/Book';

const Header = () => {
    return (
        <AppBar position='static'>
            <Container maxWidth="lg">
                <Toolbar>
                    <Typography variant='h5' component="h1" flexGrow={1} fontWeight="bold">ایران وبلاگ</Typography>
                    <BookIcon />
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;