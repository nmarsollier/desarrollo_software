import axios from "axios"
import { User } from "./commonInterfaces"

// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
axios.defaults.headers.common["Content-Type"] = "application/json"

// Valores almacenados en LOCAL STORE
export function getLocalStoreToken(): string | undefined {
    const result = localStorage.getItem("token")
    return result ? result : undefined
}

export function setLocalStoreToken(token: string) {
    localStorage.setItem("token", token)
}

export function getLocalStoreUser(): User | undefined {
    return localStorage.getItem("user") as any as User
}

export function setLocalStoreUser(user: User | undefined) {
    localStorage.setItem("user", JSON.stringify(user))
}

export function clearLocalStreToken() {
    localStorage.removeItem("token")
    localStorage.removeItem("user")
}
