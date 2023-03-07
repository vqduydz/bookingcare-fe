import { Box, Typography } from '@mui/material';
import classNames from 'classnames/bind';
import Slider from 'react-slick';

import icon from '_/assets/icon';
import images from '_/assets/images';
import { Button } from '_/components/common';
import { Inner } from '_/components/common/CustomComponents/CustomMui';
import { useAuth } from '_/context/AuthContext';
import { ADS, BSNBTQ, BSTXQV, CKPB, CN, CSYTNB, DCBSVCSYT, SL } from '_/data/data';
import Banner from './Banner';
import Content from './Content';
import Content1 from './Content1';
import Content2 from './Content2';
import FirstContent from './FirstContent';
import styles from './Home.module.scss';
import MySlider from './MySlider';

const cx = classNames.bind(styles);

function Home() {
    const SlickStyles = {
        '& .slick-slide > div': {
            margin: '0 5px',
        },
        '& .slick-list': {
            margin: '0 -5px',
        },
    };

    return (
        <Box>
            <Banner />
            <MySlider
                SlickStyles={SlickStyles}
                SlickSettings={{
                    arrows: false,
                    autoplay: true,
                    infinite: true,
                }}
                containerStyles={{ borderBottom: '3px solid #efeef5' }}
            >
                {SL.map((item) => {
                    return <FirstContent key={item.title} data={item} />;
                })}
            </MySlider>
            {/* Bác sĩ từ xa qua Video */}
            <MySlider
                headerSlider={{ title: 'Bác sĩ từ xa qua Video', extendTitle: [{ title: 'xem thêm', url: '#' }] }}
                SlickSettings={{
                    arrows: true,
                    autoplay: false,
                }}
                containerStyles={{ borderBottom: '3px solid #efeef5', backgroundColor: '#f5f5f5' }}
            >
                {BSTXQV.map((item) => {
                    return <Content key={item.title} data={item} />;
                })}
            </MySlider>
            {/* Chuyên khoa phổ biến */}
            <MySlider
                headerSlider={{ title: 'Chuyên khoa phổ biến', extendTitle: [{ title: 'xem thêm', url: '#' }] }}
                SlickSettings={{
                    arrows: true,
                    autoplay: false,
                }}
                containerStyles={{ borderBottom: '3px solid #efeef5' }}
            >
                {CKPB.map((item) => {
                    return <Content key={item.title} data={item} />;
                })}
            </MySlider>
            {/* Cơ sở y tế nổi bật */}
            <MySlider
                headerSlider={{ title: 'Cơ sở y tế nổi bật', extendTitle: [{ title: 'Tìm kiếm', url: '#' }] }}
                SlickSettings={{
                    arrows: true,
                    autoplay: false,
                }}
                containerStyles={{ borderBottom: '3px solid #efeef5', backgroundColor: '#f5f5f5' }}
            >
                {CSYTNB.map((item) => {
                    return <Content key={item.title} data={item} />;
                })}
            </MySlider>
            {/* Bác sĩ nổi bật tuần qua */}
            <MySlider
                headerSlider={{ title: 'Bác sĩ nổi bật tuần qua', extendTitle: [{ title: 'tìm kiếm', url: '#' }] }}
                SlickSettings={{
                    arrows: true,
                    autoplay: false,
                }}
                containerStyles={{ borderBottom: '3px solid #efeef5' }}
            >
                {BSNBTQ.map((item) => {
                    return <Content1 key={item.title} data={item} />;
                })}
            </MySlider>
            {/* Cẩm nang */}
            <MySlider
                headerSlider={{ title: 'Cẩm nang', extendTitle: [{ title: 'Tất cả bài viết', url: '#' }] }}
                SlickSettings={{
                    arrows: true,
                    slidesToScroll: 2,
                    autoplay: false,
                    slidesToShow: 2,
                    responsive: [
                        {
                            breakpoint: 480,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1,
                            },
                        },
                    ],
                }}
                containerStyles={{ borderBottom: '3px solid #efeef5', backgroundColor: '#f5f5f5' }}
            >
                {CN.map((item) => {
                    return <Content2 key={item.title} data={item} />;
                })}
            </MySlider>
            {/* Truyền thông nói về BookingCare */}
            <Box sx={{}} className={cx('border-bottom')}>
                <Inner>
                    <Box
                        sx={{
                            paddingTop: '20px',
                            paddingBottom: '30px',
                            position: 'relative',
                        }}
                    >
                        <Box sx={{ marginBottom: '20px' }}>
                            <Typography
                                variant="h3"
                                sx={{
                                    flex: 1,
                                    fontSize: { 0: '1.6rem', 768: '2.4rem' },
                                    fontWeight: 'bold',
                                    padding: '15px 0px 5px 0px',
                                }}
                            >
                                Truyền thông nói về BookingCare
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                position: 'relative',
                                display: 'block',
                                userSelect: 'none',
                                touchAction: 'pan-y',
                                height: 'auto',
                            }}
                        >
                            <Box
                                sx={{
                                    marginLeft: '-5px',
                                    marginRight: '-5px',
                                    display: 'flex',
                                    flexDirection: { 0: 'column', 992: 'row' },
                                }}
                            >
                                <Box
                                    sx={{
                                        flex: 1,
                                        position: 'relative',
                                        width: '100%',
                                        paddingBottom: { 0: '56.25%', 992: 'calc(56.25% / 2)' },
                                    }}
                                >
                                    <iframe
                                        src="https://www.youtube.com/embed/FyDQljKtWnI"
                                        title="YouTube video player"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen
                                    ></iframe>
                                </Box>
                                <Box
                                    sx={{
                                        flex: 1,
                                        display: { 0: 'none', 768: 'inline-flex' },
                                        overflow: 'auto',
                                        flexWrap: { 720: 'wrap' },
                                        padding: '10px',
                                        alignContent: 'baseline',
                                        justifyContent: 'center',
                                    }}
                                >
                                    {ADS.map((item, index) => {
                                        const { target, title, href, src, bgcolor } = item;
                                        return (
                                            <Button
                                                key={index}
                                                target={target}
                                                title={title}
                                                href={href}
                                                style={{
                                                    padding: 0,
                                                    height: '50px',
                                                    background: '#fff',
                                                    margin: '5px',
                                                }}
                                            >
                                                <img
                                                    style={{
                                                        border: '1px solid #000',
                                                        borderRadius: '6px',
                                                        height: '50px',
                                                        backgroundSize: '76px 25px',
                                                        backgroundColor: bgcolor,
                                                        padding: '10px',
                                                    }}
                                                    src={src}
                                                    alt=""
                                                />
                                            </Button>
                                        );
                                    })}
                                </Box>
                                <Box
                                    className={cx('ads-block')}
                                    sx={{
                                        display: { 768: 'none' },
                                        overflow: 'hide',
                                        padding: '10px',
                                        alignContent: 'baseline',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <Slider
                                        {...{
                                            slidesToShow: 4,
                                            autoplay: true,
                                            autoplaySpeed: 10,
                                            speed: 2000,
                                            arrows: false,
                                            variableWidth: true,
                                            responsive: [
                                                {
                                                    breakpoint: 660,
                                                    settings: {
                                                        slidesToShow: 3,
                                                    },
                                                },
                                                {
                                                    breakpoint: 580,
                                                    settings: {
                                                        slidesToShow: 2,
                                                    },
                                                },
                                                {
                                                    breakpoint: 380,
                                                    settings: {
                                                        margin: '0 auto',
                                                        slidesToShow: 1,
                                                    },
                                                },
                                            ],
                                        }}
                                    >
                                        {ADS.map((item, index) => {
                                            const { target, title, href, src, bgcolor } = item;
                                            return (
                                                <Button
                                                    key={index}
                                                    target={target}
                                                    title={title}
                                                    href={href}
                                                    className={cx('ads-btn')}
                                                >
                                                    <img
                                                        style={{
                                                            border: '1px solid #000',
                                                            borderRadius: '6px',
                                                            height: '50px',
                                                            backgroundSize: '76px 25px',
                                                            backgroundColor: bgcolor,
                                                            padding: '10px',
                                                        }}
                                                        src={src}
                                                        alt=""
                                                    />
                                                </Button>
                                            );
                                        })}
                                    </Slider>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Inner>
            </Box>
            {/* Tải ứng dụng BookingCare */}
            <Box sx={{ backgroundColor: '#f5f5f5' }} className={cx('border-bottom')}>
                <Inner sx={{ padding: '40px 15px', color: '#333' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Box sx={{ display: { 0: 'none', 768: 'block' }, minWidth: '215px', float: 'right' }}>
                            <Box
                                sx={{
                                    backgroundImage: `url(${images['./bookingcare-app.png']})`,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: '200px auto',
                                    paddingTop: '40px',
                                    paddingBottom: '40px',
                                    float: 'right',
                                    width: '100%',
                                    height: '100%',
                                    backgroundPosition: 'right 10px top',
                                }}
                            />
                        </Box>
                        <Box sx={{ padding: '20px 0 30px 10px' }}>
                            <h2>Tải ứng dụng BookingCare</h2>
                            <ul className={cx('app-feature')}>
                                <li>Đặt khám nhanh hơn</li>
                                <li>Nhận thông báo từ hệ thống</li>
                                <li>Nhận hướng dẫn đi khám chi tiết</li>
                            </ul>

                            <Box sx={{ display: 'flex', columnGap: '10px' }}>
                                <Button href={'https://bookingcare.vn/app/android'} className={cx('padding-0')}>
                                    <img src={icon.googlePlay} alt="" width={135} height={40} />
                                </Button>
                                <Button href={'https://bookingcare.vn/app/ios'} className={cx('padding-0')}>
                                    <img src={icon.appStore} alt="" width={120} height={40} />
                                </Button>
                            </Box>

                            <Button
                                style={{
                                    padding: '10px 0',
                                    color: `var(--nen-dieuhuong)`,
                                    fontStyle: 'italic',
                                    fontSize: '1.3rem',
                                }}
                                href={'https://bookingcare.vn/app'}
                            >
                                Hoặc mở liên kết: <strong>https://bookingcare.vn/app</strong>
                            </Button>
                        </Box>
                    </Box>
                </Inner>
            </Box>
            {/* Dành cho bác sĩ và cơ sở y tế */}
            <MySlider
                headerSlider={{
                    title: 'Dành cho bác sĩ và cơ sở y tế',
                    extendTitle: [
                        { title: 'bài viết', url: '#' },
                        { title: 'hợp tác', url: '#' },
                        { title: 'liên hệ', url: '#' },
                    ],
                }}
                SlickSettings={{
                    arrows: true,
                    slidesToScroll: 2,
                    autoplay: false,
                    slidesToShow: 2,
                    responsive: [
                        {
                            breakpoint: 480,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1,
                            },
                        },
                    ],
                }}
                containerStyles={{ borderBottom: '3px solid #efeef5' }}
            >
                {DCBSVCSYT.map((item) => {
                    return <Content2 key={item.title} data={item} />;
                })}
            </MySlider>
        </Box>
    );
}
export default Home;
