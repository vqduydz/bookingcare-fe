import { CssBaseline } from '@mui/material';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { StyledEngineProvider } from '@mui/material/styles';

import App from './App';
import GlobalStyles from './assets/GlobalStyles';
import ThemeMuiContextProvider from './context/ThemeMuiContext';
import reportWebVitals from './reportWebVitals';
import AuthContextProvider from './context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <StrictMode>
        <AuthContextProvider>
            <StyledEngineProvider>
                <ThemeMuiContextProvider>
                    <CssBaseline />
                    <GlobalStyles>
                        <App />
                    </GlobalStyles>
                </ThemeMuiContextProvider>
            </StyledEngineProvider>
        </AuthContextProvider>
    </StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
