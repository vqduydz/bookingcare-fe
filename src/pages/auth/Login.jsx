import { Box, Checkbox, FormControlLabel, Typography } from '@mui/material';
import { unwrapResult } from '@reduxjs/toolkit';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Button } from '_/components';
import { MyTextField } from '_/components/CustomComponents/CustomMui';
import { login } from '_/redux/slices';
import AuthWrapper from './AuthWrapper';

export default function SignIn() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [notif, setNotif] = useState();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setNotif();
        const data = new FormData(e.currentTarget);
        const userData = {
            email: data.get('email'),
            password: data.get('password'),
        };
        dispatch(login(userData));

        dispatch(login(userData))
            .then(unwrapResult)
            .then((res) => (res.error ? setNotif(res.error.message) : navigate('/usermanager')));
    };

    return (
        <AuthWrapper>
            <form onSubmit={handleSubmit}>
                <MyTextField
                    sx={{ marginBottom: '2vh' }}
                    size="small"
                    label="Enter Email"
                    required
                    fullWidth
                    id="email"
                    name="email"
                    autoComplete="email"
                    type="email"
                    autoFocus
                />
                <MyTextField
                    size="small"
                    label="Enter Password"
                    required
                    fullWidth
                    name="password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                />
                <Box sx={{ height: '1.3rem', marginTop: '1vh' }}>
                    {notif && (
                        <Typography sx={{ color: 'red', height: '100%', fontSize: '1.2rem' }} variant="body2">
                            {notif}
                        </Typography>
                    )}
                </Box>
                <FormControlLabel
                    sx={{ display: 'flex' }}
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                />

                <Button primary className="btn" type="submit">
                    Log in
                </Button>
            </form>
            <Box sx={{ '& *': { fontSize: '14px' } }}>
                <Button
                    to={'/forgotpassword'}
                    text
                    style={{
                        padding: 0,
                    }}
                >
                    Forgot Password ?
                </Button>

                <Box sx={{ display: 'inline-flex' }}>
                    Don't have an account ?
                    <Button to={'/signup'} text>
                        Sign up
                    </Button>
                </Box>
            </Box>
        </AuthWrapper>
    );
}
