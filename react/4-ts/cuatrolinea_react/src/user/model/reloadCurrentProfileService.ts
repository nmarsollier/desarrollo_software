import axios, { AxiosError } from "axios"
import { environment } from "../../common/environment/environment"
import { updateSessionUser } from "../../sharedStores/userStore"
import { User } from "./commonInterfaces"
import { logout } from "./logoutService"
import { setLocalStoreUser } from "./localStorageRepository"

export async function reloadCurrentProfile(): Promise<User | undefined> {
  try {
    const res = (await axios.get(environment.backendUrl + "/profile/current")).data as User
    localStorage.setItem("user", JSON.stringify(res))
    setLocalStoreUser(res)
    updateSessionUser(res)
    return res
  } catch (err) {
    const axiosError = err as AxiosError
    if (axiosError.response && axiosError.response.status === 401) {
      void logout()
    }
  }
}
