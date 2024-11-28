import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home';
import LandingPage from './pages/landingPage';
import Login from './pages/login';
import Register from './pages/register';
import NotFound from './pages/notFound';
import { RouterProvider } from 'react-router-dom';
import MainRouter from './routes/main';


function App() {

  
  return (
    <>

    <RouterProvider router={MainRouter}/>
     
    </>
  )
}

export default App
