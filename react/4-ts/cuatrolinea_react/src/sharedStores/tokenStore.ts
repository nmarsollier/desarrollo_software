import { useLayoutEffect, useState } from "react"
import { BehaviorSubject } from "rxjs"


const tokenSubject = new BehaviorSubject<string | undefined>(undefined)

export function useSessionToken() {
  const [token, setToken] = useState(tokenSubject.value)

  useLayoutEffect(() => {
    tokenSubject.subscribe((newState: string | undefined) => {
      setToken(newState)
    })
  }, [])

  return token
}

export function updateSessionToken(token: string) {
  tokenSubject.next(token)
}

export function cleanupSessionToken() {
  tokenSubject.next(undefined)
}
