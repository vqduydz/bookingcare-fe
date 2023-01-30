import Box from '@mui/material/Box';
import { useState } from 'react';
import { Button } from '_/components';
import { MyTextField } from '_/components/CustomComponents/CustomMui';
import AuthWrapper from './AuthWrapper';

export default function SignIn() {
    const [value, setValue] = useState({ firstName: '', lastName: '', email: '', password: '' });
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        setValue({
            firstName: data.get('firstName'),
            lastName: data.get('lastName'),
            email: data.get('email'),
            password: data.get('password'),
            confirmPassword: data.get('confirmPassword'),
        });
    };
    return (
        <AuthWrapper>
            <form onSubmit={handleSubmit}>
                <MyTextField
                    sx={{ marginBottom: '2vh' }}
                    size="small"
                    label="First name"
                    required
                    fullWidth
                    id="firstName"
                    name="firstName"
                    autoComplete="firstName"
                    type=""
                    autoFocus
                />
                <MyTextField
                    sx={{ marginBottom: '2vh' }}
                    size="small"
                    label="Last name"
                    required
                    fullWidth
                    id="lastName"
                    name="lastName"
                    autoComplete="lastName"
                    type=""
                />
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
                <MyTextField
                    sx={{ marginBottom: '2vh' }}
                    size="small"
                    label="Confirm Password"
                    required
                    fullWidth
                    name="confirmPassword"
                    type="password"
                    id="confirmPassword"
                    autoComplete="current-password"
                />

                <Button primary className="btn" type="submit">
                    Sign up
                </Button>
            </form>
            <Box sx={{ '& *': { fontSize: '14px' } }}>
                <Box sx={{ display: 'inline-flex' }}>
                    Have an account ?
                    <Button to={'/login'} text>
                        Log in
                    </Button>
                </Box>
            </Box>
        </AuthWrapper>
    );
}
