import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import AppRouter from './router/AppRouter.tsx'
import { QueryClient, QueryClientProvider } from 'react-query'
import "./style.css"

const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <ChakraProvider>
      <AppRouter/>
    </ChakraProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
