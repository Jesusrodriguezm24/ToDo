import { axiosInstance } from "../api/axiosInstances";

export const createTask = async (task) => {
    try {
       await axiosInstance.post("task/", task);
       
    } catch (error) {
        console.error("task not added", error);
    }
}