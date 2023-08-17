import "bootstrap/dist/css/bootstrap.css"
import React from "react"
import ReactDOM from "react-dom/client"
import App from "./app/App"
import "./styles.css"

const el = document.getElementById('root')
if (el === null) throw new Error('Root container missing in index.html')
ReactDOM.createRoot(el).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
