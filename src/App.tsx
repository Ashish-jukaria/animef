
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Navbar } from './Components/Navbar'
import { AuthContextProvider } from './Components/AuthContextProvider'
import { ProtectedRoute } from './Components/ProtectedRoute'
import { Login } from './Components/Login'
import { Dashboard } from './Components/Dashboardd'
import { Signup } from './Components/Signup'
import PreferenceForm from './Components/PreferenceForm'
import { Results } from './Components/Results'
import { Home } from './Components/Home'

function App() {


  return (
    <>
    <BrowserRouter>
    <AuthContextProvider>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/result' element={<Results/>}/>
      
      <Route element={<ProtectedRoute/>}>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/prefrence' element={<PreferenceForm/>}/>
      </Route>
    
    </Routes>
    </AuthContextProvider>
    </BrowserRouter>
   
    
    </>
  )
}

export default App
