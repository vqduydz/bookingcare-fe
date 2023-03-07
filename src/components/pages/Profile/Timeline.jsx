import { useEffect, useRef, useState } from 'react';
import './Timeline.scss';
import { itemsTimeline } from '_/data/data';
import { Box, Typography } from '@mui/material';
import { MyButton } from '_/components/common';
import { routes } from '_/routes';

const TimelineModel = ({ item, setModel }) => {
    const { data, scrollPosition } = item;

    return (
        <>
            <Box
                sx={{
                    zIndex: 2,
                    padding: '10px',
                    borderRadius: '6px',
                    width: { 0: '100%', 768: '80%', 992: '60%' },
                    minWidth: '320px',
                    margin: '0 auto',
                    position: 'fixed',
                    top: '50%',
                    left: '50%',
                    transform: 'translateX(-50%) translateY(-50%)',
                    boxShadow: '0 0 10px 5px #00000012',
                    maxWidth: '1174px',
                    maxHeight: { 768: '90%' },
                    height: { 0: '100%', 768: 'auto' },
                    background: 'linear-gradient(54deg, #8bfff4, #9164ff)',
                    overflowY: 'scroll',
                }}
            >
                <MyButton
                    onClick={() => {
                        setModel({ status: false, data: {} });

                        window.scrollTo({
                            top: scrollPosition,
                        });
                    }}
                    effect
                    color={{ mainColor: 'red', subColor: '#fff', bgColor: '#f5f5f5' }}
                    style={{ position: 'absolute', zIndex: 3, right: '15px', top: '15px' }}
                >
                    Close
                </MyButton>
                <Box
                    sx={{
                        backgroundImage: `url(${data.image})`,
                        paddingTop: '56.25%',
                        position: 'relative',
                        width: '100%',
                        backgroundPosition: 'center center',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        // backgroundColor: '#fff',
                        borderRadius: '6px',
                    }}
                />
                <Typography
                    sx={{
                        fontFamily: '"Montserrat",sans-serif',
                        fontSize: '1.4rem',
                        lineHeight: '1.5',
                        whiteSpace: 'pre-line',
                        fontWeight: '500',
                        color: 'white',
                        width: '100%',
                        padding: '10px 20px',
                        display: 'block',
                        textShadow: '1px 1px 40px #000',
                    }}
                    whiteSpace="pre-line"
                    fontWeight={500}
                    variant="vanban"
                >
                    {data.content}
                </Typography>
            </Box>
        </>
    );
};

function Timeline() {
    const itemsRef = useRef([]);
    const [model, setModel] = useState({ scrollPosition: null, status: false, data: {} });
    const { status, scrollPosition } = model;

    useEffect(() => {
        const items = itemsRef.current;
        function isElementInViewport(el) {
            var rect = el.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        }

        function handleScroll() {
            for (var i = 0; i < items.length; i++) {
                if (isElementInViewport(items[i])) {
                    if (!items[i].classList.contains('in-view')) {
                        items[i].classList.add('in-view');
                    }
                } else if (items[i]?.classList.contains('in-view')) {
                    items[i]?.classList.remove('in-view');
                }
            }
        }
        handleScroll();
        // window.addEventListener('load', handleScroll);
        window.addEventListener('scroll', handleScroll);

        return () => {
            // window.removeEventListener('load', handleScroll);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Box sx={{ overflowY: 'hidden' }} className="timeline">
            <MyButton
                fontSize={2.6}
                style={{ margin: '20px auto', display: 'block', width: '260px' }}
                to={routes.profile}
                text
                padding="0 0"
                effect
                color={{ mainColor: 'green' }}
                className="profile-nav-btn"
            >
                {`<<`} Quay lại profile
            </MyButton>
            <ul>
                {itemsTimeline.map((item, index) => (
                    <li key={index} ref={(el) => (itemsRef.current[index] = el)}>
                        <Box>
                            <Typography className="time" variant="phude">
                                {item.time}
                            </Typography>

                            <Box className="discovery">
                                <Typography variant="tieude">{item.title}</Typography>
                                <MyButton
                                    color={{ mainColor: 'blue' }}
                                    padding="0 0"
                                    fontSize={'1.2'}
                                    className="show-detail"
                                    effect
                                    text
                                    onClick={() => {
                                        const scrollPosition =
                                            document.documentElement.scrollTop || document.body.scrollTop;
                                        setModel({ scrollPosition, status: true, data: item });
                                    }}
                                >
                                    Show detail
                                </MyButton>
                            </Box>
                        </Box>
                    </li>
                ))}
            </ul>
            {status && (
                <>
                    <Box
                        onClick={() => {
                            setModel({ status: false, data: {} });

                            window.scrollTo({
                                top: scrollPosition,
                            });
                        }}
                        sx={{
                            zIndex: 1,
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: 'linear-gradient(54deg, #9164ff, #8bfff4)',
                        }}
                    />
                    <TimelineModel item={model} setModel={setModel} />
                </>
            )}
        </Box>
    );
}

export default Timeline;
