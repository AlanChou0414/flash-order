import { ChakraProvider } from '@chakra-ui/react'
import { router } from '@routes/index'
import { RouterProvider } from 'react-router-dom'

const App = () => {
  return (
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  )
}

export default App
