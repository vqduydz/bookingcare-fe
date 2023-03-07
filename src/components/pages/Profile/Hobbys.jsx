import { Box, Typography } from '@mui/material';

const Hobbys = () => {
    return (
        <Box sx={{ textAlign: 'justify' }}>
            <Box sx={{ flex: 1, justifyContent: 'space-around' }}>
                <Typography sx={{ fontSize: '1.6rem', fontWeight: 'bold' }}>Sở thích cá nhân :</Typography>
                <ul
                    style={{
                        padding: '10px 0 0 30px',
                    }}
                >
                    <li>Du lịch.</li>
                    <li>Xem phim, nghe nhạc, chơi game.</li>
                    <li>Chơi thể thao, tham gia các hoạt động giải trí .</li>
                    <li>Nấu ăn, ăn uống, thưởng thức ẩm thực.</li>
                </ul>
            </Box>
        </Box>
    );
};

export default Hobbys;
