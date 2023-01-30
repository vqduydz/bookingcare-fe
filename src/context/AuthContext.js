// import {
//     confirmPasswordReset,
//     createUserWithEmailAndPassword,
//     GoogleAuthProvider,
//     onAuthStateChanged,
//     sendPasswordResetEmail,
//     signInWithEmailAndPassword,
//     signInWithPopup,
//     signOut,
//     FacebookAuthProvider,
//     deleteUser,
// } from 'firebase/auth';
import { createContext, useContext, useEffect, useState } from 'react';
// import { auth } from '../utils/Auth/firebase/firebaseConfig';

const AuthContext = createContext({
    id: null,
    currentUser: null,
    // login: () => Promise,
    // logout: () => Promise,
    // register: () => Promise,
    // resetPassword: () => Promise,
    // forgotPassword: () => Promise,
    // signInWithGoogle: () => Promise,
    // signInWithFaceBook: () => Promise,
    // deleteCurrentUser: () => Promise,
});

export const useAuth = () => useContext(AuthContext);

function AuthContextProvider({ children }) {
    // const [currentUser, setCurrentUser] = useState(null);
    const currentUser = {
        avatar: null,
        avatarUrl: 'https://www.w3schools.com/howto/img_avatar.png',
        birthYear: '1991',
        createdAt: new Date(),
        displayName: 'Duy Vu',
        email: 'vqduydz.learn@gmail.com',
        emailVerified: false,
        gender: 'Male',
        id: 'tTXyz382UTOVo1BMttsgol9zeN83',
        phoneNumber: '0908260591',
        photoURL: null,
    };

    // useEffect(() => {
    // const unsubscribe = onAuthStateChanged(auth, (user) => {
    //     setCurrentUser(user ? user : null);
    // });
    // return () => {
    //     unsubscribe();
    // };
    // }, []);

    // useEffect(() => {
    //     // console.log('The user is', currentUser);
    // }, [currentUser]);

    // function login(email, password) {
    //     return signInWithEmailAndPassword(auth, email, password);
    // }

    // function register(email, password, name) {
    //     return createUserWithEmailAndPassword(auth, email, password, name);
    // }

    // const forgotPassword = (email) => {
    //     return sendPasswordResetEmail(auth, email);
    // };

    // function resetPassword(oobCode, newPassword) {
    //     return confirmPasswordReset(auth, oobCode, newPassword);
    // }

    // function logout() {
    //     return signOut(auth);
    // }

    // function signInWithGoogle() {
    //     const provider = new GoogleAuthProvider();
    //     return signInWithPopup(auth, provider);
    // }

    // function signInWithFaceBook() {
    //     const provider = new FacebookAuthProvider();
    //     return signInWithPopup(auth, provider);
    // }

    // function deleteCurrentUser() {
    //     return deleteUser(auth.currentUser);
    // }

    const id = currentUser ? currentUser.id : null;
    const value = {
        id,
        currentUser,
        // signInWithFaceBook,
        // signInWithGoogle,
        // login,
        // register,
        // logout,
        // forgotPassword,
        // resetPassword,
        // deleteCurrentUser,
    };
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;
