import { FormControlLabel, FormLabel, Radio, RadioGroup, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { useSnackbar } from 'notistack';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { MyButton } from '_/components/common';
import { MyTextField } from '_/components/common/CustomComponents/CustomMui';

import { useAuth } from '_/context/AuthContext';
import { useThemMui } from '_/context/ThemeMuiContext';
import { createNewUser, login } from '_/redux/slices';
import { routes } from '_/routes';
import { capitalize } from '_/utills';
import AuthWrapper from './AuthWrapper';

export default function Register() {
    const { enqueueSnackbar } = useSnackbar();
    const { setLoading } = useThemMui();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { text: message } = useAuth();
    const text = message.auth;
    const handleSubmit = async (event) => {
        setLoading(true);
        try {
            event.preventDefault();
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
                role: 'Customer',
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
                setLoading(false);
                enqueueSnackbar('Birth year is illegal!', { variant: 'error' });
                return;
            } else {
                const res = await dispatch(createNewUser(dataUser));
                if (res.payload.error) {
                    setLoading(false);
                    enqueueSnackbar(res.payload.error, { variant: 'error' });
                    return;
                }
                const userData = {
                    email: data.get('email'),
                    password: data.get('password'),
                };
                const resultAction = await dispatch(login(userData));
                const token = resultAction.payload;
                if (token.error) {
                    setLoading(false);
                    enqueueSnackbar(token.error, { variant: 'error' });
                    return;
                }
                navigate(routes.home);
                setLoading(false);
                enqueueSnackbar('Successfully registered and auto-login', { variant: 'success' });
            }
        } catch (error) {
            setLoading(false);
            enqueueSnackbar(error.message, { variant: 'error' });
        }
    };

    return (
        <AuthWrapper>
            <form onSubmit={handleSubmit}>
                <MyTextField
                    sx={{ marginTop: '15px' }}
                    size="small"
                    label={text.enterFirstName}
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
                    label={text.enterLastName}
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
                    label={text.enterEmail}
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
                    label={text.enterPassword}
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
                    label={text.confirmPassword}
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
                    label={text.enterPhoneNumber}
                    fullWidth
                    name="phoneNumber"
                    type="number"
                    id="phoneNumber"
                    autoComplete="phoneNumber"
                />
                <MyTextField
                    sx={{ marginTop: '15px' }}
                    size="small"
                    label={text.enterAddress}
                    fullWidth
                    name="address"
                    type=""
                    id="address"
                    autoComplete="address"
                />
                <FormLabel sx={{ margin: '10px 0 0 0' }} htmlFor="birthday" id="gender">
                    {text.birthday}
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
                    {text.gender}
                </FormLabel>
                <RadioGroup defaultValue="Female" row aria-labelledby="gender" name="gender">
                    <FormControlLabel value="Male" control={<Radio />} label={text.male} />
                    <FormControlLabel value="Female" control={<Radio />} label={text.female} />
                    <FormControlLabel value="Other" control={<Radio />} label={text.other} />
                </RadioGroup>

                <MyButton
                    fontSize={1.5}
                    effect
                    color={{ mainColor: 'green' }}
                    className="btn"
                    type="submit"
                    style={{ width: '100%' }}
                >
                    {text.register}
                </MyButton>
            </form>
            <Box sx={{ mt: '10px', '& *': { fontSize: '14px' } }}>
                <Box sx={{ display: 'inline-flex' }}>
                    <Typography sx={{ margin: '0 5px', display: 'flex', alignItems: 'center' }}>
                        {text.alreadyHaveAnAccount}
                    </Typography>
                    <MyButton effect to={'/login'} text>
                        {text.login}
                    </MyButton>
                </Box>
            </Box>
        </AuthWrapper>
    );
}
