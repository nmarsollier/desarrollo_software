import axios, { AxiosError } from "axios"
import { environment } from "../../common/environment/environment"
import { logout } from "./logoutService"

export async function changePassword(params: {
  currentPassword: string
  newPassword: string
}): Promise<void> {
  try {
    await axios.post(environment.backendUrl + "/user/changePassword", params)
    return
  } catch (err) {
    const axiosError = err as AxiosError

    if (axiosError.response && axiosError.response.status === 401) {
      void logout()
    }
    throw err
  }
}


