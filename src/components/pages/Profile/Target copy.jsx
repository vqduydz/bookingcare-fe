import { Box, Typography } from '@mui/material';

const Target = () => {
    return (
        <Box sx={{ textAlign: 'justify' }}>
            <Box>
                <Typography sx={{ fontSize: '1.6rem', fontWeight: 'bold' }}>Mục tiêu bản thân : </Typography>
                <Box sx={{ padding: '0 10px' }}>
                    <ul>
                        <Typography sx={{ fontSize: '1.4rem', fontWeight: 'bold' }}>- Mục tiêu I :</Typography>
                        <Box
                            sx={{
                                padding: '0 20px',
                                '& p': {
                                    margin: 0,
                                    fontSize: '1.4rem',
                                },
                            }}
                        >
                            <p>+ Nắm được kiến thức về HTML, CSS, JavaScript.</p>
                            <p>+ Nắm được kiến thức về 1 framework front-end cụ thể là React. </p>
                            <p>+ Nắm được cách quản lý dự án và sử dụng các công cụ như Git và GitHub. </p>
                            <p style={{ fontStyle: 'italic', fontWeight: 'bold' }}>
                                ____Hoàn tất mục tiêu này với việc tạo 1 dự án với kiến thức liên quan.
                            </p>
                        </Box>
                    </ul>
                    <ul>
                        <Typography sx={{ fontSize: '1.4rem', fontWeight: 'bold' }}>- Mục tiêu II :</Typography>

                        <Box
                            sx={{
                                padding: '0 20px',
                                '& p': {
                                    margin: 0,
                                    fontSize: '1.4rem',
                                },
                            }}
                        >
                            <p>+ Học được 1 ngôn ngữ back-end cụ thể là Node.js.</p>
                            <p>+ Nắm được 1 công nghệ back-end cụ thể là Express.</p>
                            <p>+ Nắm được 1 vài công nghệ về cơ sở dữ liệu cụ thể là MySql.</p>
                            <p>+ Tìm hiểu về bảo mật web. </p>

                            <p style={{ fontStyle: 'italic', fontWeight: 'bold' }}>
                                ____Hoàn tất mục tiêu này với việc kết hợp Reactjs, Nodejs và các công nghệ khác tạo 1
                                dự án gồm back-end và front-end
                            </p>
                        </Box>
                    </ul>
                    <ul>
                        <Typography sx={{ fontSize: '1.4rem', fontWeight: 'bold' }}>- Mục tiêu dài hạn :</Typography>

                        <Box
                            sx={{
                                padding: '0 20px',
                                '& p': {
                                    margin: 0,
                                    fontSize: '1.4rem',
                                },
                            }}
                        >
                            <p>+ Trở thành một Full stack developer chuyên nghiệp.</p>
                            <p>+ Tạo ra các sản phẩm chất lượng, đáp ứng yêu cầu của khách hàng và thị trường.</p>
                        </Box>
                    </ul>
                </Box>
            </Box>
            <ul>
                <Typography sx={{ fontSize: '1.6rem', fontWeight: 'bold' }}>Mục tiêu nghề nghiệp :</Typography>
                <Box
                    sx={{
                        padding: '0 10px',
                        '& p': {
                            margin: 0,
                            fontSize: '1.4rem',
                        },
                    }}
                >
                    <p>
                        - Trở thành một Full Stack Developer chuyên nghiệp với kinh nghiệm và kỹ năng phát triển các ứng
                        dụng web chất lượng cao.
                    </p>
                    <p>
                        - Mong muốn tham gia vào một công ty đang phát triển các sản phẩm công nghệ tiên tiến để có cơ
                        hội thực hành và phát triển kỹ năng của mình.
                    </p>
                    <p>
                        - Liên tục học tập và nghiên cứu để đóng góp cho sự phát triển của công ty và trở thành một phần
                        quan trọng của đội ngũ phát triển.
                    </p>
                </Box>
            </ul>
        </Box>
    );
};

export default Target;
