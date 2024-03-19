import { Layout } from "@components/layout";
import i18n from "@i18n";
import { useLocation } from "react-router-dom";

/* Order Index */
const PageMain = () => {
  const location = useLocation();
  const { stayIn, guest } = location.state;

  return (
    <Layout title={i18n.t('ordering')} shoppingItems={10} mode={stayIn} guest={guest}>
      <></>
    </Layout>
  );
};

export default PageMain;