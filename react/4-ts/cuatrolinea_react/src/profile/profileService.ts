import axios, { AxiosError } from "axios"
import { environment } from "../environment/environment"
import { logout } from "../user/userService"

interface Profile {
  name: string
  phone: string
  email: string
  address: string
  provinceId: string
  picture: string
}

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
