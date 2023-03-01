import { AppBar, Box, styled, Tooltip, Typography } from '@mui/material';
import './Profile.scss';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Button } from '_/components/common';
import { useRef } from 'react';

const Profile = () => {
    const btnRef = useRef(null);

    const handleButtonClick = () => {
        btnRef.current.focus();
    };

    const Container = styled('div')(({ theme }) => ({
        [theme.breakpoints.up('0')]: {
            width: '100%',
        },
        [theme.breakpoints.up('992')]: {
            width: '970px',
        },
        [theme.breakpoints.up('1200')]: {
            width: '1170px',
        },
    }));
    return (
        <Box sx={{ background: 'linear-gradient(54deg, #8bfff4, #9164ff)', minHeight: '100vh', minWidth: '400px' }}>
            <Container
                sx={{
                    marginRight: 'auto',
                    marginLeft: 'auto',
                    border: '1px solid #555',
                    paddingRight: { 0: 0, 768: '15px' },
                    paddingLeft: { 0: 0, 768: '15px' },
                }}
            >
                <AppBar
                    position="sticky"
                    sx={{
                        background: 'rgb(255 255 255 / 50%)',
                        zIndex: 3,
                        width: '100%',
                        boxShadow: '0px 1px 1px rgb(0 0 0 / 18%)',
                        borderRadius: { 0: 0, 768: '10px' },
                        padding: '20px',
                        marginTop: '30px',
                        display: 'flex',
                        flexDirection: { 0: 'column', 768: 'row' },
                    }}
                >
                    <Box
                        sx={{
                            maxWidth: '450px',
                            flex: 1,
                            display: 'flex',
                            flexDirection: 'row',
                            padding: { 768: '10px' },

                            alignItems: 'center',
                            justifyContent: 'space-between',
                            '::after': {
                                768: {
                                    content: `''`,
                                    width: '2px',
                                    height: '100%',
                                    backgroundColor: '#fff',
                                    borderRadius: '10px',
                                },
                            },
                        }}
                    >
                        <Box
                            sx={{
                                backgroundImage: `url('https://scontent.fsgn5-10.fna.fbcdn.net/v/t39.30808-6/278677145_3235569006698630_6620419373723929052_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ULWAX-WEdu0AX963E0I&_nc_ht=scontent.fsgn5-10.fna&oh=00_AfDceV1Bs1cNNC3YfP3zdfUIqtY-0YihnnrOJCPiuSWpbA&oe=64045560')`,
                                maxWidth: '150px',
                                height: '200px',
                                backgroundPosition: 'center center',
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover',
                                borderRadius: '10px',
                                boxShadow: '2px 2px 7px 0px  rgb(50 50 50 / 40%)',
                                backgroundColor: 'transparent',
                                flex: 1,
                            }}
                        />
                        <Box
                            sx={{
                                flex: 1,
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: { 0: 'start', 768: 'center' },
                                alignItems: 'flex-start',
                            }}
                        >
                            <Box
                                sx={{
                                    flex: 1,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: { 0: 'start', 768: 'center' },
                                    alignItems: 'flex-start',
                                    margin: '0 auto',
                                }}
                            >
                                <Typography sx={{ fontSize: '2rem' }} variant="tieude">
                                    Vũ Quốc Duy
                                </Typography>
                                <Typography sx={{ color: '#777', fontWeight: 300 }} variant="phude">
                                    Fullstack Dev
                                </Typography>
                                <Box
                                    className="action"
                                    sx={{
                                        mt: '20px',
                                        display: 'flex',
                                        '& .social-btn': {
                                            '&:hover': { borderColor: '#4741ff', color: '#4741ff' },
                                        },
                                    }}
                                >
                                    <Tooltip title="Facebook">
                                        <Button
                                            ref={btnRef}
                                            onMouseEnter={() => handleButtonClick}
                                            className="social-btn"
                                            href="https://www.facebook.com/vqduydz/"
                                            target="_blank"
                                        >
                                            <FacebookOutlinedIcon sx={{ width: '30px', height: '30px' }} />
                                        </Button>
                                    </Tooltip>{' '}
                                    <Tooltip title="GitHub">
                                        <Button
                                            ref={btnRef}
                                            onMouseLeave={handleButtonClick}
                                            className="social-btn"
                                            href="https://github.com/vqduydz"
                                            target="_blank"
                                        >
                                            <GitHubIcon sx={{ width: '30px', height: '30px' }} />
                                        </Button>
                                    </Tooltip>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            flex: 1,
                            display: 'flex',
                            padding: { 0: '20px 10px 10px 10px', 768: '10px' },
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Box sx={{ flex: 1, rowGap: '30px', display: 'grid' }}>
                            <Typography sx={{ color: '#777' }} variant="phude">
                                EMAIL
                                <p style={{ color: '#000', padding: 0, margin: 0 }}>vqduydz@gmail.com</p>
                            </Typography>
                            <Typography sx={{ color: '#777' }} variant="phude">
                                NGÀY SINH
                                <p style={{ color: '#000', padding: 0, margin: 0 }}>26/05/1991</p>
                            </Typography>
                        </Box>
                        <Box sx={{ flex: 1, rowGap: '30px', display: 'grid' }}>
                            <Typography sx={{ color: '#777' }} variant="phude">
                                SỐ ĐIỆN THOẠI
                                <p style={{ color: '#000', padding: 0, margin: 0 }}>0384 026 028</p>
                            </Typography>
                            <Typography sx={{ color: '#777' }} variant="phude">
                                QUÊ QUÁN
                                <p style={{ color: '#000', padding: 0, margin: 0 }}>Cẩm Mỹ - Đồng Nai</p>
                            </Typography>
                        </Box>
                    </Box>
                </AppBar>
                <Box
                    sx={{
                        background: 'rgb(255 255 255 / 50%)',
                        zIndex: 3,
                        width: '100%',
                        boxShadow: '0px 1px 1px rgb(0 0 0 / 18%)',
                        borderRadius: { 0: 0, 768: '10px' },
                        padding: '20px',
                        marginTop: '30px',
                        display: 'flex',
                        flexDirection: { 0: 'column', 768: 'row' },
                    }}
                >
                    <Box>nav</Box>
                    <Box>content</Box>
                </Box>
            </Container>
        </Box>
    );
};

export default Profile;
