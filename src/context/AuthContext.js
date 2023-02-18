import { createContext, useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selector } from '_/redux/selector';
import { changeLanguage } from '_/redux/slices';
import { en, vi } from '_/utills/translations/translations';

const AuthContext = createContext({
    text: null,
    currentUser: null,
    isAuthenticated: null,
    language: '',
    handleChangeLanguage: () => {},
});

export const useAuth = () => useContext(AuthContext);

function AuthContextProvider({ children }) {
    const dispatch = useDispatch();
    const [text, setText] = useState(vi);

    const { currentUser, isAuthenticated, language } = useSelector(selector.globalStates);
    useEffect(() => {
        if (language === 'vi') setText(vi);
        else if (language === 'en') setText(en);
    }, [language]);
    const handleChangeLanguage = async (languageCode) => {
        dispatch(changeLanguage(languageCode));
    };

    const value = {
        text,
        currentUser,
        isAuthenticated,
        language,
        handleChangeLanguage,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;
