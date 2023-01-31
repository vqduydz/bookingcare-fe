import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {
    Box,
    Collapse,
    IconButton,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from '@mui/material';
import { unwrapResult } from '@reduxjs/toolkit';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { muiCustomStyles } from '_/components/CustomComponents/CustomMui';
import { selector } from '_/redux/selector';
import { getUser } from '_/redux/slices';
import AddUser from './AddUser';
import Edit from './Edit';
import Header from './Header';
import { useSelector } from 'react-redux';

function Row(props) {
    const { user, STT, setEdit } = props;
    const { phonenumber, gender, address, firstName, lastName, position, createdAt, email } = user;
    const [open, setOpen] = useState(false);

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
                <TableCell align="right">{`${firstName} ${lastName}`}</TableCell>
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
                                                <IconButton className="btn" aria-label="delete">
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

const styleBtn = {
    '& .btn': {
        marginBottom: '0 ',
        width: 'unset ',
        boxShadow: 'unset ',
        borderRadius: '3px',
        backgroundColor: '#eee',
        '&:focus': { outline: 'none ', outlineOffset: 'unset ' },
        '&:hover': {
            background: '#000 !important',
            borderRadius: '3px !important',
            '& *': { color: '#fff !important' },
        },
    },
};

export default function UserManager() {
    const [edit, setEdit] = useState({ stt: false, value: {} });
    const [addUser, setAddUser] = useState(false);
    const [overLay, setOverLay] = useState(false);
    const [sideNav, setSideNav] = useState(false);
    const [allUser, setAllUser] = useState([]);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const currentUser = useSelector(selector.currentUser);

    useEffect(() => {
        if (!sideNav && !addUser && !edit.stt) {
            setOverLay(false);
            return;
        }
        setOverLay(true);
    }, [addUser, edit.stt, sideNav]);

    useEffect(() => {
        if (!currentUser) {
            navigate('/login');
            return;
        }
        dispatch(getUser())
            .then(unwrapResult)
            .then((result) => {
                setAllUser(result.data);
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [overLay]);

    return (
        <Box sx={{ ...muiCustomStyles, ...styleBtn }}>
            {currentUser && (
                <Header setAddUser={setAddUser} sideNav={sideNav} setSideNav={setSideNav} currentUser={currentUser} />
            )}

            <Box sx={{ minWidth: '768px', position: 'relative', mt: '40px' }}>
                <TableContainer sx={{ padding: '10px' }} component={Paper}>
                    <Typography variant="h4">Current user list</Typography>
                    <hr style={{ marginTop: '5px', marginBottom: '5px', border: 0, borderTop: '1px solid #000' }} />
                    <Table
                        sx={{
                            width: '100%',
                            '& span.Mui-checked , span.MuiCheckbox-indeterminate': {
                                color: '#333 !important ',
                            },
                            '& *': {
                                fontSize: '12px !important',
                                '& .MuiTableCell-root': {
                                    padding: '5px',
                                },
                            },
                        }}
                        aria-label="collapsible table"
                    >
                        <TableHead sx={{ '& *': { fontWeight: '700 !important' } }}>
                            <TableRow>
                                <TableCell align="center" sx={{ maxWidth: '15px' }}>
                                    STT
                                </TableCell>
                                <TableCell>Email address</TableCell>
                                <TableCell align="right">Name</TableCell>
                                <TableCell align="right">Position</TableCell>
                                <TableCell align="right">Create date</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {allUser.map((user, index) => {
                                return <Row setEdit={setEdit} key={user.id} user={user} STT={index + 1} />;
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
            {overLay && (
                <Box
                    sx={{
                        // display: { 0: 'block', 768: 'none' },
                        position: 'fixed',
                        top: 0,
                        bottom: 0,
                        right: 0,
                        left: 0,
                        opacity: 0.6,
                        transition: 'bottom 0.3s linear 0s',
                        backgroundColor: '#212121',
                    }}
                    onClick={() => {
                        setEdit(false);
                        setAddUser(false);
                        setSideNav(false);
                    }}
                />
            )}
            {edit.stt && <Edit setEdit={setEdit} edit={edit} />}
            {addUser && <AddUser setAddUser={setAddUser} edit={edit} />}
        </Box>
    );
}
