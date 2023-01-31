import Box from '@mui/material/Box';
import icon from '_/assets/icon';
import { Button } from '_/components';
import { muiCustomStyles } from '_/components/CustomComponents/CustomMui';

export default function AuthWrapper({ children }) {
    return (
        <Box
            sx={{
                backgroundImage: "url('https://colorlib.com/etc/lf/Login_v3/images/bg-01.jpg')",
                width: '100%',
                minHeight: '100vh',
                display: 'flex',
                justifyContent: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                position: 'relative',
                zIndex: '1',
                '&::before': {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    zIndex: '-1',
                    width: '100%',
                    height: '100%',
                    top: '0',
                    left: '0',
                    backgroundColor: 'rgba(255,255,255,.9)',
                },
            }}
        >
            <Box
                sx={{
                    borderRadius: { 768: '10px' },
                    padding: '55px 20px 37px',
                    maxWidth: { 768: '350px' },
                    width: '100%',
                    minWidth: '300px',
                    margin: '0 auto',
                    backgroundColor: '#fff',
                    position: { 768: 'fixed' },
                    top: '10%',
                    left: '50%',
                    transform: { 768: 'translateX(-50%)' },
                    boxShadow: '0 0 10px 5px #00000012',
                }}
            >
                <Button
                    href="/"
                    style={{
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        height: '40px',
                        // width: '180px',
                        backgroundImage: `url(${icon.logo})`,
                        backgroundPosition: 'center center',
                        backgroundRepeat: 'no-repeat',
                        marginBottom: '5vh',
                    }}
                />
                <Box sx={{ ...muiCustomStyles }}>{children}</Box>
            </Box>
        </Box>
    );
}
