import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Box, Collapse, IconButton, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { useThemMui } from '_/context/ThemeMuiContext';
import { capitalize } from '_/features/capitalize';
import { deleteUser } from '_/redux/slices';

export default function Row(props) {
    const dispatch = useDispatch();
    const { setLoading } = useThemMui();
    const { user, STT, setEdit } = props;
    const { id, phonenumber, gender, address, firstName, lastName, position, email } = user;

    const [open, setOpen] = useState(false);
    const handleDelete = () => {
        setLoading(true);

        dispatch(deleteUser(id))
            .unwrap()
            .then((result) => setLoading(false));
    };

    const time = new Date(user?.createdAt);
    const createdAt =
        time.getDate() +
        '-' +
        (time.getMonth() + 1) +
        '-' +
        time.getFullYear() +
        ' ' +
        time.getHours() +
        ':' +
        time.getMinutes() +
        ':' +
        time.getSeconds();

    return (
        <>
            <TableRow
                onClick={() => {
                    setOpen(!open);
                }}
                sx={{
                    cursor: 'pointer',
                    backgroundColor: STT % 2 === 0 ? '#f9f9f9' : '#fff',
                    borderRadius: '3px',
                    background: 'linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(0,0,0,0.2) 100%)',
                    '& > *': { borderBottom: 'unset' },
                }}
            >
                <TableCell sx={{ maxWidth: '10px' }} align="center">
                    {STT}
                </TableCell>
                <TableCell component="th" scope="row">
                    {email}
                </TableCell>
                <TableCell align="right">{capitalize(`${firstName} ${lastName}`)}</TableCell>
                <TableCell align="right">{position}</TableCell>
                <TableCell align="right">{createdAt}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ paddingLeft: '5vh' }}>
                            <Table size="small" aria-label="purchases">
                                <TableHead
                                    onClick={() => {
                                        setOpen(!open);
                                    }}
                                >
                                    <TableRow>
                                        <TableCell>Phone number</TableCell>
                                        <TableCell>Gender</TableCell>
                                        <TableCell align="right">Address</TableCell>
                                        <TableCell align="right">Action</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell sx={{ paddingLeft: '1vh' }} component="th" scope="row">
                                            {phonenumber}
                                        </TableCell>
                                        <TableCell>{gender}</TableCell>
                                        <TableCell align="right">{address}</TableCell>
                                        <TableCell align="right">
                                            <Box
                                                justifyContent={'flex-end'}
                                                sx={{
                                                    display: 'flex',
                                                    '& .btn ': {
                                                        padding: '0 2px',
                                                        '+ .btn': {
                                                            marginLeft: '5px',
                                                        },
                                                    },
                                                    '& .text': {
                                                        display: { 0: 'none', 768: 'block' },
                                                        color: '#000',
                                                    },
                                                    '& .icon': {
                                                        fontSize: '16px !important',
                                                        display: { 0: 'block', 768: 'none' },
                                                    },
                                                    ' * ': {
                                                        borderRadius: '3px',
                                                    },
                                                }}
                                            >
                                                <IconButton
                                                    onClick={() => {
                                                        setEdit({ stt: true, value: user });
                                                    }}
                                                    className="btn"
                                                    aria-label="delete"
                                                >
                                                    <EditIcon className="icon" />
                                                    <Typography className="text">Edit</Typography>
                                                </IconButton>
                                                <IconButton
                                                    disabled={position === 'Root'}
                                                    onClick={handleDelete}
                                                    className="btn"
                                                    aria-label="delete"
                                                >
                                                    <DeleteIcon className="icon" />
                                                    <Typography className="text">Delete</Typography>
                                                </IconButton>
                                            </Box>
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </>
    );
}
