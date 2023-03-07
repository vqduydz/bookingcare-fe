import { Box, Typography } from '@mui/material';
import { Button } from '_/components/common';

function Content({ data = { image: '', subTitle: '', title: '', url: '' } }) {
    const { image, title, url } = data;
    return (
        <Box
            sx={{
                width: '100%',
                textAlign: 'left',
                '& span': {
                    display: 'flex',
                    flexDirection: 'column',
                },
                '&:hover': {
                    h3: {
                        color: 'var( --mau-bc-16)',

                        boxShadow: '0 0 10px 5px #00000012',
                    },
                },
            }}
        >
            <Button href={url} style={{ padding: 0, width: '100%' }}>
                <Box
                    sx={{
                        backgroundImage: `url(${image})`,
                        paddingTop: '56.25%',
                        position: 'relative',
                        width: '100%',
                        backgroundPosition: 'center center',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundColor: '#eee',
                        borderRadius: '6px',
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
            </Button>
        </Box>
    );
}

export default Content;
