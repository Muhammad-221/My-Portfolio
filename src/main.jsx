import { createRoot } from 'react-dom/client'
import './App.css'
import App from './App.jsx'
import { ThemeProvider } from './theme/ThemeContext'

createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
)
