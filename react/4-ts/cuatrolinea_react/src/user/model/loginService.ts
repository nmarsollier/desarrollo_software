import axios from "axios"
import { environment } from "../../common/environment/environment"
import { updateSessionToken } from "../../sharedStores/tokenStore"
import { Token } from "./commonInterfaces"
import { setLocalStoreToken } from "./localStorageRepository"
import { reloadCurrentProfile } from "./reloadCurrentProfileService"
import { setAxiosToken } from "./axiosService"

export async function login(params: {
  userName: string
  password: string
}): Promise<Token> {
  const res = (await axios.post(environment.backendUrl + "/user/login", params)).data as Token

  setAxiosToken(res.token)
  setLocalStoreToken(res.token)
  updateSessionToken(res.token)
  void reloadCurrentProfile().then()
  return res
}
