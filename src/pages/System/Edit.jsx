import { FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import Box from '@mui/material/Box';
import { Button } from '_/components';
import { MyTextField } from '_/components/CustomComponents/CustomMui';

export default function Edit({ edit, setEdit }) {
    const { value } = edit;
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            firstName: data.get('firstName'),
            lastName: data.get('lastName'),
            phonenumber: data.get('phonenumber'),
            gender: data.get('gender'),
            address: data.get('address'),
            position: data.get('position'),
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
                        defaultValue={value.firstName}
                    />
                    <MyTextField
                        defaultValue={value.lastName}
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
                        defaultValue={value.phonenumber}
                        sx={{ marginBottom: '2vh' }}
                        size="small"
                        label="Enter Phone Number"
                        required
                        fullWidth
                        name="phonenumber"
                        type="number"
                        id="phonenumber"
                        autoComplete="phonenumber"
                    />
                    <MyTextField
                        defaultValue={value.address}
                        sx={{ marginBottom: '2vh' }}
                        size="small"
                        label="Enter address"
                        required
                        fullWidth
                        name="address"
                        type=""
                        id="address"
                        autoComplete="address"
                    />
                    <FormLabel id="gender">Gender</FormLabel>
                    <RadioGroup defaultValue={value.gender} row aria-labelledby="gender" name="gender">
                        <FormControlLabel value="Female" control={<Radio />} label="Female" />
                        <FormControlLabel value="Male" control={<Radio />} label="Male" />
                        <FormControlLabel value="Other" control={<Radio />} label="Other" />
                    </RadioGroup>
                    <FormLabel id="position">Position</FormLabel>
                    <RadioGroup defaultValue={value.position} row aria-labelledby="position" name="position">
                        <FormControlLabel value="root" control={<Radio />} label="Root" />
                        <FormControlLabel value="admin" control={<Radio />} label="Admin" />
                        <FormControlLabel value="doctor" control={<Radio />} label="Doctor" />
                    </RadioGroup>

                    <Button primary className="btn" type="submit">
                        Update
                    </Button>
                </form>
            </Box>
        </Box>
    );
}
