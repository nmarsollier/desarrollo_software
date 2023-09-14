import { updateSessionToken } from "../../sharedStores/tokenStore"
import { updateSessionUser } from "../../sharedStores/userStore"
import { setAxiosToken } from "./axiosService"
import { getLocalStoreToken, getLocalStoreUser } from "./localStorageRepository"
import { reloadCurrentProfile } from "./reloadCurrentProfileService"

/*
Cuando iniciamos la app verificamos que el usuario este logueado
*/
if (getLocalStoreToken()) {
    const currentUser = getLocalStoreUser()
    const currentToken = getLocalStoreToken()
    if (currentUser !== undefined && currentToken !== undefined) {
        setAxiosToken(currentToken)
        updateSessionToken(currentToken)
        updateSessionUser(currentUser)
        void reloadCurrentProfile().then()
    }
}
