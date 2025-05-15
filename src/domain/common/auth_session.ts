export type AuthSession = {
    exp: number
    sid: string
    zapienClientId: string
    name: string
    zapienUserId: string
    preferred_username: string
    given_name: string
    family_name: string
    email: string
    sub: string
}