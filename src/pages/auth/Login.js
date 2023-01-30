import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Button } from '_/components';
import { MyTextField } from '_/components/CustomComponents/CustomMui';
import AuthWrapper from './AuthWrapper';

export default function SignIn() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
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
                <MyTextField
                    sx={{ marginBottom: '2vh' }}
                    size="small"
                    label="Enter Password"
                    required
                    fullWidth
                    name="password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                />
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
