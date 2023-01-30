import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { muiCustomStyles } from '_/components/CustomComponents/CustomMui';
import { rows } from '_/data/data';
import AddUser from './AddUser';
import Edit from './Edit';
import Header from './Header';

Row.propTypes = {
    row: PropTypes.shape({
        mail: PropTypes.string.isRequired,
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
        position: PropTypes.string.isRequired,
        phoneNum: PropTypes.string.isRequired,
        gender: PropTypes.string.isRequired,
        address: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
    }).isRequired,
};

function Row(props) {
    const { row, STT, setEdit } = props;
    const { phoneNum, gender, address } = row;
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
                    {row.mail}
                </TableCell>
                <TableCell align="right">{`${row.firstName} ${row.lastName}`}</TableCell>
                <TableCell align="right">{row.position}</TableCell>
                <TableCell align="right">{row.createDate}</TableCell>
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
                                            {phoneNum}
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
                                                        setEdit({ stt: true, value: row });
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
    useEffect(() => {
        if (!sideNav && !addUser && !edit.stt) {
            setOverLay(false);
            return;
        }
        setOverLay(true);
    }, [addUser, edit.stt, sideNav]);

    return (
        <Box sx={{ ...muiCustomStyles, ...styleBtn }}>
            <Header setAddUser={setAddUser} sideNav={sideNav} setSideNav={setSideNav} />
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
                            {rows.map((row, index) => {
                                return <Row setEdit={setEdit} key={index} row={row} STT={index + 1} />;
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
