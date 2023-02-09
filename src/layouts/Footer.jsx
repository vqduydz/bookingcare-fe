import DoneIcon from '@mui/icons-material/Done';
import PlaceIcon from '@mui/icons-material/Place';
import { Box } from '@mui/material';
import classNames from 'classnames/bind';
import icon from '_/assets/icon';
import { Inner } from '_/components/CustomComponents/CustomMui';
import styles from './Footer.module.scss';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import { MyButton } from '_/components';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <Box sx={{ backgroundColor: '#f5f5f5' }} className={cx('wrapper')}>
            <Inner
                sx={{
                    display: 'flex',
                    padding: '30px 15px 0',
                    flexDirection: { 0: 'column', 768: 'row' },
                    borderBottom: 'solid 1px #ccc',
                }}
            >
                <Box sx={{ flex: 2, padding: '0 5px', borderBottom: { 0: 'solid 1px #ccc', 768: 'none' } }}>
                    <MyButton style={{ padding: '0' }} href="/">
                        <img
                            width="200"
                            height="44"
                            src={icon.logo}
                            data-src="/assets/icon/bookingcare-2020.svg"
                            alt="BookingCare/"
                        />
                    </MyButton>
                    <Box
                        sx={{
                            mt: '10px',
                            '& p,h2': {
                                fontSize: '14px',
                                margin: '5px 0',
                            },
                        }}
                    >
                        <h2>Công ty Cổ phần Công nghệ BookingCare</h2>
                        <p>
                            <PlaceIcon sx={{ fontSize: '1.5rem !important', marginRight: '5px' }} />
                            28 Thành Thái, Dịch Vọng, Cầu Giấy, Hà Nội
                        </p>
                        <p>
                            <DoneIcon sx={{ fontSize: '1.5rem !important', marginRight: '5px' }} />
                            ĐKKD số: 0106790291. Sở KHĐT Hà Nội cấp ngày 16/03/2015
                        </p>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                        }}
                    >
                        <MyButton
                            style={{ padding: '0 6px', height: '40px', marginTop: '10px', maxWidth: '49%' }}
                            target="_blank"
                            href="http://online.gov.vn/Home/WebDetails/68563"
                        >
                            <img
                                src={icon.boCongThuong}
                                width="78"
                                height="30"
                                data-src="/assets/icon/bo-cong-thuong.svg"
                                alt="Đã thông báo với bộ công thương"
                            />
                        </MyButton>
                        <MyButton
                            style={{ padding: '0 6px', height: '40px', marginTop: '10px', maxWidth: '49%' }}
                            target="_blank"
                            href="http://online.gov.vn/Home/AppDetails/1101"
                        >
                            <img
                                src={icon.boCongThuong}
                                width="78"
                                height="30"
                                data-src="/assets/icon/bo-cong-thuong.svg"
                                alt="Đã thông báo với bộ công thương"
                            />
                        </MyButton>
                    </Box>
                </Box>
                <Box
                    sx={{
                        flex: 1,
                        padding: '0 5px',
                        marginBottom: '15px',
                        borderBottom: { 0: 'solid 1px #ccc', 768: 'none' },
                    }}
                >
                    <MyButton className={cx('btn')} href="/hop-tac-voi-bookingcare">
                        Liên hệ hợp tác
                    </MyButton>
                    <MyButton className={cx('btn')} href="/goi-chuyen-doi-so">
                        Gói chuyển đổi số doanh nghiệp
                    </MyButton>
                    <MyButton className={cx('btn')} href="/tuyen-dung">
                        Tuyển dụng
                    </MyButton>
                    <MyButton className={cx('btn')} href="/benh-nhan-thuong-hoi">
                        Câu hỏi thường gặp
                    </MyButton>
                    <MyButton className={cx('btn')} href="/page/dieu-khoan-su-dung-p7">
                        Điều khoản sử dụng
                    </MyButton>
                    <MyButton className={cx('btn')} href="/page/chinh-sach-bao-mat-p8">
                        Chính sách Bảo mật
                    </MyButton>
                    <MyButton className={cx('btn')} href="/thong-tin/quy-trinh-ho-tro-giai-quyet-khieu-nai-p13">
                        Quy trình hỗ trợ giải quyết khiếu nại
                    </MyButton>
                    <MyButton className={cx('btn')} href="/site/quyche">
                        Quy chế hoạt động
                    </MyButton>
                </Box>
                <Box sx={{ flex: 1, padding: '0 5px' }}>
                    <div>
                        <div>
                            <strong>Trụ sở tại Hà Nội</strong>
                            <br /> 28 Thành Thái, Dịch Vọng, Cầu Giấy, Hà Nội
                        </div>
                        <br />
                        <div>
                            <strong>Văn phòng tại TP Hồ Chí Minh</strong>
                            <br /> Số 01, Hồ Bá Kiện, Phường 15, Quận 10
                        </div>
                        <br />
                        <div>
                            <strong>Hỗ trợ khách hàng</strong>
                            <br /> support@bookingcare.vn (7h - 18h)
                        </div>
                    </div>
                </Box>
            </Inner>
            <Inner sx={{ fontSize: '1.4rem', '& * ': { fontSize: '1.4rem' }, padding: '15px' }}>
                <SmartphoneIcon /> Tải ứng dụng BookingCare cho điện thoại hoặc máy tính bảng :
                <MyButton className={cx('app-btn')} target="_blank" href="https://bookingcare.vn/app/android">
                    Android
                </MyButton>
                -
                <MyButton className={cx('app-btn')} target="_blank" href="https://bookingcare.vn/app/ios">
                    iPhone/iPad
                </MyButton>
                -
                <MyButton className={cx('app-btn')} target="_blank" href="https://bookingcare.vn/app">
                    Khác
                </MyButton>
            </Inner>
            <Box
                sx={{
                    background: '#64b9e5',
                    color: '#fff',
                    padding: '10px',
                }}
            >
                <Inner sx={{ display: 'flex', flexDirection: { 0: 'column', 768: 'row' } }}>
                    <Box sx={{ flex: 1 }}>
                        <small>© 2023 BookingCare.</small>
                    </Box>
                    <Box sx={{ display: 'flex', flex: 2, justifyContent: { 0: 'start', 768: 'flex-end' } }}>
                        <MyButton
                            style={{ margin: '10px 10px 10px 0' }}
                            className={cx('app-btn')}
                            target="_blank"
                            href="https://facebook.com/bookingcare"
                        >
                            <img width="32" height="32" src={icon.facebook} alt="Facebook/" />
                        </MyButton>
                        <MyButton
                            style={{ margin: '10px 10px 10px 0' }}
                            className={cx('app-btn')}
                            target="_blank"
                            href="https://www.youtube.com/channel/UC9l2RhMEPCIgDyGCH8ijtPQ"
                        >
                            <img width="32" height="32" src={icon.youtube} alt="Youtube/" />
                        </MyButton>
                    </Box>
                </Inner>
            </Box>
        </Box>
    );
}

export default Footer;
