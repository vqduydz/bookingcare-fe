import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Box, Container, Toolbar, Typography } from '@mui/material';
import { Button } from '_/components';

export default function Header(props) {
    const { currentUser, setAddUser, sideNav, setSideNav } = props;

    const { email, firstName, lastName, position } = currentUser;
    // {
    //     `${firstName} ${lastName}`;
    // }
    return (
        <AppBar
            position="fixed"
            sx={{
                padding: '5px 0',
                background: 'rgba(255, 255, 255, 1)',
                zIndex: 2,
                width: '100%',

                boxShadow: '0px 1px 1px rgb(0 0 0 / 18%)',
                '& h3': {
                    fontSize: '16px ',
                },
            }}
        >
            <Container sx={{ padding: '0 15px' }}>
                <Toolbar disableGutters sx={{ width: '100%', minHeight: 'unset' }}>
                    <Box
                        sx={{
                            display: 'flex',
                            columnGap: '10px',
                            alignItems: 'center',
                            width: '100%',
                            '& h4 , .btn': {
                                fontSize: '13px',
                                maxHeight: '20px',
                                '& *': {
                                    whiteSpace: 'unset',
                                },
                            },
                        }}
                    >
                        <Box sx={{ display: { 0: 'block', 768: 'none' } }}>
                            <Button onClick={() => setSideNav(!sideNav)} style={{ padding: '0 6px' }}>
                                <MenuIcon sx={{ color: '#000' }} />
                            </Button>
                            {sideNav && (
                                <Box
                                    sx={{
                                        padding: '1vh',
                                        position: 'fixed',
                                        left: 0,
                                        top: '30px',
                                        maxWidth: '60vh',
                                        height: '100vh',
                                        backgroundColor: '#fff',
                                        '& h4 , .btn': {
                                            mt: '10px',
                                            width: '100%',
                                        },
                                        '& .btn': {
                                            padding: '15px',
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

                                    <Button
                                        onClick={() => {
                                            setAddUser(true);
                                            setSideNav(false);
                                        }}
                                        primary
                                        className="btn"
                                    >
                                        Add new user
                                    </Button>
                                    <Button
                                        onClick={() => {
                                            setAddUser(true);
                                            setSideNav(false);
                                        }}
                                        primary
                                        className="btn"
                                    >
                                        Log out
                                    </Button>
                                </Box>
                            )}
                        </Box>
                        <Typography
                            sx={{
                                textTransform: 'uppercase',
                                fontWeight: 'bold',
                                mr: '10px',
                            }}
                            variant="h3"
                        >
                            Manager USER
                        </Typography>
                        <Box
                            sx={{
                                flex: 1,
                                display: { 0: 'none', 768: 'flex' },
                                position: 'relative',
                                alignItems: 'center',
                                '& h4 , .btn': {
                                    mt: 0,
                                    width: '100%',
                                    maxHeight: '20px',
                                    '+ .btn': {
                                        marginLeft: '5px',
                                    },
                                    '& *': {
                                        whiteSpace: 'unset',
                                    },
                                },
                            }}
                        >
                            <Typography
                                sx={{ display: 'inline-flex', minWidth: '300px', fontStyle: 'italic' }}
                                variant="h4"
                            >
                                Current user : <b>{email}</b>
                            </Typography>
                            <Typography
                                sx={{ display: 'inline-flex', minWidth: '300px', fontStyle: 'italic' }}
                                variant="h4"
                            >
                                Position : <b>{position}</b>
                            </Typography>
                            <Box
                                sx={{
                                    right: 0,
                                    position: 'absolute',
                                    float: 'right',
                                    justifyContent: 'flex-end',
                                    display: 'flex',
                                }}
                            >
                                <Button
                                    onClick={() => setAddUser(true)}
                                    style={{ padding: '3px 8px', backgroundColor: '#f1f1f1' }}
                                    className="btn"
                                >
                                    Add new user
                                </Button>
                                <Button style={{ padding: '3px 8px', backgroundColor: '#f1f1f1' }} className="btn">
                                    Log out
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
