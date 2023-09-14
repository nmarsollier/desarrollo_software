import axios from "axios"
import { environment } from "../../common/environment/environment"
import { cleanupSessionToken } from "../../sharedStores/tokenStore"
import { cleanupSessionUser } from "../../sharedStores/userStore"
import { clearAxiosToken } from "./axiosService"
import { clearLocalStreToken } from "./localStorageRepository"

export async function logout(): Promise<void> {
  clearLocalStreToken()
  clearAxiosToken()

  try {
    await axios.get(environment.backendUrl + "/user/logout")
    return
  } catch (err) {
    return
  } finally {
    cleanupSessionToken()
    cleanupSessionUser()
  }
}
