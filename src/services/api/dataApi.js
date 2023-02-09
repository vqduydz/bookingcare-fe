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

export const login = (param) => {
    const url = '/login';
    return axiosService.post(url, param);
};

export const createNewUser = (dataUser) => {
    const url = `/user`;
    return axiosService.post(url, dataUser);
};

export const updateUser = (dataUpdate) => {
    const url = `/user-update`;
    return axiosService.patch(url, dataUpdate);
};

// export const deleteUser = (id) => {
//     const url = `/user-delete?id=${id}`;
//     return axiosService.get(url);
// };
export const deleteUser = (id) => {
    const url = `/user-delete`;
    return axiosService.delete(url, { data: { id } });
};
