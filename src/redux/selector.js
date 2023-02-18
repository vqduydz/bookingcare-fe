import jwtDecode from 'jwt-decode';

function globalStates(state) {
    console.log({ state });
    const token = state.auth.token || null;
    const currentUser = token ? jwtDecode(token) : null;
    const language = state.language.language || 'vi';
    const isAuthenticated = state.auth.isAuthenticated || false;
    return { currentUser, token, language, isAuthenticated };
}

export const selector = { globalStates };
