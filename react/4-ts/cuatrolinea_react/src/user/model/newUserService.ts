import axios from "axios"
import { environment } from "../../common/environment/environment"
import { updateSessionToken } from "../../sharedStores/tokenStore"
import { Token } from "./commonInterfaces"
import { setLocalStoreToken } from "./localStorageRepository"
import { reloadCurrentProfile } from "./reloadCurrentProfileService"

export async function newUser(params: {
  userName: string
  password: string
}): Promise<Token> {
  const res = (await axios.post(environment.backendUrl + "/user/register", params)).data as Token
  setLocalStoreToken(res.token)
  updateSessionToken(res.token)
  void reloadCurrentProfile().then()
  return res
}
