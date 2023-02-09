import { Box } from '@mui/material';
import React from 'react';
import { MyButton } from '_/components';

export const AManage = () => {
    return <div>AManage</div>;
};
export const BManage = () => {
    return <div>BManage</div>;
};
export const CManage = () => {
    return <div>CManage</div>;
};
export const DManage = () => {
    return <div>DManage</div>;
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
