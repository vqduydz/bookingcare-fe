function currentUser(state) {
    return { currentUser: state.auth.currentUser, isLogeed: state.auth.isLogged, language: state.language.language };
}

export const selector = { currentUser };
