import { Box, Typography } from '@mui/material';

const Skills = () => {
    return (
        <Box sx={{ textAlign: 'justify' }}>
            <Box sx={{ display: 'flex' }}>
                <Box sx={{ flex: 1, justifyContent: 'space-around' }}>
                    <Typography sx={{ fontSize: '1.6rem', fontWeight: 'bold' }}>Kỹ năng chuyên môn :</Typography>
                    <ul
                        style={{
                            padding: '10px 0 0 30px',
                        }}
                    >
                        <li>HTML.</li>
                        <li>CSS/SASS/SCSS(SCSS module).</li>
                        <li>JavaScrip-ES6.</li>
                        <li>Reactjs.</li>
                        <li>Material UI.</li>
                        <li>Redux Toolkit.</li>
                        <li>Redux Persist .</li>
                        <li>Nodejs.</li>
                        <li>Express.</li>
                        <li>MVC & Sequelize.</li>
                        <li>Socket.io.</li>
                        <li>Jsonwebtoken.</li>
                        <li>MySQL.</li>
                        <li>Axios.</li>
                        <li>Firebase.</li>
                        <li>Photoshop basic.</li>
                    </ul>
                </Box>
                <Box sx={{ flex: 1 }}>
                    <Typography sx={{ fontSize: '1.6rem', fontWeight: 'bold' }}>Kỹ năng mềm :</Typography>

                    <ul
                        style={{
                            padding: '10px 0 0 30px',
                        }}
                    >
                        <li>Làm việc nhóm.</li>
                        <li>Làm việc độc lập.</li>
                        <li>Giải quyết vấn đề.</li>
                        <li>Tinh thần trách nhiệm.</li>
                        <li>Quản lý thời gian.</li>
                        <li>Chủ động học hỏi.</li>
                        <li>Tinh thần hợp tác.</li>
                    </ul>
                </Box>
            </Box>
        </Box>
    );
};

export default Skills;
