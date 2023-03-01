import { Box, Typography } from '@mui/material';
import { Button } from '_/components/common';

function Content1({ data = { image: '', subTitle: '', title: '', url: '' } }) {
    const { image, title, url, subTitle } = data;
    return (
        <Button href={url} style={{ padding: 0, border: '1px solid #eee', width: '100%', height: '100%' }}>
            <Box
                sx={{
                    padding: '10px',
                    width: '100%',
                    height: {
                        0: '200px',
                        768: '235px',
                    },
                    textAlign: 'center',
                    '&:hover': {
                        h3: {
                            color: 'var( --mau-bc-16)',
                        },
                    },
                }}
            >
                <Box
                    sx={{
                        backgroundImage: `url(${image})`,
                        position: 'relative',
                        width: { 0: '80px', 768: '120px' },
                        height: { 0: '80px', 768: '120px' },
                        backgroundPosition: 'center center',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundColor: '#eee',
                        borderRadius: '50%',
                        margin: '0 auto',
                        mb: '15px',
                    }}
                />

                <Typography
                    sx={{
                        fontSize: '1.3rem',
                        padding: '5px 0px',
                        color: 'var(--mau-sam)',
                    }}
                    variant="h3"
                >
                    {title}
                </Typography>
                <Typography
                    sx={{
                        textAlign: 'center',
                        padding: '5px 0',
                        fontSize: '1.1rem',
                        wordBreak: 'break-word',
                        whiteSpace: 'normal',
                        color: '#555',
                    }}
                    variant="h4"
                >
                    {subTitle}
                </Typography>
            </Box>
        </Button>
    );
}

export default Content1;
