import ClearIcon from '@mui/icons-material/Clear';
import RotateRightIcon from '@mui/icons-material/RotateRight';
import SearchIcon from '@mui/icons-material/Search';
import { Box, IconButton, InputBase } from '@mui/material';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import useDebounce from '_/hook/useDebounce';

import styles from './Home.module.scss';

const cx = classNames.bind(styles);

function SearchBox() {
    const [placeholder, setPlaceholder] = useState('Tìm bác sĩ');
    const [i, setI] = useState(1);
    const [searchValue, setSearchValue] = useState('');
    const debounce = useDebounce(searchValue, 800);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const placeholder = [
            'Tìm bác sĩ',
            'Tìm lý do khám',
            'Tìm gói khám',
            'Tìm chuyên khoa',
            'Tìm bệnh viện',
            'Tìm phòng khám',
        ];

        const timer = setTimeout(() => {
            setI((pre) => (i >= placeholder.length - 1 ? 0 : pre + 1));
            setPlaceholder(placeholder[i]);
        }, 2000);
        return () => clearTimeout(timer);
    }, [i, placeholder]);

    useEffect(() => {
        if (!debounce.trim()) {
            return;
        }
        // setLoading(true);
    }, [debounce]);

    const handleChange = (e) => {
        const searchValue = e.target.value.replace(/ + /g, ' ');
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
        } else {
            setSearchValue('');
        }
        if (!searchValue.trim()) {
            setSearchValue('');
        }
    };
    const handleClear = () => {
        setSearchValue('');
    };

    return (
        <Box
            sx={(() => {
                return {
                    margin: { 0: '10px auto' },
                    width: { 560: '80%', 768: '60%', 992: '40%' },
                    minWidth: { 768: '300px' },
                    position: { 768: 'relative' },
                    zIndex: { 768: 2 },
                    minHeight: { 768: '15vh' },
                    marginBottom: '20px',
                };
            })()}
        >
            <Box
                sx={{
                    background: '#f7d800',
                    color: '#fff',
                    outline: 'none',
                    borderRadius: '25px',
                    border: '1px solid transparent',
                    lineHeight: '50px',
                    height: '50px',
                    paddingLeft: '50px',
                    paddingRight: '50px',
                    position: 'relative',
                }}
            >
                <Box
                    sx={{
                        width: '50px',
                        height: '50px',
                        lineHeight: '50px',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        color: '#333',
                        alignItems: 'center',
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >
                    <SearchIcon fontSize="large" />
                </Box>
                <InputBase
                    value={searchValue}
                    onChange={handleChange}
                    sx={{
                        background: 'transparent',
                        outline: 'none',
                        border: 'none',
                        width: '100% ',
                    }}
                    placeholder={placeholder}
                />

                <Box
                    sx={{
                        width: '50px',
                        height: '50px',
                        lineHeight: '50px',
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        color: '#333',
                        alignItems: 'center',
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >
                    {!!searchValue && !loading && (
                        <IconButton onClick={handleClear} type="button">
                            <ClearIcon sx={{ fontSize: '2rem' }} />
                        </IconButton>
                    )}
                    {!!searchValue && loading && (
                        <IconButton onClick={handleClear} type="button">
                            <RotateRightIcon className={cx('loading')} sx={{ fontSize: '2rem' }} />
                        </IconButton>
                    )}
                </Box>
            </Box>
        </Box>
    );
}

export default SearchBox;
