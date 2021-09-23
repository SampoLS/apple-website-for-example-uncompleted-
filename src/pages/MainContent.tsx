import styled from "styled-components";
import ShowProducts from "../components/ShowProducts";
import ModuleInfo from "../components/ModuleInfo";
import { params } from "../data/productData";

const MainContent = (): JSX.Element => {
  const [
    iphone12,
    iphone12Pro,
    iPadPro,
    iMac,
    watch,
    fitness,
    airPods,
    card,
    appleTv,
  ] = params;
  const appleProducts = [iMac, watch, fitness, airPods, card, appleTv];
  return (
    <>
      <InfoBar>
        <p>
          We look forward to welcoming you to our stores. Whether you{" "}
          <a href="/">shop in a store</a> or <a href="/">shop online</a>, our
          Specialists can help you buy the products you love.
        </p>
      </InfoBar>
      <MainBox>
        <ModuleInfo params={iphone12} />
        <ModuleInfo params={iphone12Pro} />
        <ModuleInfo params={iPadPro} />
        <ShowProducts params={appleProducts} />
      </MainBox>
    </>
  );
};
export default MainContent;

const MainBox = styled.main`
  width: 100%;
  padding-top: 10px;
`;
const InfoBar = styled.div`
  display: flex;
  align-items: center;
  background: #eee;
  height: 50px;
  font-size: 14px;
  p {
    width: 70%;
    margin: 0 auto;
    text-align: center;
  }
  a {
    color: #06c;
  }
`;
