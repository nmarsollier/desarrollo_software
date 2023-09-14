import axios, { AxiosError } from "axios"
import { environment } from "../../common/environment/environment"
import { logout } from "../../user/model/logoutService"
import { Board } from "./commonInterfaces"

export async function newGame(): Promise<Board> {
  try {
    const res = (
      await axios.post(environment.backendUrl + "/game/new")
    ).data as Board
    return res
  } catch (err) {
    if ((err as AxiosError).code === "401") {
      void logout()
    }
    throw err
  }
}
