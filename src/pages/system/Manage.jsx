import { Box } from '@mui/material';
import { muiCustomStyles } from '_/components/CustomComponents/CustomMui';
import { styleBtn } from './styleBtn';

export default function Manage() {
    return (
        <Box sx={{ ...muiCustomStyles, ...styleBtn }}>
            <Box sx={{ margin: '20px auto', textAlign: 'center', fontSize: '2rem', fontWeight: 'bold' }}>Manage</Box>
        </Box>
    );
}
