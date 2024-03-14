import { Heading, VStack } from "@chakra-ui/react";

const PageMain = () => {
  return (
    <VStack spacing={3} height="100vh" justifyContent="center" bg="gray.900">
      <Heading as='h1' size='4xl' color='red.500'>Oops!</Heading>
    </VStack>
  );
};

export default PageMain;