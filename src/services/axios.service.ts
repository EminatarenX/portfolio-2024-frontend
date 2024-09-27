import axios, { AxiosInstance } from 'axios'

export const axiosClient: AxiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:4000/api/v1',
    headers: {
        'Content-Type': 'application/json',
    }
})

