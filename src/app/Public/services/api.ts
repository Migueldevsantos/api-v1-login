import axios from 'axios';

const api = axios.create({
    baseURL: "http://localhost:8000"
});

const Public_api = () => ({
    login: async(email: string, password: string) => {
        const response = await api.post("/auth/login", {email, password})
        return response.data;
    },
    register: async(nome: string, email: string, telefone: string, nacimento: string, password: string) => {
        const response = await api.post("/auth/register", {nome, email, telefone, nacimento, password})
        return response.data;
    }
});

export default Public_api;