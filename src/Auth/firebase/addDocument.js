import axios from 'axios';
import { getAdditionalUserInfo } from 'firebase/auth';

function addDocument(user, fullName) {
    const details = getAdditionalUserInfo(user);

    if (details.isNewUser) {
        const { displayName, email, photoURL, uid, phoneNumber, emailVerified } = user.user;
        const dataDoc = {
            displayName: displayName || fullName,
            email,
            photoURL,
            id: uid,
            phoneNumber,
            emailVerified,
            gender: null,
            birthYear: null,
            avatarUrl: null,
            fullName: null,
        };

        axios
            .post('http://localhost:3099/api/users', dataDoc)
            .then(() => console.log(1232))
            .catch(() => console.log(67867));
    }
}

export default addDocument;
