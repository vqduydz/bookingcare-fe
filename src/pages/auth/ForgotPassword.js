import { Box } from '@mui/material';
import { Button } from '_/components';
import { MyTextField } from '_/components/CustomComponents/CustomMui';
import AuthWrapper from './AuthWrapper';

function ForgotPassword() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
        });
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
                <Button className="btn" primary type="submit">
                    Forgot password?
                </Button>
            </form>
            <Box sx={{ '& *': { fontSize: '14px' } }}>
                <Box sx={{ display: 'inline-flex' }}>
                    <Button text to={'/login'}>
                        Log in
                    </Button>
                    ---
                    <Button text to={'/signup'}>
                        Sign up new user
                    </Button>
                </Box>
            </Box>
        </AuthWrapper>
    );
}

export default ForgotPassword;
