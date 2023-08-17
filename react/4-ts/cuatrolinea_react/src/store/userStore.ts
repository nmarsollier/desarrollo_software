import { useLayoutEffect, useState } from "react"
import { BehaviorSubject } from "rxjs"
import { User } from "../user/userService"

const userSubject = new BehaviorSubject<User | undefined>(undefined)

export function useSessionUser() {
  const [user, setUser] = useState(userSubject.value)

  useLayoutEffect(() => {
    userSubject.subscribe((newState: User | undefined) => {
      setUser(newState)
    })
  }, [])

  return user
}

export function updateSessionUser(user: User) {
  userSubject.next(user)
}

export function cleanupSessionUser() {
  userSubject.next(undefined)
}
