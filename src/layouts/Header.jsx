import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Menu from '@mui/material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import classNames from 'classnames/bind';
import { useState } from 'react';
import icon from '_/assets/icon';
import images from '_/assets/image';
import { Button } from '_/components';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
    const [anchorElNav, setAnchorElNav] = useState();
    const [anchorElUser, setAnchorElUser] = useState();
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

    return (
        <AppBar
            position="sticky"
            sx={{
                padding: '10px 0',
                background: 'rgba(255, 255, 255, 1)',
                zIndex: 3,
                width: '100%',
                boxShadow: '0px 1px 1px rgb(0 0 0 / 18%)',
            }}
        >
            <Container sx={{ width: { 768: 750, 992: 970, 1200: 1174 }, padding: '0 15px' }}>
                <Toolbar disableGutters sx={{ width: '100%' }}>
                    <Box sx={{ display: { 0: 'flex', 768: 'none' } }}>
                        <Button onClick={handleOpenNavMenu} className={cx('padding-0-6')}>
                            <MenuIcon sx={{ color: '#000' }} />
                        </Button>
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
                            <Button onClick={handleCloseNavMenu}>
                                <Typography>Chuyên khoa</Typography>
                            </Button>{' '}
                            <Button onClick={handleCloseNavMenu}>
                                <Typography>Sở y tế</Typography>
                            </Button>{' '}
                            <Button onClick={handleCloseNavMenu}>
                                <Typography>Bác sĩ</Typography>
                            </Button>{' '}
                            <Button onClick={handleCloseNavMenu}>
                                <Typography>Gói khám</Typography>
                            </Button>
                        </Menu>
                    </Box>
                    <Button className={cx('padding-0')}>
                        <img height="40" width="160" src={icon.logo} alt="logo" />
                    </Button>
                    <Box sx={{ flexGrow: 1 }}>
                        <Box sx={{ display: { 0: 'none', 768: 'flex', justifyContent: 'center' } }}>
                            <Button onClick={handleCloseNavMenu} className={cx('nav-menu')}>
                                <Typography sx={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Chuyên khoa</Typography>
                                <Typography sx={{ display: { 0: 'none', 992: 'inline' }, fontSize: '1rem' }}>
                                    Tìm bác sĩ theo chuyên khoa
                                </Typography>
                            </Button>{' '}
                            <Button onClick={handleCloseNavMenu} className={cx('nav-menu')}>
                                <Typography sx={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Sở y tế</Typography>
                                <Typography sx={{ display: { 0: 'none', 992: 'inline' }, fontSize: '1rem' }}>
                                    Chọn bệnh viện phòng khám
                                </Typography>
                            </Button>{' '}
                            <Button onClick={handleCloseNavMenu} className={cx('nav-menu')}>
                                <Typography sx={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Bác sĩ</Typography>
                                <Typography sx={{ display: { 0: 'none', 992: 'inline' }, fontSize: '1rem' }}>
                                    Chọn bác sĩ giỏi
                                </Typography>
                            </Button>{' '}
                            <Button onClick={handleCloseNavMenu} className={cx('nav-menu')}>
                                <Typography sx={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Gói khám</Typography>
                                <Typography sx={{ display: { 0: 'none', 992: 'inline' }, fontSize: '1rem' }}>
                                    Khám sức khỏe tổng quát
                                </Typography>
                            </Button>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            flexGrow: 0,
                        }}
                    >
                        <Button to={'#'}>
                            <Typography
                                variant="h5"
                                sx={{ color: '#969495', lineHeight: '30px', alignItems: 'center', display: 'flex' }}
                            >
                                <ContactSupportIcon fontSize="large" sx={{ color: '#45c3d2' }} /> Hỗ trợ
                            </Typography>
                        </Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Header;
