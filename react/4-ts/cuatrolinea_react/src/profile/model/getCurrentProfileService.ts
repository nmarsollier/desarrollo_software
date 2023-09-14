import axios, { AxiosError } from "axios"
import { environment } from "../../common/environment/environment"
import { logout } from "../../user/model/logoutService"
import { Profile } from "./commonInterfaces"

export async function getCurrentProfile(): Promise<Profile | undefined> {
  try {
    return (await axios.get(environment.backendUrl + "/profile/current"))
      .data as Profile
  } catch (err) {
    const axiosError = err as AxiosError
    if (axiosError.response && axiosError.response.status === 401) {
      void logout()
    }
  }
}
