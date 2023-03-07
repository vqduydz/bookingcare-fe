import { Box, Typography } from '@mui/material';

const Target = () => {
    return (
        <Box sx={{ textAlign: 'justify' }}>
            <div>
                <Typography sx={{ fontSize: '1.6rem', fontWeight: 'bold' }}>Mục tiêu cá nhân : </Typography>
                <ul
                    style={{
                        padding: '10px 0 0 30px',
                    }}
                >
                    <li>
                        Mục tiêu 1: Nắm vững kiến thức về HTML, CSS, JavaScript và 1 framework front-end cụ thể là
                        React. Nắm được cách quản lý dự án và sử dụng các công cụ như Git và GitHub. Hoàn tất mục tiêu
                        này bằng cách tạo một dự án có liên quan đến các kiến thức đã học.
                    </li>

                    <li>
                        Mục tiêu 2: Học và nắm vững một ngôn ngữ back-end cụ thể là Node.js và 1 công nghệ back-end cụ
                        thể là Express. Nắm được 1 vài công nghệ về cơ sở dữ liệu cụ thể là MySQL. Tìm hiểu về bảo mật
                        web. Hoàn tất mục tiêu này bằng cách kết hợp Reactjs, Nodejs và các công nghệ khác để tạo một dự
                        án bao gồm cả back-end và front-end.
                    </li>

                    <li>
                        Mục tiêu dài hạn: Trở thành một Full stack developer chuyên nghiệp và tạo ra các sản phẩm chất
                        lượng, đáp ứng yêu cầu của khách hàng và thị trường.
                    </li>
                </ul>
                <Typography sx={{ fontSize: '1.6rem', fontWeight: 'bold' }}>Mục tiêu nghề nghiệp : </Typography>

                <ul
                    style={{
                        padding: '10px 0 0 30px',
                    }}
                >
                    <li>
                        Trở thành một Full Stack Developer chuyên nghiệp với kinh nghiệm và kỹ năng phát triển các ứng
                        dụng web chất lượng cao.
                    </li>

                    <li>
                        Mong muốn tham gia vào một công ty đang phát triển các sản phẩm công nghệ tiên tiến để có cơ hội
                        thực hành và phát triển kỹ năng của mình.
                    </li>

                    <li>
                        Liên tục học tập và nghiên cứu để đóng góp cho sự phát triển của công ty và trở thành một phần
                        quan trọng của đội ngũ phát triển.
                    </li>
                </ul>
            </div>
        </Box>
    );
};

export default Target;
