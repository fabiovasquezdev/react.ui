import { AuthSession } from '@/domain/common/auth_session';
import { LocalStorage } from '@/infra/storage';
import {  PROFILE, SESSION_KEY, TOKEN_KEY } from '@/infra/storage/keys';
import { jwtDecode as decode } from 'jwt-decode'
import { interceptors } from '@/infra/interceptor';

function decodeUnverifiedToken(token: string): any | null {
    try {
        const decoded = decode(token) as any
        return decoded;
    } catch (err) {
        console.error("error decoding token: ", err)
        return null
    }
}

class TokenUseCase {
    private readonly TOKEN_REFRESH_THRESHOLD = 10 * 60; 

    saveTokenAndSession(token: string) {
        if (!token) throw new Error("no token provided")

        const session = decodeUnverifiedToken(token)
        if (!session) return
        localStorage.setItem(TOKEN_KEY, token)
    }

    getToken(): string | null {
        const token = localStorage?.getItem(TOKEN_KEY);
        return token;
    }


    getSession(): AuthSession | null {
        const session = decodeUnverifiedToken(localStorage.getItem(TOKEN_KEY) ?? "")

        return session
    }

    isTokenExpired(): boolean {
        const session = this.getSession();
        if (!session) return true;

        const currentTime = Math.floor(Date.now() / 1000);
        return session.exp <= currentTime;
    }

    isTokenExpiringSoon(): boolean {
        const session = this.getSession();
        if (!session) return true;

        const currentTime = Math.floor(Date.now() / 1000);
        return session.exp - currentTime <= this.TOKEN_REFRESH_THRESHOLD;
    }

    async refreshToken(): Promise<string> {
        try {
            const http = interceptors();
            const response = await http.post(`${import.meta.env.VITE_APP_AUTH_URL}/refresh-token`, {
                currentToken: this.getToken()
            });

            const newToken = response.data.access_token;
            this.saveTokenAndSession(newToken);
            return newToken;
        } catch (error) {
            console.error('Error refreshing token:', error);
            this.finishSession();
            throw new Error('Failed to refresh token');
        }
    }

    getProfile(): any {
        const profile = LocalStorage.get(PROFILE)
        return profile ?? {}
    }

    saveProfile(profile: any) {
        LocalStorage.save(PROFILE, profile)
    }

    finishSession() {
        localStorage.removeItem(TOKEN_KEY)
        localStorage.removeItem(SESSION_KEY)
        localStorage.clear()
    }
}

export const tokenUseCase = new TokenUseCase()