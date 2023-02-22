import { Box, Typography } from '@mui/material';
import { Button } from '_/components/common';

function Content({ data = { image: '', subTitle: '', title: '', url: '' } }) {
    const { image, title, url } = data;
    return (
        <Button href={url} style={{ padding: 0 }}>
            <Box
                sx={{
                    width: '100%',
                    textAlign: 'left',
                    '&:hover': { h3: { color: 'var( --mau-bc-16)' } },
                }}
            >
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
                        fontSize: '13px',
                        padding: '5px 0px',
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

export default Content;
