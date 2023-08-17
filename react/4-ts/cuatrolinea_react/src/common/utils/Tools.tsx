import { useState } from "react"

export function useForceUpdate(): () => any {
  const setForceUpdate = useState(0)[1]

  return () => {
    setForceUpdate(Date.now)
  }
}
