import classNames from 'classnames/bind';

import Content from '../Content';
import styles from './ContentOnlyLayout.module.scss';

const cx = classNames.bind(styles);

function ContentOnlyLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <Content>{children}</Content>
            </div>
        </div>
    );
}

export default ContentOnlyLayout;
