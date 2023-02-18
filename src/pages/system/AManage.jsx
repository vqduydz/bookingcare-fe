import { Box } from '@mui/material';
import React from 'react';
import { MyButton } from '_/components';
import { muiCustomStyles } from '_/components/CustomComponents/CustomMui';
import { styleBtn } from './styleBtn';

export const AManage = () => {
    return (
        <Box sx={{ ...muiCustomStyles, ...styleBtn }}>
            <Box sx={{ margin: '20px auto', textAlign: 'center', fontSize: '2rem', fontWeight: 'bold' }}>AManage</Box>
        </Box>
    );
};
export const BManage = () => {
    return (
        <Box sx={{ ...muiCustomStyles, ...styleBtn }}>
            <Box sx={{ margin: '20px auto', textAlign: 'center', fontSize: '2rem', fontWeight: 'bold' }}>B Manage</Box>
        </Box>
    );
};
export const CManage = () => {
    return (
        <Box sx={{ ...muiCustomStyles, ...styleBtn }}>
            <Box sx={{ margin: '20px auto', textAlign: 'center', fontSize: '2rem', fontWeight: 'bold' }}>C Manage</Box>
        </Box>
    );
};
export const DManage = () => {
    return (
        <Box sx={{ ...muiCustomStyles, ...styleBtn }}>
            <Box sx={{ margin: '20px auto', textAlign: 'center', fontSize: '2rem', fontWeight: 'bold' }}>D Manage</Box>
        </Box>
    );
};
export const EManage = () => {
    return (
        <Box>
            <MyButton effect text fontSize={1.3} style={{ margin: '20px auto' }}>
                User Manage
            </MyButton>
        </Box>
    );
};
