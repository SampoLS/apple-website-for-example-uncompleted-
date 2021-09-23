import styled, { ThemeProvider } from "styled-components";

type Params = {
  params: {
    title?: string;
    subTitle?: string;
    priceInfo1?: string;
    priceInfo2?: string;
    imgPath?: string;
    theme?: { backgroundColor?: string; backgroundPosition?: string };
  };
};

const ModuleInfo = (props: Params): JSX.Element => {
  const { params } = props;
  const { title, subTitle, priceInfo1, priceInfo2, imgPath, theme } = params;
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <PriceInfo>
          <HeadLine>{title}</HeadLine>
          <SubHead>{subTitle}</SubHead>
          <InfoBox>
            <p>{priceInfo1}</p>
            <p>{priceInfo2}</p>
            <BuyBox>
              <a href="/">Learn more </a>
              <a href="/">Buy</a>
            </BuyBox>
          </InfoBox>
        </PriceInfo>
        <ImgBox>
          <BackgroundImg
            background={imgPath}
            backgroundPosition={theme!.backgroundPosition}
          ></BackgroundImg>
        </ImgBox>
      </Container>
    </ThemeProvider>
  );
};
export default ModuleInfo;

const Container = styled.article`
  background-color: ${({ theme }) => theme.backgroundColor};
  color: ${(props) => props.theme.fontColor};
  margin-top: 10px;
  overflow: hidden;
`;
const PriceInfo = styled.div`
  background: ${({ theme }) => theme.backgroundColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;
const HeadLine = styled.h2`
  font-size: 56px;
  font-weight: 600;
  letter-spacing: -0.1rem;
  font-size: ${(props) => props.theme.h2fontSize};
  letter-spacing: 1px;
  width: 70%;
  text-align: center;
  margin-top: 10px;
  padding-top: 10px;
`;
const SubHead = styled.h3`
  font-size: 28px;
  font-weight: 400;
  font-size: ${(props) => props.theme.h3fontSize};
  letter-spacing: 1px;
  text-align: center;
  width: 70%;
`;
const InfoBox = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: #999;
  margin-top: 10px;
  text-align: center;
`;
const BuyBox = styled.section`
  padding: 10px;
  a {
    padding: 30px;
    color: #06c;
  }
`;
const ImgBox = styled.div`
  overflow: hidden;
  img {
    width: 100%;
  }
`;
interface BakcgroundSetting {
  background?: string;
  backgroundPosition?: string;
}
const BackgroundImg = styled.figure<BakcgroundSetting>`
  height: 350px;
  background: url(${(props) => props.background});
  background-position: ${(props) => props.backgroundPosition};
  background-repeat: no-repeat;
`;
