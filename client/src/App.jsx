import React from 'react'
import './App.css'
import { 
  createRoutesFromElements,
  createBrowserRouter,
  Route, RouterProvider 
} from 'react-router-dom'
import Root from './components/root-layout/Root';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Error from './pages/Error';
import Contact from './pages/Contact';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/singup' element={<Register/>}/>
        <Route path='*' element={<Error/>}/>
      </Route>
    )
  );



  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
