import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Box, Container, Toolbar, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { MyButton } from '_/components';
import { logout } from '_/redux/slices';
import { routes } from '_/routes';
import { activeAddClass } from '_/utills/activeAddClass';

export default function Header(props) {
    const dispatch = useDispatch();
    const { currentUser, sideNav, setSideNav } = props;
    const { email, position, firstName } = currentUser;
    console.log({ currentUser });

    const handleLogout = () => {
        dispatch(logout());
    };

    activeAddClass('header-btn');

    return (
        <AppBar
            position="sticky"
            sx={{
                backgroundColor: '#fff',
                minWidth: '768px',
                zIndex: 2,
                width: '100%',
                '& h3': {
                    fontSize: '18px ',
                },
            }}
        >
            <Container sx={{ padding: '0' }}>
                <Toolbar
                    disableGutters
                    sx={{
                        width: '100%',
                        minHeight: 'unset',
                        '& h4 , .btn': {
                            fontSize: '14px',
                            maxHeight: '30px',
                            '& *': {
                                whiteSpace: 'unset',
                            },
                        },
                    }}
                >
                    <Box sx={{ width: '100%' }}>
                        <Box
                            sx={{
                                padding: '5px 15px',
                                display: 'flex',
                                flexDirection: 'row',
                                columnGap: '10px',
                                alignItems: 'center',
                                width: '100%',
                                borderBottom: '1px solid #33333312',
                                // backgroundColor: '#a0a6e8',
                            }}
                        >
                            <Box sx={{ display: { 0: 'block', 768: 'none' } }}>
                                <MyButton
                                    style={{ backgroundColor: 'transparent' }}
                                    className="btn"
                                    onClick={() => setSideNav(!sideNav)}
                                >
                                    <MenuIcon sx={{ fontSize: '20px', color: '#000' }} />
                                </MyButton>
                                {sideNav && (
                                    <Box
                                        sx={{
                                            padding: '1vh',
                                            position: 'fixed',
                                            left: 0,
                                            top: '40px',
                                            maxWidth: '60vh',
                                            height: '100vh',
                                            backgroundColor: '#fff',
                                            '& h4 , .btn': {
                                                mt: '10px',
                                                width: '100%',
                                            },
                                            '& .btn': {
                                                '& *': { justifyContent: 'center' },
                                            },
                                            display: 'block',
                                        }}
                                    >
                                        <Typography sx={{ fontStyle: 'italic' }} variant="h4">
                                            <b>{email}</b>
                                        </Typography>
                                        <Typography sx={{ fontStyle: 'italic' }} variant="h4">
                                            <b>{position}</b>
                                        </Typography>
                                        <MyButton
                                            effect
                                            className="btn header-btn"
                                            to={'/manage/user'}
                                            onClick={() => setSideNav(!sideNav)}
                                        >
                                            User Manage
                                        </MyButton>
                                        <MyButton
                                            effect
                                            className="btn header-btn"
                                            to={'/manage/a'}
                                            onClick={() => setSideNav(!sideNav)}
                                        >
                                            A Manage
                                        </MyButton>
                                        <MyButton
                                            effect
                                            className="btn header-btn"
                                            to={'/manage/b'}
                                            onClick={() => setSideNav(!sideNav)}
                                        >
                                            B Manage
                                        </MyButton>
                                        <MyButton
                                            effect
                                            className="btn header-btn"
                                            to={'/manage/c'}
                                            onClick={() => setSideNav(!sideNav)}
                                        >
                                            C Manage
                                        </MyButton>
                                        <MyButton
                                            effect
                                            className="btn header-btn"
                                            to={'/manage/d'}
                                            onClick={() => setSideNav(!sideNav)}
                                        >
                                            D Manage
                                        </MyButton>
                                        <MyButton
                                            effect
                                            className="btn header-btn"
                                            to={'/manage/e'}
                                            onClick={() => setSideNav(!sideNav)}
                                        >
                                            E Manage
                                        </MyButton>

                                        <MyButton className="btn header-btn" onClick={handleLogout}>
                                            Log out
                                        </MyButton>
                                    </Box>
                                )}
                            </Box>
                            <MyButton
                                padding="5px"
                                fontSize={2.5}
                                className="header-btn"
                                effect
                                text
                                color={{ subColor: 'red ' }}
                                to={routes.manage}
                                style={{
                                    minWidth: '120px',
                                    fontWeight: '700',
                                    marginRight: '15px',
                                    color: 'blue',
                                }}
                            >
                                Manage
                            </MyButton>
                            <Box
                                sx={{
                                    width: '100%',
                                    display: { 0: 'none', 768: 'flex' },
                                    position: 'relative',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                }}
                            >
                                <Typography sx={{ display: 'inline-flex', fontStyle: 'italic' }} variant="h4">
                                    Welcome : <b>{firstName}</b>
                                </Typography>
                                <Typography sx={{ display: 'inline-flex', fontStyle: 'italic' }} variant="h4">
                                    Position : <b>{position}</b>
                                </Typography>

                                <MyButton
                                    effect
                                    fontSize={1.3}
                                    padding="5px 15px"
                                    color={{ mainColor: 'red' }}
                                    onClick={handleLogout}
                                    type="MyButton"
                                >
                                    Log out
                                </MyButton>
                            </Box>
                        </Box>

                        <Box
                            sx={{
                                width: '100%',
                                display: { 0: 'none', 768: 'flex' },
                                position: 'relative',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                columnGap: '1px',
                                '& .header-btn': {
                                    flex: 1,
                                    fontSize: '1.6rem',
                                    borderRadius: 0,
                                    backgroundColor: '#555',
                                    wordBreak: 'unset',
                                    '& *': { justifyContent: 'center' },
                                    '&.active': {
                                        flex: 2,
                                        backgroundColor: '#000',
                                        color: '#00ff46',
                                        b: {
                                            backgroundColor: '#000',
                                            color: '#00ff46',
                                        },
                                    },
                                },
                            }}
                        >
                            <MyButton effect className="header-btn" to={'/manage/user'}>
                                User Manage
                            </MyButton>
                            <MyButton effect className="header-btn" to={'/manage/a'}>
                                A Manage
                            </MyButton>
                            <MyButton effect className="header-btn" to={'/manage/b'}>
                                B Manage
                            </MyButton>
                            <MyButton effect className="header-btn" to={'/manage/c'}>
                                C Manage
                            </MyButton>
                            <MyButton effect className="header-btn" to={'/manage/d'}>
                                D Manage
                            </MyButton>
                            <MyButton effect className="header-btn" to={'/manage/e'}>
                                E Manage
                            </MyButton>
                        </Box>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
