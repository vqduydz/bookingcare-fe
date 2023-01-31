import { CssBaseline } from '@mui/material';
import { StyledEngineProvider } from '@mui/material/styles';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './App';
import GlobalStyles from './assets/GlobalStyles';
import ThemeMuiContextProvider from './context/ThemeMuiContext';
import { store } from './redux/store';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <StrictMode>
        <StyledEngineProvider>
            <ThemeMuiContextProvider>
                <CssBaseline />
                <GlobalStyles>
                    <Provider store={store}>
                        <App />
                    </Provider>
                </GlobalStyles>
            </ThemeMuiContextProvider>
        </StyledEngineProvider>
    </StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
