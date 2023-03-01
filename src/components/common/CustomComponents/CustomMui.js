import { AppBar, styled, TextField, Tooltip, useScrollTrigger, useTheme } from '@mui/material';
import { cloneElement } from 'react';

export const muiCustomStyles = {
    '&  a': {
        textTransform: 'capitalize',
    },
    '& a:focus,a:hover': {
        // textDecoration: 'underline',
        outline: 'none',
        outlineOffset: 'none',
    },
    '& label.Mui-focused': {
        color: 'currentcolor',
    },
    '& .MuiOutlinedInput-root': {
        '& input': { color: 'currentcolor' },
        '&.Mui-focused fieldset': {
            border: '1px solid currentcolor',
        },
    },
    '& input': {
        fontSize: '1.4rem',
    },
    '& span.Mui-checked': {
        color: 'currentcolor !important',
    },
};

export const MyTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: '#000',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: 'green',
    },
    '& .MuiOutlinedInput-root': {
        color: '#000',
        '& fieldset': {
            borderColor: '#aeaeae',
        },
        '&:hover fieldset': {
            borderColor: '#c7c7c7',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#000',
        },
    },
    ...muiCustomStyles,
});

export const MyTooltip = styled(Tooltip)({
    '& label.Mui-focused': {
        color: '#fff',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: 'green',
    },
    '& .MuiOutlinedInput-root': {
        color: '#fff',
        '& fieldset': {
            borderColor: '#aeaeae',
        },
        '&:hover fieldset': {
            borderColor: '#c7c7c7',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#fff',
        },
    },
});

export const MyAppBar = ({ children, sx }) => {
    const ScrollHandler = ({ window, children }) => {
        const theme = useTheme();

        const trigger = useScrollTrigger({
            disableHysteresis: true,
            threshold: 50,
            target: window ? window() : undefined,
        });

        let bgcl;
        if (theme.palette.mode === 'dark') bgcl = 'black';
        else bgcl = '#f1f1f1';

        return cloneElement(children, {
            // set style
            style: {
                backgroundColor: trigger ? bgcl : theme.palette.background.default,
                transition: '0.5s',
                boxShadow: trigger ? '' : 'none',
                backgroundImage: 'none',
                display: 'block',
            },
        });
    };

    const ScrollToChangeStyle = (props) => {
        return <ScrollHandler {...props}>{props.children}</ScrollHandler>;
    };

    return (
        <ScrollToChangeStyle>
            <AppBar sx={{ ...sx }} position="static">
                {children}
            </AppBar>
        </ScrollToChangeStyle>
    );
};

export const Inner = ({ sx = {}, children, className }) => {
    const baseStyle = { paddingRight: '15px', paddingLeft: '15px', marginRight: 'auto', marginLeft: 'auto' };
    const Inner = styled('div')(({ theme }) => ({
        [theme.breakpoints.up('0')]: {
            width: '100%',
        },
        [theme.breakpoints.up('768')]: {
            width: '750px',
        },
        [theme.breakpoints.up('992')]: {
            width: '970px',
        },
        [theme.breakpoints.up('1200')]: {
            width: '1170px',
        },
    }));
    const classes = [className];
    return (
        <Inner className={classes} sx={{ ...baseStyle, ...sx }}>
            {children}
        </Inner>
    );
};

// Tooltip - click
// const [open, setOpen] = useState(false);

// const handleTooltipClose = () => {
//     setOpen(false);
// };

// const handleTooltipOpen = () => {
//     setOpen(true);
// };

// <ClickAwayListener onClickAway={handleTooltipClose}>
// <Tooltip
//     className={cx('tooltip')}
//     title={<UserPopper />}
//     arrow
//     TransitionComponent={Zoom}
//     PopperProps={{
//         disablePortal: true,
//     }}
//     onClose={handleTooltipClose}
//     open={open}
//     disableFocusListener
//     disableHoverListener
//     disableTouchListener
// >
//     <div onClick={handleTooltipOpen} className={cx('user-box')}>
//         <UserAvatar />
//     </div>
// </Tooltip>
// </ClickAwayListener>
