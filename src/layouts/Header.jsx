import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Menu from '@mui/material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import classNames from 'classnames/bind';
import { useSnackbar } from 'notistack';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import icon from '_/assets/icon';
import images from '_/assets/image';
import { Button, MyButton } from '_/components/common';
import { styleBtn } from '_/components/pages/system/styleBtn';
import { useAuth } from '_/context/AuthContext';
import { logout } from '_/redux/slices';
import { persistor } from '_/redux/store';
import { routes } from '_/routes';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
    const { enqueueSnackbar } = useSnackbar();
    const dispatch = useDispatch();
    const { handleChangeLanguage, language, currentUser } = useAuth();
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

    const handleLogout = () => {
        dispatch(logout());
        persistor.purge();
        enqueueSnackbar('Goodbye , see you again', { variant: 'info' });
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
            <Container
                sx={{
                    width: { 768: 750, 992: 970, 1200: 1174 },
                    padding: '0 15px',
                }}
            >
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
                    <Button to={'/'} className={cx('padding-0')}>
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
                            display: 'flex',
                            flexGrow: 0,
                            '& .lg-btn': {
                                color: '#45c3d2',
                            },
                            '& .lg-btn-active': { color: 'red' },
                        }}
                    >
                        <Button
                            primary
                            onClick={() => handleChangeLanguage('vi')}
                            style={{ padding: 0 }}
                            className={language === 'vi' ? 'lg-btn lg-btn-active' : 'lg-btn'}
                        >
                            VN
                        </Button>
                        <Button
                            primary
                            onClick={() => handleChangeLanguage('en')}
                            style={{ marginLeft: '5px', padding: 0 }}
                            className={language === 'en' ? 'lg-btn lg-btn-active' : 'lg-btn'}
                        >
                            EN
                        </Button>
                    </Box>
                    <Box
                        sx={{
                            ...styleBtn,
                            flexGrow: 0,
                        }}
                    >
                        <Button to={'#'} style={{ marginLeft: '5px', padding: '0 10px' }}>
                            <Typography
                                variant="h5"
                                sx={{ color: '#969495', lineHeight: '30px', alignItems: 'center', display: 'flex' }}
                            >
                                <ContactSupportIcon fontSize="large" sx={{ color: '#45c3d2' }} /> Hỗ trợ
                            </Typography>
                        </Button>
                    </Box>
                    {currentUser ? (
                        <MyButton
                            effect
                            fontSize={1.3}
                            padding="5px 15px"
                            color={{ mainColor: 'red' }}
                            onClick={handleLogout}
                            type="button"
                        >
                            Log out
                        </MyButton>
                    ) : (
                        <MyButton
                            effect
                            fontSize={1.3}
                            padding="5px 15px"
                            color={{ mainColor: 'green' }}
                            to={routes.login}
                            type="button"
                        >
                            Log in
                        </MyButton>
                    )}
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Header;
