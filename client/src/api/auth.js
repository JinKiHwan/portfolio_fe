import axios from 'axios';

const API = axios.create({
    baseURL: 'http://localhost:5000', // 백엔드 주소에 맞게 수정
    headers: {
        'Content-Type': 'application/json',
    },
});

export const loginAdmin = async (username, password) => {
    console.log('요청데이터', { username, password });
    const res = await API.post('/auth/login', { username, password });
    return res.data;
};
