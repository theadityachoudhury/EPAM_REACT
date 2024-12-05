import instance from './helpers/axios';

const API_BASE_URL = 'https://api.example.com';

export const getCourses = async () => {
    const response = await instance.get(`/courses/all`);
    return response.data.result;
};

export const getAuthors = async () => {
    const response = await instance.get(`/authors/all`);
    return response.data.result;
};

export const loginUser = async (credentials: { email: string; password: string }) => {
    const response = await instance.post(`/login`, credentials);
    return response.data;
};
