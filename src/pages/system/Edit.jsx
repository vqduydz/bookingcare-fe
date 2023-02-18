import { FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import Box from '@mui/material/Box';
import { unwrapResult } from '@reduxjs/toolkit';
import { useSnackbar } from 'notistack';
import { useDispatch } from 'react-redux';

import { MyButton } from '_/components';
import { MyTextField } from '_/components/CustomComponents/CustomMui';
import { useThemMui } from '_/context/ThemeMuiContext';
import { updateUser } from '_/redux/slices';
import { capitalize } from '_/utills';

export default function Edit({ edit, setEdit }) {
    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar();

    const { value } = edit;
    const { id, firstName, lastName, phoneNumber, address, gender, role } = value;
    const { setLoading } = useThemMui();
    const handleSubmit = (event) => {
        event.preventDefault();
        setLoading(true);
        const data = new FormData(event.currentTarget);
        const dataUpdate = {
            id,
            firstName: capitalize(data.get('firstName')),
            lastName: capitalize(data.get('lastName')),
            phoneNumber: data.get('phoneNumber'),
            gender: data.get('gender'),
            address: data.get('address'),
            role: role === 'Root' ? 'Root' : data.get('role'),
        };

        dispatch(updateUser(dataUpdate))
            .then(unwrapResult)
            .then((result) => {
                setLoading(false);
                console.log({ result });
                let message, variant;
                if (result.error) {
                    message = result.error;
                    variant = 'error';
                } else {
                    message = result.message;
                    variant = 'success';
                    setEdit({ stt: false, value: {} });
                }
                enqueueSnackbar(message, { variant });
            })
            .catch((e) => {
                console.log(e);
                setEdit({ stt: false, value: {} });
                enqueueSnackbar('unknow error', { variant: 'error' });
            });
    };
    return (
        <Box>
            <Box
                sx={{
                    borderRadius: { 768: '10px' },
                    padding: '55px 20px 37px',
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
                <form onSubmit={handleSubmit}>
                    <MyTextField
                        required
                        sx={{ marginBottom: '2vh' }}
                        size="small"
                        label="First name"
                        fullWidth
                        id="firstName"
                        name="firstName"
                        autoComplete="firstName"
                        type=""
                        autoFocus
                        defaultValue={firstName}
                    />
                    <MyTextField
                        required
                        defaultValue={lastName}
                        sx={{ marginBottom: '2vh' }}
                        size="small"
                        label="Last name"
                        fullWidth
                        id="lastName"
                        name="lastName"
                        autoComplete="lastName"
                        type=""
                    />
                    <MyTextField
                        defaultValue={phoneNumber}
                        sx={{ marginBottom: '2vh' }}
                        size="small"
                        label="Enter Phone Number"
                        fullWidth
                        name="phoneNumber"
                        type="number"
                        id="phoneNumber"
                        autoComplete="phoneNumber"
                    />
                    <MyTextField
                        defaultValue={address}
                        sx={{ marginBottom: '2vh' }}
                        size="small"
                        label="Enter address"
                        fullWidth
                        name="address"
                        type=""
                        id="address"
                        autoComplete="address"
                    />
                    <FormLabel id="gender">Gender</FormLabel>
                    <RadioGroup defaultValue={gender} row aria-labelledby="gender" name="gender">
                        <FormControlLabel value="Female" control={<Radio />} label="Female" />
                        <FormControlLabel value="Male" control={<Radio />} label="Male" />
                        <FormControlLabel value="Other" control={<Radio />} label="Other" />
                    </RadioGroup>
                    <FormLabel id="role">Role</FormLabel>
                    <RadioGroup defaultValue={role} row aria-labelledby="role" name="role">
                        <FormControlLabel disabled={role === 'Root'} value="Root" control={<Radio />} label="Root" />
                        <FormControlLabel disabled={role === 'Root'} value="Admin" control={<Radio />} label="Admin" />
                        <FormControlLabel
                            disabled={role === 'Root'}
                            value="Doctor"
                            control={<Radio />}
                            label="Doctor"
                        />
                    </RadioGroup>

                    <MyButton
                        effect
                        color={{ mainColor: 'orange' }}
                        style={{ width: '100%', marginTop: '10px' }}
                        type="submit"
                    >
                        Update
                    </MyButton>
                </form>
            </Box>
        </Box>
    );
}
