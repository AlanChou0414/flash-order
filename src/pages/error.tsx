import { Box, Heading, Text } from "@chakra-ui/react";

const PageMain = () => {
  return (
    <Box display='flex' alignItems='center' justifyContent='center'
      flexDirection='column' width='100%' height='100vh'>
      <Heading as='h1' size='4xl' color='error'>Oops!</Heading>
      <Text fontSize='2xl' color='text'>
        Sorry, an unexpected error has occurred.
      </Text>
    </Box>
  )
}

export default PageMain