import axios, { AxiosError } from "axios"
import { environment } from "../../common/environment/environment"
import { Board } from "./commonInterfaces"
import { logout } from "../../user/model/logoutService"

export async function play(
  board: string,
  column: number
): Promise<Board> {
  try {
    return (await axios.post(environment.backendUrl + `/game/${board}/play`, {}, {
      params: {
        column
      }
    }
    )).data as Board
  } catch (err) {
    const axiosError = err as AxiosError
    if (axiosError.response && axiosError.response.status === 401) {
      void logout()
    }
    throw err
  }
}
