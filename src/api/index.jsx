import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: '',
});

const API = {
    addStudent: (payload) => {
        const url = `/student/add`;
        return axiosInstance.post(url, payload.body);
    },
    updateStudent: (payload) => {
        const url = `/student/update/${payload.student_id}`;
        return axiosInstance.put(url, {
            ...payload.body,
        });
    },
}
export default API;