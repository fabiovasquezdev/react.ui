import Http from "@/infra/http"

export type AuthenticateRequest = {
    username: string
    password: string
}

type ChangePasswordRequest = {
    username: string,
    currentPassword: string,
    newPassword: string,
    confirmation: string
}

type ForgotPasswordRequest = {
    email: string
}

export class AuthUseCase extends Http {
    async authenticate(request: AuthenticateRequest): Promise<any> {

        const result = await this.post(`${import.meta.env.VITE_APP_AUTH_URL}/user/login`, request)
        return result.access_token
    }
    async changepassword(request: ChangePasswordRequest): Promise<any> {
        return await this.put(`${import.meta.env.VITE_APP_AUTH_URL}/user/changepassword`, request)
    }

    async forgotpassword(request: ForgotPasswordRequest): Promise<any> {
        return await this.put(`${import.meta.env.VITE_APP_AUTH_URL}/user/forgotpassword`, request)
    }
}

export const authUseCase = new AuthUseCase()