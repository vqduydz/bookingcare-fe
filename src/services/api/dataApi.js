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
