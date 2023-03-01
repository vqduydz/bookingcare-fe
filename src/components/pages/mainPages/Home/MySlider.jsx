import { Box, Typography } from '@mui/material';
import classNames from 'classnames/bind';
import Slider from 'react-slick';
import { Button } from '_/components/common';
import { Inner } from '_/components/common/CustomComponents/CustomMui';

import styles from './Home.module.scss';

const cx = classNames.bind(styles);

function MySlider({
    children,
    containerStyles = {},
    innerStyles = {},
    items = {},
    SlickSettings = {},
    SlickStyles = {},
    headerSlider = {
        headerSliderStyles: {},
        title: '',
        titleStyles: {},
        extendTitle: [{ title: '', url: '' }],
    },
}) {
    const { headerSliderStyles, title, titleStyles, extendTitle } = headerSlider;

    return (
        <Box sx={containerStyles}>
            <Inner sx={innerStyles}>
                <Box
                    sx={{
                        paddingTop: '20px',
                        paddingBottom: '30px',
                        position: 'relative',
                    }}
                >
                    <Box
                        sx={{
                            marginBottom: '20px',
                        }}
                    >
                        {headerSlider && (
                            <>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        marginBottom: '20px',
                                        alignItems: 'center',
                                        ...headerSliderStyles,
                                    }}
                                >
                                    <Typography
                                        variant="h3"
                                        sx={{
                                            flex: 1,
                                            fontSize: { 0: '1.6rem', 768: '2.4rem' },
                                            fontWeight: 'bold',
                                            padding: '15px 0px 5px 0px',
                                            ...titleStyles,
                                        }}
                                    >
                                        {title}
                                    </Typography>
                                </Box>
                                <Box
                                    sx={{
                                        position:
                                            extendTitle.length > 1 ? { 0: 'relative', 768: 'absolute' } : 'absolute',
                                        right: 0,
                                        top: extendTitle.length > 1 ? { 768: '20px' } : '20px',
                                        margin: extendTitle.length > 1 ? '-10px 0 10px 0' : '0',
                                    }}
                                >
                                    {extendTitle[0].title &&
                                        extendTitle.map((extendTitle) => (
                                            <Button
                                                key={extendTitle.title}
                                                href={extendTitle.url}
                                                className={cx('xemthem-btn')}
                                            >
                                                {extendTitle.title}
                                            </Button>
                                        ))}
                                </Box>
                            </>
                        )}
                        <Box
                            sx={{
                                position: 'relative',
                                ...SlickStyles,
                            }}
                        >
                            <Slider
                                {...{
                                    slidesToShow: 4,
                                    autoplay: true,
                                    autoplaySpeed: 3000,
                                    speed: 1000,
                                    infinite: false,
                                    responsive: [
                                        {
                                            breakpoint: 1200,
                                            settings: {
                                                slidesToShow: 4,
                                            },
                                        },
                                        {
                                            breakpoint: 992,
                                            settings: {
                                                slidesToShow: 3,
                                            },
                                        },
                                        {
                                            breakpoint: 600,
                                            settings: {
                                                slidesToShow: 2,
                                            },
                                        },
                                        {
                                            breakpoint: 400,
                                            settings: {
                                                slidesToShow: 1,
                                            },
                                        },
                                    ],
                                    arrows: false,
                                    ...SlickSettings,
                                }}
                            >
                                {items.length &&
                                    items.map((item, index) => (
                                        <Box
                                            key={index}
                                            sx={{
                                                float: 'left',
                                                '*': { wordWrap: 'break-word' },
                                                position: 'relative',
                                                height: '100%',
                                                overflow: 'hidden',
                                            }}
                                        >
                                            {item}
                                        </Box>
                                    ))}
                                {children}
                            </Slider>
                        </Box>
                    </Box>
                </Box>
            </Inner>
        </Box>
    );
}

export default MySlider;
