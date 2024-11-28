import { RouterProvider } from 'react-router-dom';
import MainRouter from './routes/main';
import Toast from './services/toast';


function App() {

  
  return (
    <>

    <RouterProvider router={MainRouter}/>
    <Toast/>
     
    </>
  )
}

export default App
