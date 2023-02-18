import { FormControlLabel, FormLabel, Radio, RadioGroup, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { unwrapResult } from '@reduxjs/toolkit';
import axios from 'axios';
import { useSnackbar } from 'notistack';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { MyButton } from '_/components';
import { MyTextField } from '_/components/CustomComponents/CustomMui';
import { useAuth } from '_/context/AuthContext';
import { useThemMui } from '_/context/ThemeMuiContext';
import { createNewUser, login } from '_/redux/slices';
import { routes } from '_/routes';
import { capitalize } from '_/utills';
import AuthWrapper from './AuthWrapper';

export default function SignIn() {
    const { enqueueSnackbar } = useSnackbar();
    const { setLoading } = useThemMui();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        const data = new FormData(event.currentTarget);
        const dataUser = {
            firstName: capitalize(data.get('firstName')),
            lastName: capitalize(data.get('lastName')),
            email: data.get('email'),
            password: data.get('password'),
            confirmpassword: data.get('confirmpassword'),
            address: data.get('address'),
            gender: data.get('gender'),
            birthday: data.get('birthday'),
            phoneNumber: data.get('phoneNumber'),
            image: data.get('image'),
            role: 'root',
        };

        if (dataUser.password !== dataUser.confirmpassword) {
            enqueueSnackbar('Password & confirmpassword not match!', {
                variant: 'error',
            });
            setLoading(false);
            return;
        } else if (
            new Date(dataUser.birthday).getFullYear() > new Date().getFullYear() ||
            new Date(dataUser.birthday).getFullYear() < 1920
        ) {
            enqueueSnackbar('Birth year is illegal!', { variant: 'error' });
            return;
        } else {
            const res = await dispatch(createNewUser(dataUser));
            res.payload.error
                ? enqueueSnackbar(res.payload.error, { variant: 'error' })
                : enqueueSnackbar('ok', { variant: 'success' });
        }

        // dispatch(login({ email: dataUser.email, password: dataUser.confirmpassword }))
        //     .then(unwrapResult)
        //     .then((res) =>
        //         res.error ? enqueueSnackbar(res.error.message, { variant: 'error' }) : navigate(routes.home),
        //     );
    };

    return (
        <AuthWrapper>
            <form onSubmit={handleSubmit}>
                <MyTextField
                    sx={{ marginTop: '15px' }}
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
                    sx={{ marginTop: '15px' }}
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
                    sx={{ marginTop: '15px' }}
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
                    sx={{ marginTop: '15px' }}
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
                    sx={{ marginTop: '15px' }}
                    size="small"
                    label="Confirm Password"
                    required
                    fullWidth
                    name="confirmpassword"
                    type="password"
                    id="confirmpassword"
                    autoComplete="current-password"
                />
                <MyTextField
                    sx={{ marginTop: '15px' }}
                    size="small"
                    label="Enter Phone Number"
                    fullWidth
                    name="phoneNumber"
                    type="number"
                    id="phoneNumber"
                    autoComplete="phoneNumber"
                />
                <MyTextField
                    sx={{ marginTop: '15px' }}
                    size="small"
                    label="Enter address"
                    fullWidth
                    name="address"
                    type=""
                    id="address"
                    autoComplete="address"
                />
                <FormLabel sx={{ margin: '10px 0 0 0' }} htmlFor="birthday" id="gender">
                    Birthday
                </FormLabel>
                <MyTextField
                    required
                    size="small"
                    fullWidth
                    name="birthday"
                    type="date"
                    id="birthday"
                    autoComplete="birthday"
                />
                <FormLabel sx={{ margin: '10px 0 0 0' }} id="gender">
                    Gender
                </FormLabel>
                <RadioGroup defaultValue="Female" row aria-labelledby="gender" name="gender">
                    <FormControlLabel value="Female" control={<Radio />} label="Female" />
                    <FormControlLabel value="Male" control={<Radio />} label="Male" />
                    <FormControlLabel value="Other" control={<Radio />} label="Other" />
                </RadioGroup>

                <MyButton fontSize={1.5} effect className="btn" type="submit" style={{ width: '100%' }}>
                    Add
                </MyButton>
            </form>
            <Box sx={{ mt: '10px', '& *': { fontSize: '14px' } }}>
                <Box sx={{ display: 'inline-flex' }}>
                    <Typography sx={{ margin: '0 5px', display: 'flex', alignItems: 'center' }}>
                        Have an account ?
                    </Typography>
                    <MyButton effect to={'/login'} text>
                        Log in
                    </MyButton>
                </Box>
            </Box>
        </AuthWrapper>
    );
}
