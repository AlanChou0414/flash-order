import { VStack } from "@chakra-ui/react";
import { Layout } from "@components/layout";
import i18n from "@i18n";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

/* Order Index */
const PageMain = () => {
  const location = useLocation();
  const { stayIn, guest } = location.state;
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/data/order.json');
        setData(response.data.data);
      } catch (error) { return; }
    };
    fetchData();
  }, []);

  return (
    <Layout title={i18n.t('ordering')} mode={stayIn} guest={guest}
      shoppingItems={[]} tabItems={data}>
      <VStack>

      </VStack>
    </Layout>
  );
};

export default PageMain;