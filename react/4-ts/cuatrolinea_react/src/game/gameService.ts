import axios, { AxiosError } from "axios"
import { environment } from "../environment/environment"
import { logout } from "../user/userService"

export interface Board {
  id: string
  user1: string
  user2: string
  board: string[][]
  turn: string
  winner: string
  match: boolean
}

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