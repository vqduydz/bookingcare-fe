import SettingsIcon from '@mui/icons-material/Settings';
import TouchAppIcon from '@mui/icons-material/TouchApp';
import { Box } from '@mui/material';
import classNames from 'classnames/bind';
import { MyButton } from '_/components';

import styles from './NotFoundPage.module.scss';

const cx = classNames.bind(styles);

function NotFoundPage() {
    return (
        <>
            <div className={cx('container')}>
                <h1 className={cx('first-four')}>4</h1>
                <SettingsIcon sx={{ fontSize: '40vmin' }} className={cx('cog1')} />
                <SettingsIcon sx={{ fontSize: '40vmin' }} className={cx('cog2')} />
                <h1 className={cx('second-four')}>4</h1>
                <p className={cx('wrong-para')}>Uh Oh! Page not found!</p>
                <Box className={cx('MyButton')}>
                    <MyButton outline to={'/'}>
                        Go to home <TouchAppIcon />
                    </MyButton>
                    <MyButton outline to={'/login'}>
                        Go to login <TouchAppIcon />
                    </MyButton>
                </Box>
            </div>
            <div className={cx('bottom')}></div>
        </>
    );
}

export default NotFoundPage;
