import classNames from 'classnames/bind';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '_/context/AuthContext';
import { routes } from '_/routes';

import Content from '../Content';
import styles from './ContentOnlyLayout.module.scss';

const cx = classNames.bind(styles);

function ContentOnlyLayout({ children }) {
    const { currentUser } = useAuth();
    const navigate = useNavigate();
    useEffect(() => {
        console.log(currentUser);
        if (currentUser && currentUser.role !== 'Customer') navigate(routes.manage);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentUser]);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <Content>{children}</Content>
            </div>
        </div>
    );
}

export default ContentOnlyLayout;
