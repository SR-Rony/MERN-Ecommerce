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

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>

        <Route path="/" element={<Root />}>
          <Route path='/home' element={<Home/>}/>
        </Route>
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
