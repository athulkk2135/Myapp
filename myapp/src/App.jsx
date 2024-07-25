import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import Navbar from './components/Navbar'
import Signup from './components/Signup'
import StateBasics from './components/StateBasics'
import Counter from './components/Counter'
import Greeting from './components/Greeting'
import Mapping from './components/Mapping'
import Api from './components/Api'
import Posts from './components/Posts'
import Poke from './components/Poke'


function App() {
 
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/s' element={<Signup />} />
        <Route path='/l' element={<Login />} />
        <Route path='/r' element={<StateBasics />} /> 
        <Route path='/c' element={<Counter />} />
        <Route path='/g' element={<Greeting />} />
        <Route path='/m' element={<Mapping />} />
        <Route path='/a' element={<Api />} />
        <Route path='/p' element={<Posts />} />
        <Route path='/po' element={<Poke/>} />


      </Routes>
      {/* <Signup /> */}
      {/* <Login/> */}
    </>
  )
}

export default App
