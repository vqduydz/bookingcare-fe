import AutoStoriesSharpIcon from '@mui/icons-material/AutoStoriesSharp';
import CropFreeIcon from '@mui/icons-material/CropFree';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import FilterCenterFocusIcon from '@mui/icons-material/FilterCenterFocus';
import GitHubIcon from '@mui/icons-material/GitHub';
import ImportContactsSharpIcon from '@mui/icons-material/ImportContactsSharp';
import InterestsIcon from '@mui/icons-material/Interests';
import InterestsOutlinedIcon from '@mui/icons-material/InterestsOutlined';
import PsychologyIcon from '@mui/icons-material/Psychology';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SchoolIcon from '@mui/icons-material/School';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import { AppBar, Box, styled, Tooltip, Typography } from '@mui/material';
import { useRef, useState } from 'react';
import images from '_/assets/images';

import { Button, MyButton } from '_/components/common';
import { routes } from '_/routes';
import { Project } from '..';
import Hobbys from './Hobbys';
import './Profile.scss';
import Skills from './Skills';
import Target from './Target';

const Profile = () => {
    const [children, setChildren] = useState({
        skills: false,
        project: false,
        target: true,
        hobbys: false,
        job: false,
    });
    const { skills, project, target, hobbys, job } = children;
    const btnRef = useRef(null);

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

    const btnStyles = {
        flex: 1,
        backgroundColor: 'green',
        color: '#fff',
        b: {
            backgroundColor: 'green',
            color: '#fff',
        },
    };

    console.log(`${images['./avatar.png']}`);
    return (
        <Box
            sx={{
                background: 'linear-gradient(54deg, #8bfff4, #9164ff)',
                minWidth: '450px',
                padding: { 0: '2px', 768: '10px' },
                minHeight: '100vh',
            }}
        >
            <Container
                sx={{
                    marginRight: 'auto',
                    marginLeft: 'auto',
                    paddingRight: { 0: 0, 768: '15px' },
                    paddingLeft: { 0: 0, 768: '15px' },
                }}
            >
                <AppBar
                    position="static"
                    sx={{
                        background: 'rgb(255 255 255 / 50%)',
                        zIndex: 1,
                        width: '100%',
                        boxShadow: '0px 1px 1px rgb(0 0 0 / 18%)',
                        borderRadius: { 0: 0, 768: '10px' },
                        padding: '20px',
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    <Box
                        sx={{
                            padding: '10px',
                            zIndex: 1,
                            width: '100%',
                            borderRadius: { 0: 0, 768: '10px' },
                            display: 'flex',
                            flexDirection: 'row',
                            borderBottom: '1px solid #fff',
                            justifyContent: 'space-around',
                            gap: '20px',
                            flexWrap: 'wrap',
                        }}
                    >
                        <Box
                            sx={{
                                background: `transparent center/cover url(${images['./avatar.png']}) no-repeat`,
                                width: '150px',
                                height: '200px',
                                borderRadius: '10px',
                                boxShadow: '2px 2px 7px 0px  rgb(50 50 50 / 40%)',
                            }}
                        />

                        <Box
                            sx={{
                                flex: 1,
                                position: 'relative',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                '::after': {
                                    560: {
                                        display: 'block',
                                        content: `''`,
                                        width: '1px',
                                        height: '100%',
                                        backgroundColor: '#fff',
                                        borderRadius: '10px',
                                        position: 'absolute',
                                        right: 0,
                                        top: 0,
                                    },
                                },
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                <Typography sx={{ fontSize: '2rem' }} variant="tieude">
                                    V?? Qu???c Duy
                                </Typography>
                                <Typography sx={{ color: '#777', fontWeight: 300 }} variant="phude">
                                    Fullstack Dev
                                </Typography>
                                <Box
                                    className="action"
                                    sx={{
                                        mt: '20px',
                                        '& .social-btn': {
                                            '&:hover': { borderColor: '#4741ff' },
                                        },
                                    }}
                                >
                                    <Tooltip title="Facebook">
                                        <Button
                                            ref={btnRef}
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
                        <Box
                            sx={{
                                width: { 0: '100%' },
                                flex: { 560: 1 },
                                display: { 0: 'flex', 560: 'grid' },
                                '& p': {
                                    fontSize: '1.5rem',
                                    fontWeight: 500,
                                    padding: 0,
                                    margin: 0,
                                },
                            }}
                        >
                            <Box sx={{ flex: { 0: 1, 560: 'unset' } }}>
                                <Box>
                                    <Typography sx={{ color: '#777' }}>EMAIL:</Typography>
                                    <Typography>vqduydz@gmail.com</Typography>
                                </Box>
                                <Box>
                                    <Typography sx={{ color: '#777' }}>NG??Y SINH:</Typography>
                                    <Typography>26/05/1991</Typography>
                                </Box>
                            </Box>
                            <Box sx={{ flex: { 0: 1, 560: 'unset' } }}>
                                <Box>
                                    <Typography sx={{ color: '#777' }}>S??? ??I???N THO???I:</Typography>
                                    <Typography>0384 026 028</Typography>
                                </Box>
                                <Box>
                                    <Typography sx={{ color: '#777' }}>QU?? QU??N:</Typography>
                                    <Typography>C???m M??? - ?????ng Nai</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            width: '100%',
                            borderRadius: { 0: 0, 768: '10px' },
                            display: 'flex',
                            position: 'sticky',
                            marginTop: '10px',
                            justifyContent: 'space-around',
                            gap: '2px',
                            '& .profile-nav-btn': {
                                minWidth: '85px',
                                '& .active': { display: 'none' },

                                '&:hover': {
                                    '& .normal': { display: 'none' },
                                    '& .active': { display: 'block' },
                                },

                                '& .nav-btn_inner': {
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    '& p': { margin: 0 },
                                },
                            },
                        }}
                    >
                        <Tooltip title="M???c Ti??u" arrow>
                            <MyButton
                                padding="5px 10px"
                                style={target ? btnStyles : { flex: 1 }}
                                effect
                                color={{
                                    mainColor: target ? 'green' : 'orange',
                                }}
                                className="profile-nav-btn"
                                onClick={() => setChildren({ target: true })}
                            >
                                <Box className="nav-btn_inner">
                                    <CropFreeIcon fontSize="large" className="normal" />
                                    <FilterCenterFocusIcon fontSize="large" className="active" />
                                    <Typography
                                        sx={{
                                            fontSize: '1.2rem',
                                            fontWeight: 500,
                                            display: { 0: 'none', 600: 'block' },
                                        }}
                                    >
                                        M???c Ti??u
                                    </Typography>
                                </Box>
                            </MyButton>
                        </Tooltip>
                        <Tooltip title="K??? N??ng" arrow>
                            <MyButton
                                padding="5px 10px"
                                style={skills ? btnStyles : { flex: 1 }}
                                effect
                                color={{ mainColor: skills ? 'green' : 'orange' }}
                                className="profile-nav-btn"
                                onClick={() => setChildren({ skills: true })}
                            >
                                <Box className="nav-btn_inner">
                                    <PsychologyOutlinedIcon fontSize="large" className="normal" />
                                    <PsychologyIcon fontSize="large" className="active" />
                                    <Typography
                                        sx={{
                                            fontSize: '1.2rem',
                                            fontWeight: 500,
                                            display: { 0: 'none', 600: 'block' },
                                        }}
                                    >
                                        K??? N??ng
                                    </Typography>
                                </Box>
                            </MyButton>
                        </Tooltip>
                        <Tooltip title="H???c V???n & C??ng Vi???c" arrow>
                            <MyButton
                                padding="5px 10px"
                                style={job ? btnStyles : { flex: 1 }}
                                effect
                                color={{ mainColor: job ? 'green' : 'orange' }}
                                className="profile-nav-btn"
                                onClick={() => setChildren({ job: true })}
                            >
                                <Box className="nav-btn_inner">
                                    <SchoolIcon fontSize="large" className="normal" />
                                    <SchoolOutlinedIcon fontSize="large" className="active" />
                                    <Typography
                                        sx={{
                                            fontSize: '1.2rem',
                                            fontWeight: 500,
                                            display: { 0: 'none', 600: 'block' },
                                        }}
                                    >
                                        H???c V???n &
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontSize: '1.2rem',
                                            fontWeight: 500,
                                            display: { 0: 'none', 600: 'block' },
                                        }}
                                    >
                                        C??ng Vi???c
                                    </Typography>
                                </Box>
                            </MyButton>
                        </Tooltip>
                        <Tooltip title="D??? ??n ???? L??m" arrow>
                            <MyButton
                                padding="5px 10px"
                                style={project ? btnStyles : { flex: 1 }}
                                effect
                                color={{ mainColor: project ? 'green' : 'orange' }}
                                className="profile-nav-btn"
                                onClick={() => setChildren({ project: true })}
                            >
                                <Box className="nav-btn_inner">
                                    <ImportContactsSharpIcon fontSize="large" className="normal" />
                                    <AutoStoriesSharpIcon fontSize="large" className="active" />
                                    <Typography
                                        sx={{
                                            fontSize: '1.2rem',
                                            fontWeight: 500,
                                            display: { 0: 'none', 600: 'block' },
                                        }}
                                    >
                                        D??? ??n
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontSize: '1.2rem',
                                            fontWeight: 500,
                                            display: { 0: 'none', 600: 'block' },
                                        }}
                                    >
                                        ???? L??m
                                    </Typography>
                                </Box>
                            </MyButton>
                        </Tooltip>
                        <Tooltip title="S??? Th??ch" arrow>
                            <MyButton
                                padding="5px 10px"
                                style={hobbys ? btnStyles : { flex: 1 }}
                                effect
                                color={{ mainColor: hobbys ? 'green' : 'orange' }}
                                className="profile-nav-btn"
                                onClick={() => setChildren({ hobbys: true })}
                            >
                                <Box className="nav-btn_inner">
                                    <InterestsOutlinedIcon fontSize="large" className="normal" />
                                    <InterestsIcon fontSize="large" className="active" />
                                    <Typography
                                        sx={{
                                            fontSize: '1.2rem',
                                            fontWeight: 500,
                                            display: { 0: 'none', 600: 'block' },
                                        }}
                                    >
                                        S??? Th??ch
                                    </Typography>
                                </Box>
                            </MyButton>
                        </Tooltip>
                    </Box>
                </AppBar>

                <Box
                    sx={{
                        mt: '5px',
                        width: '100%',
                        background: 'rgb(255 255 255 / 50%)',
                        padding: '20px',
                        borderRadius: { 0: 0, 768: '10px' },
                        textAlign: 'justify',
                    }}
                >
                    {target && <Target />}
                    {skills && <Skills />}
                    {job && (
                        <>
                            <Typography sx={{ fontSize: '1.6rem', fontWeight: 500 }}>
                                M??nh l?? d??n tr??i ng??nh. B???t ?????u v???i l???p tr??nh web/web-app kh?? l?? mu???n...
                            </Typography>
                            <MyButton
                                to={routes.timeline}
                                text
                                padding="0 0"
                                effect
                                color={{ mainColor: 'green' }}
                                className="profile-nav-btn"
                            >
                                Chi ti???t {'>>'}
                            </MyButton>
                        </>
                    )}
                    {project && <Project />}
                    {hobbys && <Hobbys />}
                </Box>
            </Container>
        </Box>
    );
};

export default Profile;
