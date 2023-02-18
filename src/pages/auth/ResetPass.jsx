import { Box, Typography } from '@mui/material';
import { useSnackbar } from 'notistack';
import { useNavigate, useParams } from 'react-router-dom';
import { MyButton } from '_/components';
import { MyTextField } from '_/components/CustomComponents/CustomMui';
import { routes } from '_/routes';
import { resetPasswordApi } from '_/services/api/dataApi';
import AuthWrapper from './AuthWrapper';

function ResetPass() {
    const { enqueueSnackbar } = useSnackbar();
    const navigate = useNavigate();
    const { token } = useParams();
    const handleRS = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const password = {
            password: data.get('resetPassword'),
        };
        const res = await resetPasswordApi(token, password);
        await enqueueSnackbar(res.message, { variant: 'success' });
        navigate(`/${routes.login}`);
    };
    return (
        <AuthWrapper>
            <form onSubmit={handleRS}>
                <MyTextField
                    sx={{ margin: '15px 0' }}
                    size="small"
                    label="enter new password"
                    required
                    fullWidth
                    id="resetPassword"
                    name="resetPassword"
                    autoComplete="resetPassword"
                    type="password"
                    autoFocus
                />
                <MyButton fontSize={1.5} effect className="btn" type="submit" style={{ width: '100%' }}>
                    Reset Password
                </MyButton>
            </form>
            <Box sx={{ mt: '10px', '& *': { fontSize: '14px' } }}>
                <Box sx={{ display: 'inline-flex' }}>
                    <MyButton effect to={'/login'} text>
                        login
                    </MyButton>
                    <Typography sx={{ margin: '0 5px', display: 'flex', alignItems: 'center' }}>----</Typography>
                    <MyButton effect to={'/signup'} text>
                        create_new_user
                    </MyButton>
                </Box>
            </Box>
        </AuthWrapper>
    );
}

export default ResetPass;
