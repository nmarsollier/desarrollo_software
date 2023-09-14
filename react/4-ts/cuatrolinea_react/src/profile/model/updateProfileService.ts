import axios, { AxiosError } from "axios"
import { environment } from "../../common/environment/environment"
import { logout } from "../../user/model/logoutService"
import { Profile } from "./commonInterfaces"

export async function updateProfile(params: {
  name: string
  phone: string
  email: string
  address: string
  provinceId: string
  picture: string
}): Promise<Profile> {
  try {
    const res = (
      await axios.post(environment.backendUrl + "/profile/update", params)
    ).data as Profile
    return res
  } catch (err) {
    if ((err as AxiosError).code === "401") {
      void logout()
    }
    throw err
  }
}