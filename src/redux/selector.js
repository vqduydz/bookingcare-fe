import jwtDecode from 'jwt-decode';

function globalStates(state) {
    const token = state.auth.token || null;
    const currentUser = token ? jwtDecode(token) : null;
    const language = state.language.language || 'vi';
    return { currentUser, token, language };
}

export const selector = { globalStates };
