import React from "react"
import "./Toolbar.css"
import { environment } from "../environment/environment"
import { useSessionUser } from "../store/userStore"

export default function Toolbar() {
  const user = useSessionUser()

  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark d-flex shadow">
      <div className="toolbar_icon">
        <img src="/assets/favicon.png" alt=""></img>
      </div>

      <div className="toolbar_title navbar-brand flex-grow-1">
        Cuatro en Linea {user ? " - " + user.name : ""}
      </div>

      <div className="btn-group navbar-nav">
        <a href={environment.backendUrl + "/"} target="apidoc"
          className="toolbar_button btn btn-outline-secondary btn-sm nav-link">
          ApiDoc
          </a>
      </div>
    </nav>
  )
}
