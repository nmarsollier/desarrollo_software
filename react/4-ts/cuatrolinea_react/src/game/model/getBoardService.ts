import axios, { AxiosError } from "axios"
import { environment } from "../../common/environment/environment"
import { logout } from "../../user/model/logoutService"
import { Board } from "./commonInterfaces"

export async function getBoard(
  board: string
): Promise<Board> {
  try {
    return (await axios.get(environment.backendUrl + `/game/${board}/board`)).data as Board
  } catch (err) {
    const axiosError = err as AxiosError
    if (axiosError.response && axiosError.response.status === 401) {
      void logout()
    }
    throw err
  }
}