import { AxiosInstance } from 'axios';
import { interceptors } from '../interceptor';

abstract class Http {
    private axiosInstance: AxiosInstance;

    constructor() {
        this.axiosInstance = interceptors();
    }

    private includeFormData(headers?: Record<string, string>, isMultiPart = false): Record<string, string> {
        return {
            ...headers,
            ...(isMultiPart ? { 'Content-Type': 'multipart/form-data' } : { 'Content-Type': 'application/json' })
        };
    }

    async get(url: string, params?: object, headers?: Record<string, string>): Promise<any> {
        return await this.axiosInstance.get(url, { params, headers });
    }

    async audio(url: string, headers?: Record<string, string>): Promise<any> {
        return await this.axiosInstance.get(url, {
            headers,
            responseType: 'arraybuffer'
        });
    }

    async post(url: string, body: object | FormData, headers?: Record<string, string>, isMultiPart = false): Promise<any> {
        return await this.axiosInstance.post(url, body, {
            headers: this.includeFormData(headers, isMultiPart)
        });
    }

    async postForm(url: string, formData: FormData, headers?: Record<string, string>): Promise<any> {
        return await this.axiosInstance.post(url, formData, {
            headers: this.includeFormData(headers, true)
        });
    }

    async auth(url: string, body: object): Promise<any> {
        return await this.axiosInstance.post(url, body, {
            headers: { 'Content-type': 'application/x-www-form-urlencoded' }
        });
    }

    async put(url: string, body: object | FormData, headers?: Record<string, string>, isMultiPart = false) {
        return await this.axiosInstance.put(url, body, {
            headers: this.includeFormData(headers, isMultiPart)
        });
    }

    async patch(url: string, body: object | FormData, headers?: Record<string, string>, isMultiPart = false) {
        return await this.axiosInstance.patch(url, body, {
            headers: this.includeFormData(headers, isMultiPart)
        });
    }

    async delete(url: string, headers?: Record<string, string>) {
        return await this.axiosInstance.delete(url, { headers });
    }
}

export default Http;
