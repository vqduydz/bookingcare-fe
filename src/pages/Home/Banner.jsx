import { Box, styled, Typography } from '@mui/material';
import classNames from 'classnames/bind';
import { Button } from '_/components';
import { Inner } from '_/components/CustomComponents/CustomMui';

import icon from '_/assets/icon';
import images from '_/assets/image';
import styles from './Home.module.scss';
import SearchBox from './SearchBox';

const cx = classNames.bind(styles);
function Banner(props) {
    const MyButton = ({ sx, children }) => {
        const baseStyle = {
            margin: 0,
            padding: '5px',
            textAlign: 'center',
        };
        const Inner = styled('div')(({ theme }) => ({
            [theme.breakpoints.down('834')]: {
                width: '130px',
            },
            [theme.breakpoints.down('999')]: {
                width: '157px',
            },
            [theme.breakpoints.down('1199')]: {
                width: '190px',
            },
            [theme.breakpoints.down('1439')]: {
                width: '230px',
            },

            [theme.breakpoints.up('960')]: {
                minWidth: '150px',
            },
            [theme.breakpoints.down('768')]: {
                width: '30%',
            },
        }));

        return <Inner sx={{ ...baseStyle, ...sx }}>{children}</Inner>;
    };

    const size = {
        background: '#fff',
        borderRadius: '50%',
        boxShadow: '0px 1px 2px rgb(0 0 0 / 50%)',
        width: '50px',
        height: '50px',
        margin: '2px auto',
        backgroundSize: '32px',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    };

    const fontSize = { fontSize: { 0: '12px', 960: '16px' } };

    return (
        <Box
            className={cx('banner')}
            sx={{
                background: `#fff center/cover url(${images.cover}) no-repeat`,
            }}
        >
            <Box>
                <Box
                    sx={{
                        minHeight: {
                            768: '60vh',
                        },
                        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.25),rgba(255, 255, 255, 0.1))',
                        padding: '45px 0',
                        color: '#333',
                        textAlign: 'center',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Inner>
                        <Typography
                            variant="h2"
                            sx={{
                                color: '#fff',
                                fontSize: { 0: '18px', 400: '20px', 768: '32px' },
                                marginBottom: '20px',
                                textTransform: 'uppercase',
                                textShadow: '1px 1px 1px #333',
                                lineHeight: 1.5,
                            }}
                        >
                            Nền tảng y tế <br />
                            <b>chăm sóc sức khỏe toàn diện</b>
                        </Typography>
                        <SearchBox />
                        <Box
                            sx={{
                                paddingTop: '25px',
                                marginTop: '15px',
                                display: 'flex',
                                justifyContent: 'center',
                            }}
                        >
                            <Button to={'#'} className={cx('padding-0')}>
                                <img src={icon.googlePlay} alt="" width={108} height={32} />
                            </Button>
                            <Button to={'#'} className={cx('padding-0')}>
                                <img src={icon.appStore} alt="" width={108} height={32} />
                            </Button>
                        </Box>
                    </Inner>
                </Box>
                <Box
                    sx={{
                        backgroundImage:
                            'linear-gradient(rgba(255, 255, 255, 0.1),rgba(255, 255, 255, 0.9),rgba(255, 255, 255, 1))',
                        paddingTop: '30px',
                        paddingBottom: '20px',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            margin: 0,
                            padding: 0,
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexWrap: 'wrap',
                        }}
                    >
                        <MyButton>
                            <Button className={cx('choose-btn')} to={'#'}>
                                <Box sx={fontSize}>
                                    <Box
                                        sx={{
                                            ...size,
                                            backgroundImage: `url(${images.khamChuyenKhoa})`,
                                        }}
                                    />
                                    Khám
                                    <br />
                                    Chuyên khoa
                                </Box>
                            </Button>{' '}
                        </MyButton>
                        <MyButton>
                            <Button className={cx('choose-btn')} to={'#'}>
                                <Box sx={fontSize}>
                                    <Box
                                        sx={{
                                            ...size,
                                            backgroundImage: `url(${images.khamTuXa})`,
                                        }}
                                    />
                                    Khám
                                    <br />
                                    từ xa
                                </Box>
                            </Button>{' '}
                        </MyButton>
                        <MyButton>
                            <Button className={cx('choose-btn')} to={'#'}>
                                <Box sx={fontSize}>
                                    <Box
                                        sx={{
                                            ...size,
                                            backgroundImage: `url(${images.khamTongQuat})`,
                                        }}
                                    />
                                    Khám
                                    <br />
                                    tổng quát
                                </Box>
                            </Button>{' '}
                        </MyButton>
                        <MyButton>
                            <Button className={cx('choose-btn')} to={'#'}>
                                <Box sx={fontSize}>
                                    <Box
                                        sx={{
                                            ...size,
                                            backgroundImage: `url(${images.dichVuXetNghiem})`,
                                        }}
                                    />
                                    Xét nghiệm
                                    <br />y học
                                </Box>
                            </Button>{' '}
                        </MyButton>
                        <MyButton>
                            <Button className={cx('choose-btn')} to={'#'}>
                                <Box sx={fontSize}>
                                    <Box
                                        sx={{
                                            ...size,
                                            backgroundImage: `url(${images.sucKhoeTinhThan})`,
                                        }}
                                    />
                                    Sức khỏe
                                    <br />
                                    tinh thần
                                </Box>
                            </Button>{' '}
                        </MyButton>
                        <MyButton>
                            <Button className={cx('choose-btn')} to={'#'}>
                                <Box sx={fontSize}>
                                    <Box
                                        sx={{
                                            ...size,
                                            backgroundImage: `url(${images.khamNhaKhoa})`,
                                        }}
                                    />
                                    Khám
                                    <br />
                                    nha khoa
                                </Box>
                            </Button>{' '}
                        </MyButton>
                        <MyButton>
                            <Button className={cx('choose-btn')} to={'#'}>
                                <Box sx={fontSize}>
                                    <Box
                                        sx={{
                                            ...size,
                                            backgroundImage: `url(${images.phauThuat})`,
                                        }}
                                    />
                                    Gói
                                    <br />
                                    Phẫu thuật
                                </Box>
                            </Button>{' '}
                        </MyButton>
                        <MyButton>
                            <Button className={cx('choose-btn')} to={'#'}>
                                <Box sx={fontSize}>
                                    <Box
                                        sx={{
                                            ...size,
                                            backgroundImage: `url(${images.khamTaiNha})`,
                                        }}
                                    />
                                    Sản phẩm
                                    <br />Y tế
                                </Box>
                            </Button>{' '}
                        </MyButton>
                        <MyButton>
                            <Button className={cx('choose-btn')} to={'#'}>
                                <Box sx={fontSize}>
                                    <Box
                                        sx={{
                                            ...size,
                                            backgroundImage: `url(${images.lichSu})`,
                                        }}
                                    />
                                    Sức khỏe
                                    <br />
                                    Doanh nghiệp
                                </Box>
                            </Button>
                        </MyButton>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default Banner;
