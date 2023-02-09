import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { muiCustomStyles } from '_/components/CustomComponents/CustomMui';
import { useAuth } from '_/context/AuthContext';
import { useThemMui } from '_/context/ThemeMuiContext';
import Edit from '_/pages/system/Edit';
import CreateNewUser from '_/pages/system/CreateNewUser';
import Header from '_/pages/system/Header';
import { styleBtn } from '_/pages/system/styleBtn';
import Content from '../Content';

import classNames from 'classnames/bind';

import styles from './SystemLayout.module.scss';
import { NotFoundPage, UserManage } from '_/pages';
import { routes } from '_/routes';
import { AManage, BManage, CManage, DManage, EManage } from '_/pages/system/AManage';
import Manage from '_/pages/system/Manage';

const cx = classNames.bind(styles);

export default function SystemLayout({ children }) {
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
    return (
        <Box sx={{ ...styleBtn }}>
            <div className={cx('wrapper')}>
                {currentUser && (
                    <Header
                        setAddUser={setAddUser}
                        sideNav={sideNav}
                        setSideNav={setSideNav}
                        currentUser={currentUser}
                    />
                )}

                <div className={cx('content')}>
                    {' '}
                    <Routes>
                        <Route path={'/'} element={<Manage />} />
                        <Route path={routes.usermanage} element={<UserManage />} />
                        <Route path={routes.amanage} element={<AManage />} />
                        <Route path={routes.bmanage} element={<BManage />} />
                        <Route path={routes.cmanage} element={<CManage />} />
                        <Route path={routes.dmanage} element={<DManage />} />
                        <Route path={routes.emanage} element={<EManage />} />
                        <Route path={routes.emanage} element={<EManage />} />
                        <Route path="*" element={<NotFoundPage />} />
                        NotFoundPage
                    </Routes>
                </div>
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
                {addUser && <CreateNewUser setAddUser={setAddUser} edit={edit} />}
            </div>
        </Box>
    );
}