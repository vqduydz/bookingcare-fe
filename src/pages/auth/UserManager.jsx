import {
    Box,
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
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Loading } from '_/components';
import { muiCustomStyles } from '_/components/CustomComponents/CustomMui';
import { useThemMui } from '_/context/ThemeMuiContext';
import { getUser } from '_/redux/slices';
import { selector } from '_/redux/selector';
import AddUser from './AddUser';
import Edit from './Edit';
import Header from './Header';
import Row from './Row';

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
    const { loading } = useThemMui();
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
        if ((() => JSON.stringify(currentUser) === '{}')() || !currentUser) {
            navigate('/login');
            return;
        }
        dispatch(getUser())
            .then(unwrapResult)
            .then((result) => {
                setAllUser(result.data?.data);
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [loading, currentUser]);

    return (
        <Box sx={{ ...muiCustomStyles, ...styleBtn }}>
            {loading && <Loading />}
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
                                    borderBottomColor: '#00000024',
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
