import { FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import Box from '@mui/material/Box';
import axios from 'axios';
import { Button } from '_/components';
import { MyTextField } from '_/components/CustomComponents/CustomMui';

export default function AddUser({ setAddUser }) {
    const handleSubmit = (event) => {
        event.preventDefault();
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
        axios
            .post('http://localhost:8080/api/user', dataUser)
            .then((res) => setAddUser(false))
            .catch((e) => console.log(e));
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
                        label="Enter Password"
                        required
                        fullWidth
                        name="confirmpassword"
                        type="password"
                        id="confirmpassword"
                        autoComplete="current-password"
                    />
                    <MyTextField
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
                    <FormLabel
                        id="
                    "
                    >
                        Gender
                    </FormLabel>
                    <RadioGroup defaultValue="Female" row aria-labelledby="gender" name="gender">
                        <FormControlLabel value="Female" control={<Radio />} label="Female" />
                        <FormControlLabel value="Male" control={<Radio />} label="Male" />
                        <FormControlLabel value="Other" control={<Radio />} label="Other" />
                    </RadioGroup>
                    <FormLabel
                        id="
                    "
                    >
                        Position
                    </FormLabel>
                    <RadioGroup defaultValue="doctor" row aria-labelledby="position" name="position">
                        <FormControlLabel disabled value="root" control={<Radio />} label="Root" />
                        <FormControlLabel value="admin" control={<Radio />} label="Admin" />
                        <FormControlLabel value="doctor" control={<Radio />} label="Doctor" />
                    </RadioGroup>
                    <Button primary className="btn" type="submit">
                        Add
                    </Button>
                </form>
            </Box>
        </Box>
    );
}
