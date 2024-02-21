import './App.css'
import Home from './paginas/home/Home'
import NavBar from './components/navBar/NavBar'
import Footer from './components/footer/Footer'
import Login from './paginas/login/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cadastrar from './paginas/cadastro/Cadastro'
import { AuthProvider } from './contexts/AuthContext'

function App() {
    return (
        <>
            <AuthProvider>
                <BrowserRouter>
                    <NavBar />
                    <div className='min-h-[80vh]'>
                        <Routes>
                            <Route path="/" element={<Login />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/cadastro" element={<Cadastrar />} />
                            <Route path="/home" element={<Home />} />
                        </Routes>
                    </div>
                    <Footer />
                </BrowserRouter>
            </AuthProvider>
        </>
    )
}

export default App