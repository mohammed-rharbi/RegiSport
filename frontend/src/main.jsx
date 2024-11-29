import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AuthProvider } from './hooks/authContext.jsx'
import { EventProvider } from './hooks/eventsContext.jsx'
createRoot(document.getElementById('root')).render(

  <AuthProvider>
    <EventProvider>
    <App />
    </EventProvider>,
  </AuthProvider>,
)
