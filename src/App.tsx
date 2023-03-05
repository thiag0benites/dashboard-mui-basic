import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Users from "./pages/Users"
import Analytics from "./pages/Analytics"
import Settings from "./pages/Settings"

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/users" element={<Users />}></Route>
          <Route path="/analytics" element={<Analytics />}></Route>
          <Route path="/settings" element={<Settings />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}