import { FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import Box from '@mui/material/Box';
import { unwrapResult } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import { Button } from '_/components';
import { MyTextField } from '_/components/CustomComponents/CustomMui';
import { useThemMui } from '_/context/ThemeMuiContext';
import { updateUser } from '_/redux/slices';

export default function Edit({ edit, setEdit }) {
    const dispatch = useDispatch();
    const { value } = edit;
    const { id, firstName, lastName, phonenumber, address, gender, position } = value;
    const { setLoading } = useThemMui();
    const handleSubmit = (event) => {
        event.preventDefault();
        setLoading(true);
        const data = new FormData(event.currentTarget);
        const dataUpdate = {
            id,
            firstName: data.get('firstName'),
            lastName: data.get('lastName'),
            phonenumber: data.get('phonenumber'),
            gender: data.get('gender'),
            address: data.get('address'),
            position: position === 'Root' ? 'Root' : data.get('position'),
        };

        dispatch(updateUser(dataUpdate))
            .then(unwrapResult)
            .then((result) => {
                setEdit({ stt: false, value: {} });
                setLoading(false);
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
                        defaultValue={phonenumber}
                        sx={{ marginBottom: '2vh' }}
                        size="small"
                        label="Enter Phone Number"
                        fullWidth
                        name="phonenumber"
                        type="number"
                        id="phonenumber"
                        autoComplete="phonenumber"
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
                    <FormLabel id="position">Position</FormLabel>
                    <RadioGroup defaultValue={position} row aria-labelledby="position" name="position">
                        <FormControlLabel
                            disabled={position === 'Root'}
                            value="Root"
                            control={<Radio />}
                            label="Root"
                        />
                        <FormControlLabel
                            disabled={position === 'Root'}
                            value="Admin"
                            control={<Radio />}
                            label="Admin"
                        />
                        <FormControlLabel
                            disabled={position === 'Root'}
                            value="Doctor"
                            control={<Radio />}
                            label="Doctor"
                        />
                    </RadioGroup>

                    <Button primary className="btn" type="submit">
                        Update
                    </Button>
                </form>
            </Box>
        </Box>
    );
}
