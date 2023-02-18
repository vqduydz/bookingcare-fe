import { Box, Typography } from '@mui/material';
import { useSnackbar } from 'notistack';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { MyButton } from '_/components';
import { MyTextField } from '_/components/CustomComponents/CustomMui';
import { useAuth } from '_/context/AuthContext';
import { getToken, login } from '_/redux/slices';
import { routes } from '_/routes';
import AuthWrapper from './AuthWrapper';

export default function SignIn() {
    const { enqueueSnackbar } = useSnackbar();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { currentUser } = useAuth();
    console.log(currentUser);
    useEffect(() => {
        if (currentUser) navigate(routes.manage);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentUser]);

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            const data = new FormData(e.currentTarget);
            const userData = {
                email: data.get('email'),
                password: data.get('password'),
            };

            const resultAction = await dispatch(getToken(userData));
            const token = resultAction.payload;
            console.log({ token });
            if (token.error) {
                enqueueSnackbar(token.error, { variant: 'error' });
                return;
            }
            dispatch(login(token));
            enqueueSnackbar('welcome', { variant: 'success' });
        } catch (error) {
            enqueueSnackbar('Thông báo của bạn ở đây!', { variant: 'error' });
        }
    };

    return (
        <AuthWrapper>
            <form onSubmit={handleSubmit}>
                <MyTextField
                    sx={{ marginTop: '15px' }}
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
                    sx={{ margin: '15px 0' }}
                    size="small"
                    label="enter-password"
                    required
                    fullWidth
                    name="password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                />

                <MyButton color={{ mainColor: 'green' }} fontSize={1.5} effect type="submit" style={{ width: '100%' }}>
                    login
                </MyButton>
            </form>
            <Box sx={{ mt: '10px', '& *': { fontSize: '14px' } }}>
                <MyButton
                    effect
                    to={'/forgotpassword'}
                    text
                    color={{ subColor: 'red ' }}
                    style={{
                        padding: 0,
                    }}
                >
                    forgot-password?
                </MyButton>

                <Box sx={{ display: 'inline-flex' }}>
                    <Typography sx={{ margin: '0 5px', display: 'flex', alignItems: 'center' }}>
                        have-not-account ?
                    </Typography>
                    <MyButton effect color={{ subColor: 'red ' }} to={'/signup'} text>
                        signup
                    </MyButton>
                </Box>
            </Box>
        </AuthWrapper>
    );
}
