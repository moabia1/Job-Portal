import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from './components/Theme-provider'
import './App.css'
import { ClerkProvider } from '@clerk/clerk-react'
import App from './App.jsx'
import { shadesOfPurple } from '@clerk/themes'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

createRoot(document.getElementById("root")).render(
  <ClerkProvider
      appearance={{
        baseTheme:shadesOfPurple
      }}
      publishableKey={PUBLISHABLE_KEY}>
  <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    
      <BrowserRouter>
        <App />
      </BrowserRouter>
    
    </ThemeProvider>
    </ClerkProvider>
);
