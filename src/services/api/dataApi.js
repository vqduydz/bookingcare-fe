import { axiosService } from './axiosClient';

export const userApi = (id) => {
    if (!id) {
        const url = `/user`;
        return axiosService.get(url);
    } else {
        const url = `/user?id=${id}`;
        return axiosService.get(url);
    }
};

export const getTokenLoginApi = (param) => {
    const url = '/login';
    return axiosService.post(url, param);
};

export const forgotPasswordApi = (param) => {
    const url = '/forgot-password';
    return axiosService.post(url, param);
};

export const resetPasswordApi = (token, password) => {
    const url = `reset-password/${token}`;
    return axiosService.patch(url, password);
};

export const loginApi = (token) => {
    const url = '/login';
    return axiosService.get(url, {
        headers: {
            Authorization: 'Bearer ' + token,
        },
    });
};

export const createNewUserApi = (dataUser) => {
    const url = `/user`;
    return axiosService.post(url, dataUser);
};

export const updateUserApi = (dataUpdate) => {
    const url = `/user`;
    return axiosService.patch(url, dataUpdate);
};

// export const deleteUser = (id) => {
//     const url = `/user-delete?id=${id}`;
//     return axiosService.get(url);
// };
export const deleteUserApi = (id) => {
    const url = `/user`;
    return axiosService.delete(url, { data: { id } });
};
