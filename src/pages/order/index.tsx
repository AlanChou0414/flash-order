import { VStack } from "@chakra-ui/react";
import { Layout } from "@components/layout";
import { orders, tabs } from "@data/index";
import i18n from "@i18n";
import { useLocation } from "react-router-dom";

/* Order Index */
const PageMain = () => {
  const location = useLocation();
  const { stayIn, guest } = location.state;

  return (
    <Layout title={i18n.t('ordering')} mode={stayIn} guest={guest}
      shoppingItems={orders} tabItems={tabs}>
      <VStack>

      </VStack>
    </Layout>
  );
};

export default PageMain;