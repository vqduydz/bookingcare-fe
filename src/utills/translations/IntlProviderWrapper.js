import { IntlProvider } from 'react-intl';
import LanguageUtils from './LanguageUtils';
import { useAuth } from '_/context/AuthContext';

const messages = LanguageUtils.getFlattenedMessages();

function IntlProviderWrapper({ children }) {
    const { language } = useAuth();
    return (
        <IntlProvider locale={language} messages={messages[language]} defaultLocale="vi">
            {children}
        </IntlProvider>
    );
}

export default IntlProviderWrapper;
