import { Box, Typography } from '@mui/material';
import { useSnackbar } from 'notistack';
import { useDispatch } from 'react-redux';
import { MyButton } from '_/components/common';
import { MyTextField } from '_/components/common/CustomComponents/CustomMui';

import { useAuth } from '_/context/AuthContext';
import { login } from '_/redux/slices';
import { routes } from '_/routes';
import AuthWrapper from './AuthWrapper';

export default function SignIn() {
    const { enqueueSnackbar } = useSnackbar();
    const dispatch = useDispatch();
    const { text: message } = useAuth();
    const text = message.auth;

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            const data = new FormData(e.currentTarget);
            const userData = {
                email: data.get('email'),
                password: data.get('password'),
            };

            const resultAction = await dispatch(login(userData));
            const token = resultAction.payload;

            if (token.errorMessage) {
                const message = token.errorMessage === 'Invalid password' ? text.invalidPassword : text.ivalidEmail;
                enqueueSnackbar(message, { variant: 'error' });
                return;
            }

            const message = token.message === 'login successfully' ? text.logged : 'welcome';
            enqueueSnackbar(message, { variant: 'success' });
        } catch (error) {
            enqueueSnackbar(text.serverError, { variant: 'error' });
        }
    };

    return (
        <AuthWrapper>
            <form onSubmit={handleSubmit}>
                <MyTextField
                    sx={{ marginTop: '15px' }}
                    size="small"
                    label={text.enterEmail}
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
                    label={text.enterPassword}
                    required
                    fullWidth
                    name="password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                />

                <MyButton color={{ mainColor: 'red' }} fontSize={1.5} effect type="submit" style={{ width: '100%' }}>
                    {text.login}
                </MyButton>
            </form>
            <Box sx={{ mt: '10px', '& *': { fontSize: '1.4rem' } }}>
                <MyButton
                    effect
                    to={routes.forgotpassword}
                    text
                    style={{
                        padding: 0,
                    }}
                >
                    {text.forgotPassword}
                </MyButton>

                <Box sx={{ display: 'inline-flex' }}>
                    <Typography sx={{ margin: '0 5px', display: 'flex', alignItems: 'center' }}>
                        {text.haveNotAccount} ?
                    </Typography>
                    <MyButton effect to={routes.register} text>
                        {text.register}
                    </MyButton>
                </Box>
            </Box>
        </AuthWrapper>
    );
}
