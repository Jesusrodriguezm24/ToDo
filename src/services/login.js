import { axiosInstance } from "../api/axiosInstances";

export const login = async ({ email, password }) => {
    try {
        const res = await axiosInstance.post('user/token', { email, password });
        return res.data;
    } catch (error) {
        console.error(error);
    }
    
}
