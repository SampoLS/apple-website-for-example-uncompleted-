import ModuleInfo from "./ModuleInfo";
import styled from "styled-components";
type App = {
  params: {
    title?: string;
    subTitle?: string;
    priceInfo1?: string;
    priceInfo2?: string;
    imgPath?: string;
    theme?: { backgroundColor?: string; backgroundPosition?: string };
  }[];
};
const Intermediate = (props: App): JSX.Element => {
  const { params } = props;
  const [iMac, watch, fitness, airPods, card, appleTv] = params;
  return (
    <ShowProductsContent>
      <ModuleInfo params={iMac} />
      <ModuleInfo params={watch} />
      <ModuleInfo params={fitness} />
      <ModuleInfo params={airPods} />
      <ModuleInfo params={card} />
      <ModuleInfo params={appleTv} />
    </ShowProductsContent>
  );
};
export default Intermediate;

const ShowProductsContent = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 550px 550px;
  grid-gap: 10px;
  background-color: white;
`;
