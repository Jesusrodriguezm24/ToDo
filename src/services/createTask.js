import { axiosInstance } from "../api/axiosInstances";

export const createTask = async (task) => {
    try {
       await axiosInstance.post("tasks/", task);
       
    } catch (error) {
        console.error("task not added", error);
    }
}