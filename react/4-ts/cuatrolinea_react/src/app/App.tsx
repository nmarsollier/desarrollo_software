import React from "react"
import {
  BrowserRouter, Outlet, Route, Routes
} from "react-router-dom"
import { StateLoggedInRoute } from "../common/components/LoggedInRoute"
import Info from "../info/Info"
import Profile from "../profile/Profile"
import Login from "../user/Login"
import Password from "../user/Password"
import Register from "../user/Register"
import Welcome from "../welcome/Welcome"
import Game from "../game/Game"
import "./App.css"
import Menu from "./Menu"
import Toolbar from "./Toolbar"

export default function App() {
  return (
    <BrowserRouter>
      <table className="app_table">
        <thead>
          <tr className="app_toolbar">
            <td colSpan={2} >
              <Toolbar />
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="app_menu">
              <Menu />
            </td>
            <td id="content" className="app_content">
              <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/login" element={<Login />} />
                <Route path="/newUser" element={<Register />} />
                <Route path="/info" element={<StateLoggedInRoute component={Info} />} />
                <Route path="/profile" element={<StateLoggedInRoute component={Profile} />} />
                <Route path="/password" element={<StateLoggedInRoute component={Password} />} />
                <Route path="/game" element={<StateLoggedInRoute component={Game} />} />
              </Routes>
            </td>
          </tr>
        </tbody>
      </table>
      <Outlet />
    </BrowserRouter >
  )
}
