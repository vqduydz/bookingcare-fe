import { Box, styled, Typography } from '@mui/material';
import classNames from 'classnames/bind';

import icon from '_/assets/icon';
import images from '_/assets/images';
import { Button } from '_/components/common';
import { Inner } from '_/components/common/CustomComponents/CustomMui';
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

    const fontSize = { fontSize: { 0: '1.2rem', 960: '1.6rem' } };

    return (
        <Box
            className={cx('banner')}
            sx={{
                background: `#fff center/cover url(${images['./bookingcare-cover.png']}) no-repeat`,
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
                            N???n t???ng y t??? <br />
                            <b>ch??m s??c s???c kh???e to??n di???n</b>
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
                                            backgroundImage: `url(${images['./kham-chuyen-khoa.png']})`,
                                        }}
                                    />
                                    Kh??m
                                    <br />
                                    Chuy??n khoa
                                </Box>
                            </Button>{' '}
                        </MyButton>
                        <MyButton>
                            <Button className={cx('choose-btn')} to={'#'}>
                                <Box sx={fontSize}>
                                    <Box
                                        sx={{
                                            ...size,
                                            backgroundImage: `url(${images['./kham-tu-xa.png']})`,
                                        }}
                                    />
                                    Kh??m
                                    <br />
                                    t??? xa
                                </Box>
                            </Button>{' '}
                        </MyButton>
                        <MyButton>
                            <Button className={cx('choose-btn')} to={'#'}>
                                <Box sx={fontSize}>
                                    <Box
                                        sx={{
                                            ...size,
                                            backgroundImage: `url(${images['./kham-tong-quat.png']})`,
                                        }}
                                    />
                                    Kh??m
                                    <br />
                                    t???ng qu??t
                                </Box>
                            </Button>{' '}
                        </MyButton>
                        <MyButton>
                            <Button className={cx('choose-btn')} to={'#'}>
                                <Box sx={fontSize}>
                                    <Box
                                        sx={{
                                            ...size,
                                            backgroundImage: `url(${images['./dich-vu-xet-nghiem.png']})`,
                                        }}
                                    />
                                    X??t nghi???m
                                    <br />y h???c
                                </Box>
                            </Button>{' '}
                        </MyButton>
                        <MyButton>
                            <Button className={cx('choose-btn')} to={'#'}>
                                <Box sx={fontSize}>
                                    <Box
                                        sx={{
                                            ...size,
                                            backgroundImage: `url(${images['./suc-khoe-tinh-than.png']})`,
                                        }}
                                    />
                                    S???c kh???e
                                    <br />
                                    tinh th???n
                                </Box>
                            </Button>{' '}
                        </MyButton>
                        <MyButton>
                            <Button className={cx('choose-btn')} to={'#'}>
                                <Box sx={fontSize}>
                                    <Box
                                        sx={{
                                            ...size,
                                            backgroundImage: `url(${images['./kham-nha-khoa.png']})`,
                                        }}
                                    />
                                    Kh??m
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
                                            backgroundImage: `url(${images['./phau-thuat.png']})`,
                                        }}
                                    />
                                    G??i
                                    <br />
                                    Ph???u thu???t
                                </Box>
                            </Button>{' '}
                        </MyButton>
                        <MyButton>
                            <Button className={cx('choose-btn')} to={'#'}>
                                <Box sx={fontSize}>
                                    <Box
                                        sx={{
                                            ...size,
                                            backgroundImage: `url(${images['./kham-tai-nha.png']})`,
                                        }}
                                    />
                                    S???n ph???m
                                    <br />Y t???
                                </Box>
                            </Button>{' '}
                        </MyButton>
                        <MyButton>
                            <Button className={cx('choose-btn')} to={'#'}>
                                <Box sx={fontSize}>
                                    <Box
                                        sx={{
                                            ...size,
                                            backgroundImage: `url(${images['./suc-khoe-doanh-nghiep.png']})`,
                                        }}
                                    />
                                    S???c kh???e
                                    <br />
                                    Doanh nghi???p
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
