import { Box, Typography } from '@mui/material';
import { unwrapResult } from '@reduxjs/toolkit';
import { useSnackbar } from 'notistack';
import { FormattedMessage } from 'react-intl';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { MyButton } from '_/components';
import { MyTextField } from '_/components/CustomComponents/CustomMui';
import { login } from '_/redux/slices';
import { routes } from '_/routes';
import AuthWrapper from './AuthWrapper';

export default function SignIn() {
    const { enqueueSnackbar } = useSnackbar();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const userData = {
            email: data.get('email'),
            password: data.get('password'),
        };

        dispatch(login(userData))
            .then(unwrapResult)
            .then((res) =>
                res.error ? enqueueSnackbar(res.error.message, { variant: 'error' }) : navigate(routes.manage),
            );
    };

    return (
        <AuthWrapper>
            <form onSubmit={handleSubmit}>
                <MyTextField
                    sx={{ marginTop: '15px' }}
                    size="small"
                    label=<FormattedMessage id="login.enter-email" />
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
                    label=<FormattedMessage id="login.enter-password" />
                    required
                    fullWidth
                    name="password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                />

                <MyButton color={{ mainColor: 'green' }} fontSize={1.5} effect type="submit" style={{ width: '100%' }}>
                    <FormattedMessage id="login.login" />
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
                    <FormattedMessage id="login.forgot-password" /> ?
                </MyButton>

                <Box sx={{ display: 'inline-flex' }}>
                    <Typography sx={{ margin: '0 5px', display: 'flex', alignItems: 'center' }}>
                        <FormattedMessage id="login.have-not-account" /> ?
                    </Typography>
                    <MyButton effect color={{ subColor: 'red ' }} to={'/signup'} text>
                        <FormattedMessage id="login.signup" />
                    </MyButton>
                </Box>
            </Box>
        </AuthWrapper>
    );
}
