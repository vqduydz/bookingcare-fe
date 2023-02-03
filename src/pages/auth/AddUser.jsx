import { FormControlLabel, FormLabel, Radio, RadioGroup, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { unwrapResult } from '@reduxjs/toolkit';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { Button } from '_/components';
import { MyTextField } from '_/components/CustomComponents/CustomMui';
import { useThemMui } from '_/context/ThemeMuiContext';
import { addNewUser } from '_/redux/slices';

export default function AddUser({ setAddUser }) {
    const dispatch = useDispatch();
    const { setLoading } = useThemMui();
    const [notif, setNotif] = useState();
    const handleSubmit = (event) => {
        setNotif();
        event.preventDefault();
        setLoading(true);
        const data = new FormData(event.currentTarget);
        const dataUser = {
            firstName: data.get('firstName'),
            lastName: data.get('lastName'),
            email: data.get('email'),
            password: data.get('password'),
            confirmpassword: data.get('confirmpassword'),
            phonenumber: data.get('phonenumber'),
            address: data.get('address'),
            gender: data.get('gender'),
            position: data.get('position'),
            createDate: new Date().getTime(),
        };

        if (dataUser.password !== dataUser.confirmpassword) {
            setNotif('Password & confirmpassword noy match');
            setLoading(false);
            return;
        } else
            dispatch(addNewUser(dataUser))
                .then(unwrapResult)
                .then((result) => {
                    setAddUser();
                    setLoading(false);
                });
    };

    return (
        <Box>
            <Box
                sx={{
                    borderRadius: { 768: '10px' },
                    padding: '20px 20px 37px',
                    maxWidth: { 768: '350px' },
                    width: '100%',
                    minWidth: '300px',
                    margin: '0 auto',
                    backgroundColor: '#fff',
                    position: 'fixed',
                    top: '10%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    boxShadow: '0 0 10px 5px #00000012',
                    '& .btn': {
                        marginBottom: '15px',
                        padding: '5px',
                        width: '100%',
                        boxShadow: '0 0 3px 1px #00000012',
                        '&:hover': {
                            backgroundColor: '#888888',
                        },
                        span: {
                            justifyContent: 'center',
                        },
                    },
                }}
            >
                <Typography sx={{ fontWeight: 'bold' }} variant="h4">
                    Add new user
                </Typography>
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
                    <Box sx={{ height: '1.3rem', marginTop: '1vh', display: 'flex', alignItems: 'end' }}>
                        {notif ? (
                            <Typography sx={{ color: 'red', height: '100%', fontSize: '1.2rem' }} variant="body2">
                                {notif}
                            </Typography>
                        ) : (
                            <Box sx={{ width: '100%', height: '1px', borderTop: '1px solid #f1f1f1' }} />
                        )}
                    </Box>
                    <MyTextField
                        sx={{ marginTop: '15px' }}
                        size="small"
                        label="Enter Phone Number"
                        fullWidth
                        name="phonenumber"
                        type="number"
                        id="phonenumber"
                        autoComplete="phonenumber"
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
                    <FormLabel id="gender">Gender</FormLabel>
                    <RadioGroup defaultValue="Female" row aria-labelledby="gender" name="gender">
                        <FormControlLabel value="Female" control={<Radio />} label="Female" />
                        <FormControlLabel value="Male" control={<Radio />} label="Male" />
                        <FormControlLabel value="Other" control={<Radio />} label="Other" />
                    </RadioGroup>
                    <FormLabel id="position">Position</FormLabel>
                    <RadioGroup defaultValue="Doctor" row aria-labelledby="position" name="position">
                        <FormControlLabel disabled value="Root" control={<Radio />} label="Root" />
                        <FormControlLabel value="Admin" control={<Radio />} label="Admin" />
                        <FormControlLabel value="Doctor" control={<Radio />} label="Doctor" />
                    </RadioGroup>
                    <Button primary className="btn" type="submit">
                        Add
                    </Button>
                </form>
            </Box>
        </Box>
    );
}
