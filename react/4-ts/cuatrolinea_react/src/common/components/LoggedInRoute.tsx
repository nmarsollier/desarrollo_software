import React from "react"
import { Navigate } from 'react-router-dom'
import { useSessionToken } from "../../store/tokenStore"
import { FC } from 'react'


interface PropType {
  component: React.FC;
}

export const StateLoggedInRoute: FC<PropType> = ({ component: Component }) => {
  const token = useSessionToken()

  const isAuthenticated  = token !== undefined

  if (isAuthenticated) return <Component />
  return <Navigate to='/' />
}
