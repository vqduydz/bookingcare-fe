import { createContext, useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { io } from 'socket.io-client';
import { selector } from '_/redux/selector';
import { changeLanguage, logout } from '_/redux/slices';
import { en, vi } from '_/utills/translations';

const AuthContext = createContext({
    socket: null,
    token: null,
    text: null,
    currentUser: null,
    language: '',
    handleChangeLanguage: () => {},
});

export const useAuth = () => useContext(AuthContext);

function AuthContextProvider({ children }) {
    const dispatch = useDispatch();
    const [text, setText] = useState(vi);
    const { currentUser, language, token } = useSelector(selector.globalStates);

    useEffect(() => {
        if (language === 'vi') setText(vi);
        else if (language === 'en') setText(en);
    }, [language]);

    const handleChangeLanguage = async (languageCode) => {
        dispatch(changeLanguage(languageCode));
    };

    const socket = io('http://localhost:8080', {
        transports: ['websocket'],
        // cors: {
        //     origin: '*',
        //     methods: ['GET', 'POST'],
        //     allowedHeaders: ['my-custom-header'],
        //     credentials: true,
        // },
    });

    // currentUser nhận được sau khi giải mã JWT lưu ở local storage
    if (currentUser) {
        const userEmail = currentUser.email;
        socket.emit('checkAvailableUser', userEmail);
    }

    socket.on('connection', () => {});
    socket.on('forceLogout', (userEmail) => {
        if (currentUser.email) {
            if (currentUser.email === userEmail) {
                console.log(userEmail === currentUser.email);
                dispatch(logout());
            }
        }
    });

    socket.on('logoutUser', (userId) => {
        if (currentUser.id) {
            if (currentUser.id === userId) {
                dispatch(logout());
                console.log(`User ${userId} đã bị đăng xuất`);
            }
        }
    });

    const value = {
        socket,
        token,
        text,
        currentUser,
        language,
        handleChangeLanguage,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;
