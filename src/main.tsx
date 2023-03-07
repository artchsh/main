import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from "react-router-dom"
import Routes from './routes'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '@/utilities/theme'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={ theme }>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
)
