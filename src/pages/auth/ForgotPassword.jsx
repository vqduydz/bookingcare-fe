import { Box, Typography } from '@mui/material';
import { useSnackbar } from 'notistack';
import { MyButton } from '_/components';
import { MyTextField } from '_/components/CustomComponents/CustomMui';
import { useAuth } from '_/context/AuthContext';
import { forgotPasswordApi } from '_/services/api/dataApi';
import AuthWrapper from './AuthWrapper';

function ForgotPassword() {
    const { enqueueSnackbar } = useSnackbar();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const dataUser = {
            email: data.get('email'),
        };
        const res = await forgotPasswordApi(dataUser);
        console.log(res);
        enqueueSnackbar(res.message, { variant: 'success' });
    };

    const { text } = useAuth();
    const { login } = text;
    return (
        <AuthWrapper>
            <form onSubmit={handleSubmit}>
                <MyTextField
                    sx={{ margin: '15px 0' }}
                    size="small"
                    label={login.enter_email}
                    required
                    fullWidth
                    id="email"
                    name="email"
                    autoComplete="email"
                    type="email"
                    autoFocus
                />
                <MyButton fontSize={1.5} effect className="btn" type="submit" style={{ width: '100%' }}>
                    {login.forgot_password}
                </MyButton>
            </form>
            <Box sx={{ mt: '10px', '& *': { fontSize: '14px' } }}>
                <Box sx={{ display: 'inline-flex' }}>
                    <MyButton effect to={'/login'} text>
                        {login.login}
                    </MyButton>
                    <Typography sx={{ margin: '0 5px', display: 'flex', alignItems: 'center' }}>----</Typography>
                    <MyButton effect to={'/signup'} text>
                        {login.create_new_user}
                    </MyButton>
                </Box>
            </Box>
        </AuthWrapper>
    );
}

export default ForgotPassword;
