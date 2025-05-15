import axios from "axios";
import { handleResponse } from "../../data/api-response";
import { tokenUseCase } from "@/data/usecases/auth/token-usecase";
import defaultErrorDictionary from "@/domain/errors/error-dictionary";

export const interceptors = () => {
    const http = axios.create();
    const useError = defaultErrorDictionary()

    http.interceptors.request.use(
        async config => {
            if (tokenUseCase.isTokenExpired()) {
                tokenUseCase.finishSession();
                throw new Error('Token expired');
            }

            if (tokenUseCase.isTokenExpiringSoon()) {
                try {
                    await tokenUseCase.refreshToken();
                } catch (error) {
                    console.error('Failed to refresh token:', error);
                    tokenUseCase.finishSession();
                    throw new Error('Failed to refresh token');
                }
            }

            config.headers['Authorization'] = `Bearer ${tokenUseCase.getToken()}`;
            return config;
        },
        error => {
            return Promise.reject(error);
        }
    );

    http.interceptors.response.use(
        response => {
            return handleResponse(response, {
                onSuccess: data => {
                    return data;
                },
                failureMap: {
                    ...useError,
                    401: () => {
                        tokenUseCase.finishSession();
                        throw new Error('Unauthorized');
                    }
                }
            });
        },
        error => {
            return handleResponse(error.response, {
                failureMap: {
                    ...useError,
                }
            });
        }
    );
    return http;
};