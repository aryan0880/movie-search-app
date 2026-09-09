import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import { FavouritesProvider } from './context/FavouritesContext'
import ErrorBoundary from './components/ErrorBoundary'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <HelmetProvider>
    <ErrorBoundary>
      <FavouritesProvider>
        <App />
      </FavouritesProvider>
    </ErrorBoundary>
  </HelmetProvider>
)
