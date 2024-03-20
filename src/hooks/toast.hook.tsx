import { CheckIcon, InfoIcon, WarningTwoIcon } from "@chakra-ui/icons";
import { Grid, GridItem, Text, useToast } from "@chakra-ui/react";
import i18n from "@i18n";

export const useCustomToast = () => {
  const toast = useToast({
    title: i18n.t('message'),
    status: 'warning',
    position: 'top',
    isClosable: true,
    duration: 3000,
    render: (props) => (
      <Grid bg="teal.800" opacity={.9} borderRadius="10px" minH="3rem" color="white" p="1rem"
        templateRows="repeat(2, 1fr)" templateColumns="repeat(10, 1fr)" gap={1}>
        <GridItem rowSpan={2} colSpan={1}>
          {props.status === 'success' && <CheckIcon />}
          {props.status === 'warning' && <InfoIcon />}
          {props.status === 'error' && <WarningTwoIcon />}
        </GridItem>
        <GridItem colSpan={9}>
          <Text as="b" fontSize="lg">{props.title}</Text>
        </GridItem>
        <GridItem colSpan={9}>
          <Text fontSize="sm">{props.description}</Text>
        </GridItem>
      </Grid>
    )
  });
  return toast;
};

