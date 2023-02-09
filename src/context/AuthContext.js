import { createContext, useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selector } from '_/redux/selector';
import { changeLanguage } from '_/redux/slices';

import IntlProviderWrapper from '_/utills/translations/IntlProviderWrapper';
import { en, vi } from '_/utills/translations/translations';

const AuthContext = createContext({
    text: null,
    currentUser: null,
    isLogeed: null,
    language: '',
    handleChangeLanguage: () => {},
});

export const useAuth = () => useContext(AuthContext);

function AuthContextProvider({ children }) {
    const dispatch = useDispatch();
    const [text, setText] = useState(vi);
    const { currentUser, isLogeed, language } = useSelector(selector.currentUser);
    useEffect(() => {
        if (language === 'vi') setText(vi);
        else if (language === 'en') setText(en);
    }, [language]);
    const handleChangeLanguage = async (languageCode) => {
        dispatch(changeLanguage(languageCode));
    };

    const value = { text, currentUser, isLogeed, language, handleChangeLanguage };
    console.log({ text });
    return (
        <AuthContext.Provider value={value}>
            <IntlProviderWrapper>{children}</IntlProviderWrapper>
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;
