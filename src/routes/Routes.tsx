import { BrowserRouter, Routes, Route } from "react-router-dom"
import AboutPage from "../pages/About"
import MainPage from "../pages/Main"

function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route index path='/' element={<MainPage />} />
            <Route path='/about' element={<AboutPage />} />

        </Routes>
    </BrowserRouter>
  )
}

export default Router
