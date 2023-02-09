import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Loading } from '_/components';
import { muiCustomStyles } from '_/components/CustomComponents/CustomMui';
import { useAuth } from '_/context/AuthContext';
import { useThemMui } from '_/context/ThemeMuiContext';
import { routes } from '_/routes';
import { NotFoundPage, UserManage } from '..';
import { AManage, BManage, CManage, DManage, EManage } from './AManage';
import AddUser from './CreateNewUser';
import Edit from './Edit';
import Header from './Header';
import { styleBtn } from './styleBtn';

export default function Manage() {
    const [edit, setEdit] = useState({ stt: false, value: {} });
    const [addUser, setAddUser] = useState(false);
    const [overLay, setOverLay] = useState(false);
    const [sideNav, setSideNav] = useState(false);
    const { loading } = useThemMui();
    const navigate = useNavigate();
    const { currentUser } = useAuth();

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
    }, [loading, currentUser, navigate]);

    return <Box sx={{ ...muiCustomStyles, ...styleBtn }}>Manage</Box>;
}
