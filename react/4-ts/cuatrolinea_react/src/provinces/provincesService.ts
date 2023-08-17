import axios from "axios"
import { environment } from "../app/environment/environment"

export interface Province {
  id: string
  name: string
}

export async function getProvinces(): Promise<Province[]> {
  return (await axios.get(environment.backendUrl + "/province/list"))
    .data as Province[]
}
