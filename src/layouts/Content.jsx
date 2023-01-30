import { Box } from '@mui/material';
import classNames from 'classnames/bind';
// import { Loading } from '_/components';

import styles from './Content.module.scss';

const cx = classNames.bind(styles);

function Content({ children }) {
    return (
        <div className={cx('wrapper')}>
            {/* <Loading /> */}
            <Box className={cx('inner')}>{children}</Box>
        </div>
    );
}

export default Content;
