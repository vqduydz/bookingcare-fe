import { Box, Typography } from '@mui/material';
import { Button } from '_/components/common';

function Content2({ data = { image: '', subTitle: '', title: '', url: '' } }) {
    const { image, title, url } = data;
    return (
        <Button href={url} style={{ padding: 0 }}>
            <Box
                sx={{
                    width: '100%',
                    display: { 0: 'block', 992: 'flex' },
                    '&:hover': {
                        h3: {
                            color: 'var( --mau-bc-16)',
                        },
                    },
                }}
            >
                <Box sx={{ flex: 1 }}>
                    <img
                        style={{
                            borderRadius: '6px',
                        }}
                        width={'100%'}
                        src={image}
                        alt=""
                    />
                </Box>

                <Typography
                    sx={{
                        marginLeft: { 0: '0', 992: '10px' },
                        flex: 1,
                        fontSize: { 0: '1.3rem', 768: '1.6rem' },
                        fontWeight: { 768: 'bold' },
                        padding: '15px 0px 5px 0px',
                        color: 'var(--mau-sam)',
                    }}
                    variant="h3"
                >
                    {title}
                </Typography>
            </Box>
        </Button>
    );
}

export default Content2;
